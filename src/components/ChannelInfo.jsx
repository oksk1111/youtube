import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  // 썸네일을 Youtube API를 이용해 받아오자
  const {
    // isLoading,
    // error,
    data: url,
  } = useQuery(["channel", id], () => youtube.channelImageURL(id), {
    staleTime: 1000 * 60 * 5,
  });

  return (
    <div className="flex my-4 mb-8 items-center">
      {url && <img className="w-10 h-10 rounded-full" src={url} alt={name} />}
      <p className="text-lg font-medium ml-2">{name}</p>
    </div>
  );
}
