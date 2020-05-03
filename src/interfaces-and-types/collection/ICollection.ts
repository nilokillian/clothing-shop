export interface IItemCollection {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  [props: string]: any;
}

export interface IItemCart {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

export interface ICollections {
  collections: { [key: string]: ICollection } | null;
  isFetching: boolean;
  errorMessage: string | undefined;
}

export interface ICollectionsForPreview {
  collections: ICollection[];
}

export interface ICollection {
  id: number | string;
  title: string;
  routeName: string;
  items: IItemCollection[];
}

export interface CollectionItemOwnProps {
  item: IItemCollection;
}

export interface CollectionItemDispatchProps {
  addItem: (item: IItemCollection) => void;
}

export type CollectionItemProps = CollectionItemDispatchProps &
  CollectionItemOwnProps;
