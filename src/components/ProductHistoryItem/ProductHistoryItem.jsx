import React from 'react';
import css from './ProductBasketItem.module.css';
import propTypes from 'prop-types';

const ProductHistoryItem = ({ price, order }) => {
  return (
    <li className={css.productList__item}>
      <div className={css.itemwraper}>
        <div className={css.itemsOrderWraper}>
          {order.map(item => (
            <div className={css.orderItem} key={item.name}>
              <img
                className={css.itemImage}
                src={item.img}
                alt=""
                width={200}
              />
              <p>{item.name}</p>
              <div>
                <span>x{item.count}</span>
                <span> ${Number(item.count) * item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={css.descriptionWrapper}>
          <p className={css.productList__text}>{`Total price ${price} $`}</p>
        </div>
      </div>
    </li>
  );
};

ProductHistoryItem.propTypes = {
  price: propTypes.number.isRequired,
  order: propTypes.array.isRequired,
  id: propTypes.string.isRequired,
};

export default ProductHistoryItem;
