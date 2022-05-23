import { Catalog } from "./novels/CatalogComponent";
import { Footer } from "./FooterComponent";
import { Navigate, Routes, Route, useParams } from "react-router-dom";
import { Header } from "./HeaderComponent";
import { MainBanner } from "./MainBanner";
import { NovelDetail } from "./novels/NovelDetail";
import { useCommentsQuery } from "./novels/commentsHookApi";
import { useNovelsQuery } from "./novels/novelsHookApi";
import { HomePage } from "./HomePage";
import { useThemesQuery } from "./themeHookApi";
import { Course } from "./course/CourseComponent";
import { LoginPage } from "./djangoApi/LoginPage";
import { useForm } from "react-hook-form";
import { User } from "../models/User";
import { useEffect, useState } from "react";
import { ThemeDetail } from "./course/ThemeDetail";

export const MainSwitcher: React.FC = () => {
  const { data: novelJson } = useNovelsQuery();
  const { data: themesJson } = useThemesQuery();
  const { data: commentsJson } = useCommentsQuery();
  const [username, setUsername] = useState(null);
  const form = useForm<User>();
  useEffect(() => {
    form.reset();
  }, []);
  const topNovels = novelJson?.slice(0, 3);

  const NovelWithId = () => {
    const params = useParams();
    return (
      <NovelDetail
        novel={
          novelJson?.filter(
            (novel) => novel.id === parseInt(params.novelId, 10)
          )[0]
        }
        comments={
          commentsJson?.filter(
            (comment) => comment.novel === parseInt(params.novelId, 10)
          ) || []
        }

        topNovels={topNovels}
      />
    );
  };
  const ThemeWithId = () => {
    const params = useParams();
    return <ThemeDetail theme={themesJson?.filter((theme) => theme.id === parseInt(params.themeId, 10))[0]} themes={themesJson} />
  };

  return (
    <div>
      <Header setUsername={setUsername} username={username} />
      <MainBanner />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<Catalog novels={novelJson} topNovels={topNovels} />} />
        <Route path="course" element={<Course themes={themesJson} topNovels={topNovels} />} />
        <Route path="/course/:themeId" element={<ThemeWithId />} />
        <Route path="/catalog/:novelId" element={<NovelWithId />} />
        <Route path="/login" element={<LoginPage form={form} userSetter={setUsername} isLogin={true} />} />
        <Route path="/registration" element={<LoginPage form={form} userSetter={setUsername} isLogin={false} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </div>
  );
};
