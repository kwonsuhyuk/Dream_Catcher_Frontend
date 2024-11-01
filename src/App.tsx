import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/common/Error";
import HomePage from "./pages/HomePage";
import Mypage from "./pages/Mypage";
import IntroPage from "./pages/IntroPage";
import Layout from "./components/common/Layout";
import InterpretationPage from "./pages/InterpretationPage";
import DiaryPage from "./pages/DiaryPage";
import AnalisisPage from "./pages/AnalisisPage";
import DiaryDetailPage from "./pages/DiaryDetailPage";
import KaKaoRedirect from "./pages/KaKaoRedirect";
import WriteDiaryPage from "./pages/WriteDiaryPage";
import EditProfilePage from "./pages/mypageEdit/EditProfilePage";
import EditTemplate from "./pages/mypageEdit/EditTemplate";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/intro",
    element: <IntroPage />,
  },
  {
    path: "/mypage",
    element: <Mypage />,
  },
  {
    path: "/mypage/editprofile",
    element: <EditProfilePage />,
  },
  {
    path: "/mypage/edittemplate",
    element: <EditTemplate />,
  },

  {
    path: "/interpretation",
    element: <InterpretationPage />,
  },
  {
    path: "/analisis",
    element: <AnalisisPage />,
  },
  {
    path: "/diary",
    element: <DiaryPage />,
  },
  {
    path: "/diary/:diaryId",
    element: <DiaryDetailPage />,
  },
  {
    path: "/oauth",
    element: <KaKaoRedirect />,
  },
  {
    path: "/writediary",
    element: <WriteDiaryPage />,
  },
];

const routeList = routes.map((route) => {
  return {
    ...route,
    element: <Layout>{route.element}</Layout>,
    errorElement: <Error />,
  };
});

function App() {
  const router = createBrowserRouter(routeList);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
