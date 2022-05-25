import React from "react";
import { Link } from "react-router-dom";

export const Breadcrumb: React.FC<{
  point: string;
}> = ({ point }) => {
  return (
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">
          Главная
        </Link>
      </li>
      <li className="breadcrumb-item active">{point}</li>
    </ol>
  );
};
