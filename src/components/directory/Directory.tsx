import React from "react";
import MenuItem from "../menu-item/MenuItem.component";
import { IDirectoryState } from "../../interfaces-and-types/directory/IDirectoryState";
import { connect, MapStateToProps } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directoySelectors";

import styles from "./directory.module.scss";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";

const Directory: React.FC<IDirectoryState> = ({ sections }) => {
  return (
    <div className={styles.container}>
      {sections.map((section) => (
        <MenuItem key={"sln_" + section.id} item={section} />
      ))}
    </div>
  );
};

type DirectoryStateToProps = Pick<IDirectoryState, "sections">;
const mapStateToProps: MapStateToProps<
  DirectoryStateToProps,
  {},
  IRoot
> = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect<DirectoryStateToProps, {}, {}, IRoot>(mapStateToProps)(
  Directory
);
