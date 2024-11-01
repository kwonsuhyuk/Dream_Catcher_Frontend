interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return <div className="text-xl absolute top-5 left-5 uppercase">{title}</div>;
};

export default PageTitle;
