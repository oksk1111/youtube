export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  // 채널 상세 정보 API - image url만 가져오기
  async channelImageURL(id) {
    return this.apiClient
      .channels({ params: { part: "snippet", id } })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  // 연관동영상 API
  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          type: "video",
          relatedToVideoId: id,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  // # = private function
  async #searchByKeyword(keyword) {
    return (
      this.apiClient
        .search({
          // = axios.get
          params: {
            part: "snippet",
            maxResults: 25,
            type: "video",
            q: keyword,
          },
        })
        // YoutubeAPI로부터 가져오는 id 위치가 달라서 일치시켜주기 위한 작업
        .then((res) =>
          res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
        )
    );
  }

  async #mostPopular() {
    return this.apiClient
      .videos({
        // = axios.get
        params: {
          part: "snippet",
          maxResults: 25,
          chart: "mostPopular",
        },
      })
      .then((res) => res.data.items);
  }
}
