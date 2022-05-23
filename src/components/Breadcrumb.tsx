import React from "react";
import { Link } from "react-router-dom";

export const Breadcrumb: React.FC<{
  point: string;
}> = ({ point }) => {
  return (
    <ol className="breadcrumb editContent" id="start">
      <li className="breadcrumb-item">
        <Link to="/" className="editContent">
          Главная
        </Link>
      </li>
      <li className="breadcrumb-item active editContent">{point}</li>
    </ol>
  );
};
