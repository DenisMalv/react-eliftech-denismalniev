import React from 'react';
import css from './ProductBasketItem.module.css';
import propTypes from 'prop-types';

const ProductHistoryItem = ({ id, price, order }) => {
  return (
    <li className={css.productList__item}>
      <div className={css.itemwraper}>
        <div className={css.itemsOrderWraper}>
          {order.map(item => (
            <div className={css.orderItem}>
              <img
                className={css.itemImage}
                src={item.img}
                alt=""
                width={200}
              />
              <p>{item.name}</p>
              <p>{Number(item.count) * item.price}</p>
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
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  // number: propTypes.string.isRequired,
};

export default ProductHistoryItem;
