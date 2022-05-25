import React from "react";
import { Link } from "react-router-dom";
import { Theme } from "../../models/Theme";
import classes from './ThemeList.module.css';

export const ThemeList: React.FC<{
    themes: Theme[] | undefined;
  }> = ({ themes: themes }) =>{
  const theme_list = themes?.slice(0, -1).map((theme) => {
    return (
      <li>
        <Link to={`/course/${theme.id}`} className={`text-size-larger ${classes.itemNum}`}>
          {theme.name}
        </Link>
      </li>
    );
  });
  return (
    <div>
      <h4>Содержание курса:</h4>
      <br></br>
      <ol className={classes.rectangle}>{theme_list}</ol>
    </div>
  );
};
