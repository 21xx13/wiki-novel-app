import React from "react";
import { useNavigate } from "react-router-dom";
import { Theme } from "../../models/Theme";
import { Breadcrumb } from "../Breadcrumb";
import { ThemeList } from "./ThemeList";
import classes from './Theme.module.css';

export const ThemeDetail: React.FC<{
  theme: Theme;
  themes: Theme[];
}> = ({ theme, themes }) => {
  let navigate = useNavigate();
  if (theme != null) {
    const slides = theme.courseslide_set.map((slide) => {
      return (
        <li className="theme-slide">
          <div
            className="Container"
            dangerouslySetInnerHTML={{ __html: slide.html_layout }}
          ></div>
        </li>
      );
    });
    return (
      <div>
        <Breadcrumb point="Гайд по Renpy" />
        <div className="row padding">
          <div className="col-lg-3">
            <div className={classes.sidebarSection}>
              <div className="sticky-top">
                <div className={classes.sidebarContent}>
                  <ThemeList themes={themes} />
                </div>
              </div>
            </div>
          </div>
          <div className="padding col-lg-8">
            <div className="content-section">
              <ul style={{listStyleType:"none"}}>{slides}</ul>
            </div>
          </div>
          <div className="col-lg-1 col-btn">
            <div className={`btn ${classes.next}`} onClick={()=> {
              if (theme.id !== themes.length - 1){
                navigate(`/course/${theme.id + 1}`);
              }
            }}>
              <div className="btn-wrap">
                <i className="fa fa-chevron-right " aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else return <>Страница не найдена!</>;
};
