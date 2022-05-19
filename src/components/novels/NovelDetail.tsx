import React, { useEffect } from "react";
import { Button, Input, Label } from "reactstrap";
import { NovelComment } from "../../models/Comment";
import { Novel } from "../../models/Novel";
import classes from "./NovelDetail.module.css";
import { Sidebar } from "../SidebarComponent";
import { FormComment } from "./FormComment";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSaveCommentMutation } from "./commentsHookApi";
import { Breadcrumb } from "../Breadcrumb";

export const NovelDetail: React.FC<{
  novel: Novel | undefined;
  comments: NovelComment[];
}> = ({ novel, comments }) => {
  const comments_list = comments.map((comment) => {
    return (
      <div className="media py-5 d-flex">
        <img src="/assets/images/te2.jpg" className="mr-3 avatar" alt="image" />
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
    return <img src={image.image} className="img-novel-shots " />;
  });

  const developers = novel?.developers.map((dev) => dev.name).join(", ");
  const genres = novel?.genres.map((genre) => genre.name).join(", ");
  if (novel != null) {
    return (
      <div>
        <Breadcrumb point="Каталог новелл" />
        <div className="row padding">
          <Sidebar />
          <div className="left-ads-display col-lg-8">
            <div className="row">
              <div className="desc1-left col-md-4">
                <img src={novel?.poster} className="img-fluid" alt="" />
              </div>
              <div className="desc1-right col-md-8 pl-lg-4">
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
                      <b>Жанр: </b>
                      {genres}
                    </span>
                  </li>
                  <li className={classes.unstyled_list}>
                    <span>
                      <b>Дата выхода:</b> {novel.release_date}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row sub-para-w3layouts mt-5">
              <h3 className="shop-sing editContent">
                {" "}
                {/* style="outline: none; cursor: inherit;" */}О визуальной
                новелле {novel.title}
              </h3>
              <p>{novel_shots}</p>
              <p className="editContent">
                {" "}
                {/* style="outline: none; cursor: inherit;" */}
                {novel.description}
              </p>
              <p className="mt-3 italic-blue editContent">
                {" "}
                {/* style="outline: none; cursor: inherit;" */}
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
                    {/* style="outline: none; cursor: inherit;" */}
                    <span className="sub-tittle editContent">
                      {comments.length}
                    </span>
                    Оставить отзыв
                  </h3>
                  <FormComment form={form} novelId={novel.id} />
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
