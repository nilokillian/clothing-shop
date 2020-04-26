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
