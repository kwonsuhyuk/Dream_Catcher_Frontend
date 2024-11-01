import { useParams, useNavigate } from "react-router-dom";
import { useDiary } from "../hooks/useDiary";
import DiaryDetail from "../components/diary/DiaryDetail";
import { FaArrowLeft, FaEdit, FaTrashAlt } from "react-icons/fa";
import Loading from "../components/common/Loading";

const DiaryDetailPage = () => {
  const { diaryId } = useParams();
  const navigate = useNavigate();
  const { diaryData, isDiaryLoading, deleteDiaryFn } = useDiary(
    Number(diaryId)
  );

  const handleDeleteDiary = () => {
    if (
      window.confirm(
        "정말 일기를 삭제 하시겠습니까? 삭제된 일기는 복구할 수 없습니다."
      )
    ) {
      deleteDiaryFn(Number(diaryId));
      navigate(-1);
    }
  };

  if (isDiaryLoading) {
    return <Loading />;
  }

  return diaryData ? (
    <div className="relative">
      <div className="flex justify-between items-center gap-3 mb-5">
        <button
          onClick={() => navigate(-1)}
          className="bg-main text-third p-2 rounded-full hover:bg-secondary transition duration-300"
          aria-label="뒤로 가기">
          <FaArrowLeft className="w-6 h-6" />
        </button>
        <div>
          <button
            className="bg-main text-third p-2 rounded-full hover:bg-secondary transition duration-300"
            aria-label="삭제">
            <FaTrashAlt className="w-5 h-5" onClick={handleDeleteDiary} />
          </button>
          <button
            className="bg-main text-third p-2 rounded-full hover:bg-secondary transition duration-300"
            aria-label="수정">
            <FaEdit className="w-5 h-5" />
          </button>
        </div>
      </div>

      <DiaryDetail diary={diaryData} />
    </div>
  ) : (
    <div>일기를 찾을 수 없습니다.</div>
  );
};

export default DiaryDetailPage;
