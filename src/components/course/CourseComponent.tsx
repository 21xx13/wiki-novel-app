import React from "react";
import { Sidebar } from "../SidebarComponent";
import classes from "./../Main.module.css";
import { Theme } from "../../models/Theme";
import { MenuCourse } from "./MenuCourse";
import { Breadcrumb } from "../Breadcrumb";

export const Course: React.FC<{
  themes: Theme[] | undefined;
}> = ({ themes: themes }) => {
  return (
    <div>
      <Breadcrumb point="Гайд по Renpy" />
      <div className="row padding">
        <Sidebar />
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
            <MenuCourse themes={themes} />
            <br />
            <div className="w3layouts-newsletter">
              <a
                href="/course/1"
                className="btn1 btn"
                style={{ fontSize: "16px" }}
              >
                Учиться!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
