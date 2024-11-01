import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { TDiary } from "../../types";
import DiaryItem from "./DiaryItem";

const DiaryDateModal = ({
  date,
  onClose,
  diaries,
}: {
  date: string;
  onClose: () => void;
  diaries: TDiary[] | null;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // 드래그 시작
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
  };

  // 드래그 중
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      const newY = e.touches[0].clientY - startY;

      if (newY > 0) {
        setCurrentY(newY);
      }
    }
  };

  // 드래그 종료
  const handleTouchEnd = () => {
    setIsDragging(false);

    if (currentY > 100) {
      onClose();
    } else {
      setCurrentY(0);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 flex items-end justify-center bg-black bg-opacity-50"
      onClick={onClose}>
      <div
        className={`bg-white rounded-t-3xl p-4 w-full max-w-maxWidth transform transition-transform duration-300 ease-in-out ${
          isAnimating ? "animate-slide-up" : ""
        } shadow-lg`}
        onClick={(e) => e.stopPropagation()}
        style={{
          transform: `translateY(${currentY}px)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onAnimationEnd={() => setIsAnimating(false)} // 애니메이션이 끝나면 상태를 false로 설정
      >
        <div className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div className="text-center mb-4 text-lg font-semibold text-gray-800">
          {date}
        </div>

        {/* 일기 */}
        {diaries?.length !== 0 ? (
          <div className="space-y-2 max-h-[50vh] overflow-y-auto">
            {diaries?.map((diary, index) => (
              <DiaryItem diary={diary} key={index} />
            ))}
          </div>
        ) : (
          <div className="text-center my-10">작성된 일기가 없습니다</div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default DiaryDateModal;
