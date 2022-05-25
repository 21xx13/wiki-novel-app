import React from "react";
import { Sidebar } from "../SidebarComponent";
import classes from "./../Main.module.css";
import { Theme } from "../../models/Theme";
import { ThemeList } from "./ThemeList";
import { Breadcrumb } from "../Breadcrumb";
import { Link } from "react-router-dom";
import { Novel } from "../../models/Novel";

export const Course: React.FC<{
  themes: Theme[];
  topNovels: Novel[];
}> = ({ themes: themes, topNovels: topNovels }) => {
  return (
    <div>
      <Breadcrumb point="Гайд по Renpy" />
      <div className="row padding">
        <Sidebar topNovels={topNovels} />
        <div className={`col-lg-9 ${classes.display}`}>
          <div className="container course_wrap">
            <h1>Онлайн курс по созданию новеллы на RenPy</h1>
            <br />
            <p>
              Наша команда разработала учебный курс по созданию своих визуальных
              новелл на RenPy! Курс рассчитан на новичков и подойдет даже тем,
              кто ни разу не программировал. Прохождение курса совершенно
              бесплатно. Присоединяйся :)
            </p>
            <br />
            <hr />
            <ThemeList themes={themes} />
            <br />
            <div className="w3layouts-newsletter">
              <Link
                to="/course/1"
                className="btn1 btn"
                style={{ fontSize: "16px" }}
              >
                Учиться!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
