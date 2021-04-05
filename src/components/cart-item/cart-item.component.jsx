import React from "react";
import {
  CartItemContainer,
  ItemDetailsContainer,
  Name,
  Image,
} from "./cart-item.styled";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <Image src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <Name>{name}</Name>
      <span className="price">
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
