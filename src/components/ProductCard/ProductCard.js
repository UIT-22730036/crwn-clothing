import { useDispatch } from "react-redux";

import { setItemToCart } from "../../redux/cart/cartAction";

import Button from "../Button/Button";

import "./ProductCard.scss";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = product;

  const addProductToCart = () => dispatch(setItemToCart(product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add
      </Button>
    </div>
  );
};

export default ProductCard;
