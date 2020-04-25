import { User } from "firebase";

export interface IMenuItem {
  id: number;
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string;
}

export interface IMenuItemProps {
  item: IMenuItem;
}

export interface IDirectoryState {
  sections: IMenuItem[];
}

export interface ICollection {
  id: number;
  title: string;
  routeName: string;
  items: IItemCollection[];
}

export interface IItemCollection {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface IShopPageState {
  collection: ICollection[];
}

export interface IFormInput {
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [prop: string]: any;
}

export interface ISingInState {
  email: string;
  password: string;
}

export interface ICustomButtonProps {
  isGoogleSignIn?: boolean;
  [otherProps: string]: any;
}

export interface IHeader {
  currentUser: any;
}

export interface ISignUpState {
  [props: string]: any;
}
