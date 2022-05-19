import React from "react";

export const Breadcrumb: React.FC<{
  point: string;
}> = ({ point }) => {
  return (
    <ol className="breadcrumb editContent">
      <li className="breadcrumb-item">
        <a href="/" className="editContent">
          Главная
        </a>
      </li>
      <li className="breadcrumb-item active editContent">{point}</li>
    </ol>
  );
};
