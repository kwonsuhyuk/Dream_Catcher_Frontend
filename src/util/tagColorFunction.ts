export const getTagBackgroundColor = (index: number) => {
  const colors = [
    "bg-main", // 1번째 태그
    "bg-secondary", // 2번째 태그
    "bg-third", // 3번째 태그
    "bg-fourth", // 4번째 태그
  ];
  return colors[index % colors.length];
};
