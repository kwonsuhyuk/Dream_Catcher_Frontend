import { FaMicrophoneLines } from "react-icons/fa6";
import { TDiary } from "../../types";
import { getTagBackgroundColor } from "../../util/tagColorFunction";
import { AiFillAliwangwang } from "react-icons/ai"; // Icon for AI button
import { FaImage } from "react-icons/fa"; // Image icon
import { formatDate } from "../../util/timeFunction";

const DiaryDetail = ({ diary }: { diary: TDiary }) => {
  return (
    <div className="container mx-auto p-6 rounded-lg shadow-md bg-gradient-to-br from-secondary to-third">
      {/* Header Section */}
      <header className="mb-6 text-white flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold flex justify-between items-center">
            {diary.title}
            <FaMicrophoneLines className="text-xl text-fourth" />
          </div>
          <div className="text-sm text-gray-400 flex gap-4">
            <p>{formatDate(new Date(diary.createdAt))}</p>
            <p>
              {new Date(diary.createdAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {diary.tags.map((tag, index) => (
            <span
              key={tag.id}
              className={`px-2 py-1 text-sm rounded-full text-gray-50 ${getTagBackgroundColor(
                index
              )}`}>
              {tag.name}
            </span>
          ))}
        </div>
      </header>

      {/* Contents Section */}
      <section className="mb-6 bg-fourth/10 p-5 rounded-lg shadow-inner text-gray-800">
        {diary?.contents?.sections?.length > 0 ? (
          diary.contents.sections.map((section, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold text-lg text-white">
                {section.section}
              </h3>
              <p className="text-fourth">{section.detail}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-700">
            내용: {diary.contents.freeContent || "작성된 내용이 없습니다."}
          </p>
        )}
      </section>

      {/* Image Section */}
      <section className="mb-6 p-4 bg-fourth/20 rounded-md text-white flex items-center justify-between">
        <h2 className="text-lg font-semibold">이미지</h2>
        {diary.image ? (
          <img
            src={diary.image}
            alt="Diary Visual"
            className="rounded-md shadow-md w-20 h-20 ml-4"
          />
        ) : (
          <button className="p-2 text-sm bg-green-500 text-white rounded-full shadow-md hover:bg-green-400 transition flex items-center gap-1">
            <FaImage size={16} /> 이미지 생성
          </button>
        )}
      </section>

      {/* Interpretation Section */}
      <section className="mb-3 p-4 bg-fourth/20 rounded-md text-white flex items-center justify-between">
        <h2 className="text-lg font-semibold">해석</h2>
        {diary.interpretation ? (
          <p className="text-gray-700 text-sm ml-4">{diary.interpretation}</p>
        ) : (
          <button className="p-2 text-sm bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-400 transition flex items-center gap-1">
            <AiFillAliwangwang size={16} /> AI 해몽
          </button>
        )}
      </section>

      {/* Template Type */}
      <footer className="text-xs text-white mt-4 text-right">
        {diary.templateType}
      </footer>
    </div>
  );
};

export default DiaryDetail;
