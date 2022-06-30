import React from 'react';
import css from './ProductBasketItem.module.css';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProductFromBasket,
  getUserProductsInBasket,
  updateProductFromBasket,
} from 'redux/orderBasketSlice/orderBasketSlice';
import { useState } from 'react';
import { useEffect } from 'react';

const ProductBasketItem = ({ id, name, price, img, count }) => {
  const [sum, setSum] = useState(count);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateProductFromBasket({ id, count: sum }));
  }, [dispatch, id, sum]);

  return (
    <li className={css.productList__item}>
      <div className={css.itemwraper}>
        <img className={css.itemImage} src={img} alt="" width={200} />
        <div className={css.descriptionWrapper}>
          <p className={css.productList__text}>{`${name} `}</p>
          <p className={css.productList__text}>{`${price * sum} $`}</p>
        </div>
        <div className={css.descriptionWrapper}>
          <input
            className={css.productList__input}
            type="number"
            name="sum"
            min="1"
            max="150"
            value={sum}
            onChange={e => {
              setSum(e.currentTarget.value);
            }}
          />
          <button
            className={css.productList__button}
            type="button"
            onClick={() => dispatch(deleteProductFromBasket({ id }))}
          >
            delete
          </button>
        </div>
      </div>
    </li>
  );
};

ProductBasketItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
};

export default ProductBasketItem;
