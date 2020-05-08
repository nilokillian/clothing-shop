import { IUser } from "../user/IUser";

export interface IAppStateToProps {
  currentUser: IUser | null;
}

export type ConnectedAppStateToProps = Pick<IAppStateToProps, "currentUser">;
