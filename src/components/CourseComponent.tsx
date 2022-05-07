import React from "react";
import { Sidebar } from "./SidebarComponent";
import classes from "./Main.module.css";
import { Theme } from "../models/Theme";
import { Link } from "react-router-dom";

export const Course: React.FC<{
  themes: Theme[] | undefined;
}> = ({ themes: themes }) => {
  const theme_list = themes?.map((theme) => {
    return (
      <li>
          <a className="text-size-larger item-num">{theme.name}</a>
      </li>
    );
  });
  return (
    <div className="row padding">
      <Sidebar />
      <div className={`col-lg-9 ${classes.display}`}>
        <div className="container course_wrap">
          <h1>Онлайн курс по созданию новеллы на RenPy</h1>
          <br />
          <p>
            Наша команда разработала учебный курс по созданию своих визуальных
            новелл на RenPy! Курс рассчитан на новичков и подойдет даже тем, кто
            ни разу не программировал. Прохождение курса совершенно бесплатно.
            Присоединяйся :)
          </p>
          <br />
          <hr />
          <h4>Содержание курса:</h4>
          <br></br>
          <ol className="rectangle">
          {theme_list}
          </ol>
          <br />
          <div className="w3layouts-newsletter">
            <a href="/course" className="btn1 btn" style={{ fontSize: "16px" }}>
              Учиться!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
