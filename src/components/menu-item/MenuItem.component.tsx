import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { IMenuItemProps } from "../../interfaces-and-types/menu/IMenu";

import styles from "./menuItem.module.scss";

const MenuItem: React.FC<IMenuItemProps & RouteComponentProps> = ({
  item,
  history,
  match,
}) => {
  return (
    <div
      className={`${item.size} ${styles.item}`}
      onClick={() => history.push(`${match.url}${item.linkUrl}`)}
    >
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{item.title.toUpperCase()}</h1>
        <span className={styles.subTitle}>SHOP NOW </span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
