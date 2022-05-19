import React from "react";
import { Theme } from "../../models/Theme";
import { Breadcrumb } from "../Breadcrumb";
import { MenuCourse } from "./MenuCourse";

export const ThemeDetail: React.FC<{
  theme: Theme;
  themes: Theme[];
}> = ({ theme, themes }) => {
  if (theme != null) {
    const slides = theme.courseslide_set.map((slide) => {
      return (
        <li className="theme-slide showing">
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
          <div className="side-bar col-lg-3 course-content-list">
            <div className="sidebar-section">
              <div className="sidebar-item sticky-top">
                <div className="sidebar-content">
                  <MenuCourse themes={themes} />
                </div>
              </div>
            </div>
          </div>
          <div className="left-ads-display col-lg-8">
            <div className="content-section">
              <ul id="theme-slides">{slides}</ul>
            </div>
          </div>
          <div className="col-lg-1 col-btn">
            <div className="btn next-btn next-slide">
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
