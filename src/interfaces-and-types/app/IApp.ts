import { IUser } from "../user/IUser";

export interface IAppStateToProps {
  setCurrentUser: (user: IUser | null) => void;
  currentUser: IUser | null;
}

export type ConnectedAppStateToProps = Pick<IAppStateToProps, "currentUser">;
export type ConnectedAppDispatchToProps = Pick<
  IAppStateToProps,
  "setCurrentUser"
>;
