import { createSelector } from "reselect";
import { IRoot } from "../../interfaces-and-types/redux/IRedux";

const selectUser = (state: IRoot) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
