export const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

export const formatDate = (date: Date | null): string => {
  if (!date) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year} / ${month} / ${day}`;
};

export const formattedDateInKor = (date: Date) => {
  return date.toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
  });
};

export const getCurrentTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

export const isSameDate = (dateString: string, date: Date) => {
  const targetDate = new Date(dateString);
  return (
    targetDate.getFullYear() === date.getFullYear() &&
    targetDate.getMonth() === date.getMonth() &&
    targetDate.getDate() === date.getDate()
  );
};
