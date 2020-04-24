import React from "react";
import { IMenuItemProps } from "../../utils/interfaces";

import "./menu-item.style.scss";

export const MenuItem: React.FC<IMenuItemProps> = ({ item }) => {
  return (
    <div className={`${item.size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className="content ">
        <h1 className="title">{item.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW </span>
      </div>
    </div>
  );
};
