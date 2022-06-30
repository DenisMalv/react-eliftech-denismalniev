import React from 'react';
import css from './ProductItem.module.css';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductInBasket,
  deleteProductFromBasket,
  getUserProductsInBasket,
} from 'redux/orderBasketSlice/orderBasketSlice';

const ProductItem = ({ id, name, price, img, restoraunt }) => {
  const userProductsInBasket = useSelector(getUserProductsInBasket);
  const dispatch = useDispatch();

  const handleToggleProductInBasket = newProduct => {
    const inBasket = userProductsInBasket.find(
      product => product.id === newProduct.id
    );
    if (inBasket) {
      dispatch(deleteProductFromBasket(newProduct));
      return;
    }
    if (disabledOtherShops(newProduct) || userProductsInBasket.length === 0) {
      dispatch(addProductInBasket(newProduct));
    } else {
      console.log('you cant add other restoraunt');
    }
  };

  const disabledOtherShops = newProduct => {
    const shop = userProductsInBasket.find(
      product => product.restoraunt === newProduct.restoraunt
    );
    console.log('shop', shop);
    return shop;
  };

  return (
    <li className={css.productList__item}>
      <div className={css.itemwraper}>
        <img className={css.itemImage} src={img} alt="" width={200} />
        <span className={css.productList__text}>{`${name} `}</span>
        <span className={css.productList__text}>{`${price} $`}</span>
        <button
          className={css.productList__button}
          onClick={e => {
            handleToggleProductInBasket({
              id,
              name,
              price,
              restoraunt,
              img,
              count: 1,
            });
          }}
        >
          {userProductsInBasket.find(product => product.id === id)
            ? 'delete from card'
            : 'Add to card'}
        </button>
      </div>
    </li>
  );
};

ProductItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  // number: propTypes.string.isRequired,
};

export default ProductItem;
