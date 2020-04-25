import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { IMenuItemProps } from "../../utils/interfaces";

import "./menuItem.style.scss";

const MenuItem: React.FC<IMenuItemProps & RouteComponentProps> = ({
  item,
  history,
  match,
}) => {
  return (
    <div
      className={`${item.size} menu-item`}
      onClick={() => history.push(`${match.url}${item.linkUrl}`)}
    >
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

export default withRouter(MenuItem);
