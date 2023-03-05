import React, { useEffect, useState } from "react";
import { BsYoutube, BsSearch } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SearchHeader() {
  // createBrowserRouter()에서 ":keyword"로 지정한 항목
  //- 해당값이 업데이트 > useEffect를 이용해 해당값으로 text도 업데이트
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    // Javascript 기본 동작 방지
    //- form은 enter치면 페이지를 갱신한다.
    e.preventDefault();
    navigate(`/videos/${text}`); // URL 경로 이동
  };

  // keyword의 업데이트에 따라 text도 같이 업데이트
  useEffect(() => setText(keyword || ""), [keyword]);

  // 컴포넌트로 navigate를 쓰려면 <Link to=>를 이용
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        <BsYoutube className="text-4xl text-brand" />
        <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
      </Link>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="Search..."
          value={text}
          onChange={
            (e) => setText(e.target.value) // Typing 하는 text를 보여줌
          }
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
