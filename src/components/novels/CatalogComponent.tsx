import React from "react";
import { Sidebar } from "../SidebarComponent";
import classes from "./../Main.module.css";
import { Novel } from "../../models/Novel";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../Breadcrumb";

export const Catalog: React.FC<{
  novels: Novel[];
  topNovels: Novel[];
}> = ({ novels, topNovels }) => {
  const novel_list = novels?.map((novel) => {
    return (
      <div className={`col-md-3 ${classes.product}`}>
        <div className={`text-center mt-lg-4 ${classes.product_info}`}>
          <div>
            <img src={novel.poster} className="img-fluid" alt="" />
          </div>
          <div className={classes.item}>
            <h4>
              <Link to={`/catalog/${novel.id}`}>{novel.title}</Link>
            </h4>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <Breadcrumb point="Каталог новелл" />
      <div className="row padding">
        <Sidebar topNovels={topNovels} />
        <div className={`col-lg-9 ${classes.display}`}>
          <div className="row">{novel_list}</div>
        </div>
      </div>
    </div>
  );
};
