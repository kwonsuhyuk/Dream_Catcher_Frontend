import { BsMoonStarsFill } from "react-icons/bs";
import mainBg from "../assets/mainBg.jpg";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* 배경이미지 색상 */}
      <div
        className="absolute top-0 left-0 w-full h-[40vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${mainBg})`,
        }}></div>

      {/* header */}
      <div className="relative z-10 flex flex-col px-3 py-5">
        <h1 className="text-3xl font-bold drop-shadow-md flex items-center gap-2 mb-2 title">
          <BsMoonStarsFill className="text-yellow-300" /> Dream Catcher
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
