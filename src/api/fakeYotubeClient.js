import axios from "axios";

export default class FakeYoutubeClient {
  async search({ params }) {
    return params.relatedToVideoId
      ? axios.get("/videos/related.json")
      : axios.get("/videos/search.json");
  }
  async videos() {
    return axios.get("/videos/popular.json");
    // .then((res) => {
    //   // handle success
    // })
    // .catch((e) => {
    //   // handle error
    //   console.log(e);
    // })
    // .finally(() => {
    //   // always executed
    // });
  }

  async channels() {
    return axios.get("/videos/channel.json");
  }
}
