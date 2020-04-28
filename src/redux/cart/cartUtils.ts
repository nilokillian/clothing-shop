import { IItemCollection } from "../../interfaces-and-types/collection/ICollection";

export const addItemToCart = (
  cartItems: IItemCollection[],
  itemToAdd: IItemCollection
) => {
  const exists = cartItems.find((cartItem) => cartItem.id === itemToAdd.id);

  if (exists) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (
  cartItems: IItemCollection[],
  itemToARemove: IItemCollection
) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToARemove.id
  );

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToARemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToARemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
