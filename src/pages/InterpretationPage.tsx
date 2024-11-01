import { AiFillAliwangwang } from "react-icons/ai";
import { IoArrowUpCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import PageTitle from "../components/common/PageTitle";

const InterpretationPage = () => {
  const router = useNavigate();
  const handleMoveDiary = () => {
    router("/diary");
  };
  return (
    <div className="w-full my-auto">
      {/* 페이지제목 */}
      <PageTitle title="AI Interpretation" />

      {/* 결과 박스 */}
      <div className="flex flex-col items-center justify-center w-full mb-10 lg:mb-24">
        <AiFillAliwangwang className="text-5xl lg:text-7xl" />
        <p className="text-xs">By Open AI</p>
      </div>

      {/* 해몽 인풋 */}
      <div className="flex justify-center w-full px-1.5 mb-16">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="나의 꿈을 AI를 통해 해몽해 보세요!"
            className="rounded-full w-full pl-7 pr-10 py-3 bg-secondary outline-none text-white"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-third text-4xl">
            <IoArrowUpCircleSharp />
          </button>
        </div>
      </div>
      {/* 나의 일기에서 해몽하기 */}
      <div className="rounded-lg p-4 mb-16 text-sm">
        <div className="flex items-center justify-center">
          <FaBookOpen className="text-2xl text-third" />
          <button
            className="text-third hover:bg-tertiary px-4 py-2 rounded-full"
            onClick={handleMoveDiary}>
            나의 일기에서 해몽하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterpretationPage;
