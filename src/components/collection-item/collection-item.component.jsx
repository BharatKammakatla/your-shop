import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  AddButton,
  NameContainer,
  PriceContainer,
} from "./collection-item.styled";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to Cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
