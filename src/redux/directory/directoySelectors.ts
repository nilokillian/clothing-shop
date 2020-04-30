import { createSelector } from "reselect";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";
import { IDirectoryState } from "../../interfaces-and-types/directory/IDirectoryState";

const selectDirectory = (state: IRoot): IDirectoryState => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections
);
