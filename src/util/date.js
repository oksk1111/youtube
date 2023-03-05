// 시간표기 lib
//- register를 통해 언어팩 변경 가능
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko"; // 한글 언어팩

register("ko", koLocale); // 새로 받은 언어팩 등록

export function formatAgo(date, lang = "en_US") {
  return format(date, lang);
}
