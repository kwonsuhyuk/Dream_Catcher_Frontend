import { useNavigate } from "react-router-dom";
import { TDiary } from "../../types";
import { formatTime } from "../../util/timeFunction";
import { getTagBackgroundColor } from "../../util/tagColorFunction";

interface DiaryItemProps {
  diary: TDiary;
}

const DiaryItem = ({ diary }: DiaryItemProps) => {
  const navigation = useNavigate();

  const handleMoveDiaryDetail = () => {
    navigation(`/diary/${diary.id}`);
  };

  return (
    <div
      onClick={handleMoveDiaryDetail}
      className="flex flex-col gap-2 p-4 border rounded-lg shadow-lg bg-gray-50 text-gray-700 transition duration-300 hover:bg-gray-200">
      <div className="flex justify-between">
        <div className="text-xl font-semibold">{diary.title}</div>
        <div className="text-sm">{formatTime(diary.createdAt)}</div>
      </div>
      <div className="text-sm line-clamp-1">{diary?.contents?.freeContent}</div>
      <div className="flex flex-wrap justify-start gap-2 text-xs">
        {diary.tags.map((tag, tagIndex) => (
          <div
            key={tag.id}
            className={`${getTagBackgroundColor(
              tagIndex
            )} text-white py-1 px-2 rounded-xl whitespace-nowrap`}>
            {tag.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiaryItem;
