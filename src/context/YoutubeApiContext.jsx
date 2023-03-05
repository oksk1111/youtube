import { createContext, useContext } from "react";
import FakeYoutubeClient from "../api/fakeYotubeClient";
import Youtube from "../api/youtube";

export const YoutubeApiContext = createContext();

const client = new FakeYoutubeClient(); // 테스트용 데이터 처리
// const client = new YoutubeClient(); // 배포용 데이터 처리

// 외부에서 실제 공유할 객체
//- DI(=Dependency Injection)로 위 두 객체중 한개를 주입하여 사용
const youtube = new Youtube(client);

// Context를 사용함으로 인해 객체를 한번만 생성하고 공유할 수 있다
export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
