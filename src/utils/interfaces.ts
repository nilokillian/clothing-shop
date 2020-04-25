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
