import PageTitle from "../components/common/PageTitle";
import { IoSearchCircle } from "react-icons/io5";
import { FaCalendar, FaList } from "react-icons/fa";
import { useState } from "react";
import CalendarView from "../components/diary/CalendarView";
import ListView from "../components/diary/ListView";
import { useDiaries } from "../hooks/useDiaries";
import { checkType } from "../types";
import { AiFillCloseCircle } from "react-icons/ai";
import Loading from "../components/common/Loading";

const DiaryPage = () => {
  const [viewState, setViewState] = useState<checkType>("calendar");
  const [searchState, setSearchState] = useState<boolean>(false);
  const { diaries, isDiariesLoading } = useDiaries(viewState);

  // 로딩 컴포넌트 추가 필요
  if (isDiariesLoading) {
    return <Loading />;
  }

  return (
    <div className="w-full">
      <PageTitle title="MY diary" />
      <div className="flex w-full px-1 mt-16 items-center gap-3 text-third">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="제목으로 일기 검색"
            onFocus={() => setSearchState(true)}
            className="rounded-full w-full pl-7 pr-10 py-3 bg-secondary outline-none text-white transition-all duration-300"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-third">
            <IoSearchCircle className="text-3xl" />
          </button>
        </div>
        {searchState ? (
          <>
            <AiFillCloseCircle
              className="text-2xl"
              onClick={() => setSearchState(false)}
            />
          </>
        ) : (
          <>
            <FaCalendar
              className="text-xl"
              onClick={() => setViewState("calendar")}
            />
            <FaList className="text-xl" onClick={() => setViewState("list")} />
          </>
        )}
      </div>
      {searchState ? (
        // 실시간으로 검색되는 내용 보여주기
        <div>검색 결과</div>
      ) : viewState === "calendar" ? (
        <CalendarView diaries={diaries} />
      ) : (
        <ListView diaries={diaries} />
      )}

      {/* 뱃지 달성률 이나 등등 해서 참여도 높이는 부분 넣기 */}
    </div>
  );
};

export default DiaryPage;
