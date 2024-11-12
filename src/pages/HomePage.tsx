import React, { useState, useEffect } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi"; // Edit icon
import mainBg from "../assets/mainBg.jpg";
import {
  formattedDateInKor,
  getCurrentTime,
  isSameDate,
} from "../util/timeFunction";
import { useDiaries } from "../hooks/useDiaries";
import { TDiary } from "../types";
import { getTagBackgroundColor } from "../util/tagColorFunction";

const HomePage = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const { diaries } = useDiaries("list");
  const [todayDiary, setTodayDiary] = useState<TDiary | null>(null);

  useEffect(() => {
    if (diaries.length > 0) {
      const today = new Date();

      const todayDiaryItem = diaries.find((diary: TDiary) =>
        isSameDate(diary.createdAt, today)
      );
      setTodayDiary(todayDiaryItem || null);
    }
  }, [diaries]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-scroll">
      <div
        className="absolute top-0 left-0 w-full h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${mainBg})`,
        }}></div>

      {/* Header */}
      <div className="relative z-10 flex flex-col px-3 py-5">
        <h1 className="text-3xl font-bold drop-shadow-md flex items-center gap-2 mb-2 title">
          <BsMoonStarsFill className="text-yellow-300" /> <p>Dream Catcher</p>
        </h1>
      </div>

      {/* 날짜 및 시간 표시 */}
      <div className="relative z-10 px-6 flex flex-col justify-start">
        <div className="text-lg font-bold flex items-center gap-2">
          <h2>{formattedDateInKor(new Date())}</h2>
          <p>{currentTime}</p>
        </div>
      </div>

      {/* 오늘의 일기 */}
      <div className="relative mt-12 text-white px-4">
        <h1 className="text-lg font-bold mb-3">일기</h1>
        {todayDiary ? (
          <div className="bg-gray-800 p-4 rounded-xl shadow-md relative">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-semibold">{todayDiary.title}</h2>
              <button
                className="text-gray-400 hover:text-gray-200"
                onClick={() => alert("Edit diary")}>
                <FiEdit2 size={18} />
              </button>
            </div>
            <p className="text-sm text-gray-300 mb-4 line-clamp-2">
              {todayDiary?.contents?.freeContent || "내용이 없습니다"}
            </p>
            <div className="flex flex-wrap gap-2">
              {todayDiary.tags.map((tag, tagIndex) => (
                <span
                  key={tag.id}
                  className={`${getTagBackgroundColor(
                    tagIndex
                  )} text-xs py-1 px-3 rounded-full whitespace-nowrap`}>
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-gray-700 p-4 rounded-xl shadow-md text-gray-300">
            <p>오늘 작성된 일기가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
