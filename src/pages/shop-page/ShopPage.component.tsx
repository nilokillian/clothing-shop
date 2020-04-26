import React from "react";
import { SHOP_DATA } from "./mockData";
import CollectionPreview from "../../components/collection-preview-component/CollectionPreview.component";
import { IShopPageState } from "../../interfaces-and-types/shop-page/IShopPageState";

export default class ShopPage extends React.Component<{}, IShopPageState> {
  constructor(props: any) {
    super(props);

    this.state = SHOP_DATA;
  }

  public render() {
    const { collection } = this.state;
    return (
      <div className="page-preview">
        {collection.map((item) => (
          <CollectionPreview key={item.id} {...item} />
        ))}
      </div>
    );
  }
}
