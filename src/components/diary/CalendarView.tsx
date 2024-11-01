import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import DiaryDateModal from "./DiaryDateModal";
import { TDiaries, TDiary } from "../../types";
import { FaCheckCircle } from "react-icons/fa";
import { formatDate } from "../../util/timeFunction";
import PencilNavigator from "./PencilNavigator";

interface CalendarViewProps {
  diaries: TDiaries;
}

const CalendarView = ({ diaries }: CalendarViewProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedDateDiary, setSelectedDateDiary] = useState<TDiary[] | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (selectedDate) {
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
      const day = String(selectedDate.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;

      const filteredDiaries = diaries.filter((diary) => {
        return diary.createdAt.startsWith(formattedDate);
      });

      setSelectedDateDiary(filteredDiaries);
    }
  }, [selectedDate, diaries]);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const tileContent = ({ date }: { date: Date }) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    const hasDiary = diaries.some((diary) =>
      diary.createdAt.startsWith(formattedDate)
    );

    return (
      <div className="absolute top-0 left-0">
        {hasDiary && <FaCheckCircle className="text-green-500" />}
      </div>
    );
  };

  return (
    <div className="relative">
      <Calendar
        onClickDay={handleDateChange}
        formatDay={(_, date) => String(date.getDate())}
        showNeighboringMonth={false}
        className="my-10 lg:mt-16 react-calendar"
        tileContent={tileContent}
      />
      <PencilNavigator />
      {isModalOpen && (
        <DiaryDateModal
          date={formatDate(selectedDate)}
          onClose={() => setIsModalOpen(false)}
          diaries={selectedDateDiary}
        />
      )}
    </div>
  );
};

export default CalendarView;
