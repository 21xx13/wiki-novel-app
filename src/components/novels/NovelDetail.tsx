import React, { useEffect } from "react";
import { NovelComment } from "../../models/Comment";
import { Novel } from "../../models/Novel";
import classes from "./NovelDetail.module.css";
import { Sidebar } from "../SidebarComponent";
import { FormComment } from "./FormComment";
import { useForm } from "react-hook-form";
import { Breadcrumb } from "../Breadcrumb";
import { Link } from "react-router-dom";

export const NovelDetail: React.FC<{
  novel: Novel;
  comments: NovelComment[];
  topNovels: Novel[];
  username: string;
}> = ({ novel, comments, topNovels, username }) => {
  const comments_list = comments.map((comment) => {
    return (
      <div className={`py-5 d-flex ${classes.media}`}>
        <img
          src="/static/images/te2.jpg"
          className={`mr-3 ${classes.avatarImage}`}
          alt="image"
        />
        <div className="media-body mt-4">
          <h5 className="mt-0 editContent">{comment.name}</h5>
          <p className="mt-2 editContent">{comment.text}</p>
        </div>
      </div>
    );
  });

  const form = useForm<NovelComment>();
  useEffect(() => {
    form.reset();
  }, []);

  const novel_shots = novel?.novelshots_set.map((image) => {
    return <img src={image.image} className={classes.shots} />;
  });

  const developers = novel?.developers.map((dev) => dev.name).join(", ");
  const genres = novel?.genres.map((genre) => genre.name).join(", ");
  let options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date(Date.parse(novel?.release_date));
  let commentsBlock = (userName: string) => {
    if (userName !== null)
      return <FormComment form={form} novelId={novel.id} />;
    else
      return (
        <div>
          <p className={classes.alertText}>
            <Link to="/login">Войдите</Link> или{" "}
            <Link to="/registration">зарегистрирутейсь</Link>, чтобы оставить
            комментарий.
          </p>
        </div>
      );
  };
  if (novel) {
    return (
      <div>
        <Breadcrumb point="Каталог новелл" />
        <div className="row padding">
          <Sidebar topNovels={topNovels} />
          <div className="padding col-lg-8">
            <div className="row">
              <div className={`col-md-4 ${classes.leftSide}`}>
                <img src={novel?.poster} className="img-fluid" alt="" />
              </div>
              <div className={`col-md-8 pl-lg-4 ${classes.rightSide}`}>
                <h3>{novel.title}</h3>
                <h5 className="editContent"></h5>
                <ul>
                  <li className={classes.unstyled_list}>
                    <span>
                      <b>Разработчик: </b>
                      {developers}
                    </span>
                  </li>
                  <li className={classes.unstyled_list}>
                    <span>
                      <b>Тип:</b> {novel.category.name}
                    </span>
                  </li>
                  <li className={classes.unstyled_list}>
                    <span>
                      <b>Жанр:</b> {genres}
                    </span>
                  </li>
                  <li className={classes.unstyled_list}>
                    <span>
                      <b>Дата выхода:</b> {date.toLocaleString("ru", options)}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row sub-para-w3layouts mt-5">
              <h3 className="shop-sing editContent">
                {" "}
                О визуальной новелле {novel.title}
              </h3>
              <p>{novel_shots}</p>
              <p className="editContent"> {novel.description}</p>
              <p className="mt-3 italic-blue editContent">
                {" "}
                <iframe
                  width="560"
                  height="315"
                  src={novel.video_url}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </p>
            </div>
            <hr />
            <div className="row">
              <div className="single-form-left col-md-8">
                <div className="contact-single">
                  <h3 className="editContent">
                    {" "}
                    <span className={classes.subTitle}>{comments.length}</span>
                    Оставить отзыв
                  </h3>
                  {commentsBlock(username)}
                </div>
              </div>
            </div>
            {comments_list}
          </div>
        </div>
      </div>
    );
  } else return <>Страница не найдена!</>;
};
