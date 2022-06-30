import React from 'react';
import css from './ProductList.module.css';
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useGetMacdonnyItemsRTKQuery } from 'redux/RTKProductsApi/ProductsApi';
import { getUserProductsInBasket } from 'redux/orderBasketSlice/orderBasketSlice';
import ProductItem from 'components/ProductItem/ProductItem';

const ProductList = () => {
  const { companyName } = useParams();
  const userProductsInBasket = useSelector(getUserProductsInBasket);
  console.log('companyName', companyName);
  const { data = [] } = useGetMacdonnyItemsRTKQuery();

  const filteredShopsProduct = (response, companyName) => {
    return response.filter(product => product.restoraunt === companyName);
  };
  const disabledButtons = () => {
    const basket = userProductsInBasket.find(
      product => product.restoraunt !== companyName
    );
    if (basket) {
      return true;
    }
    return false;
  };
  const disabled = disabledButtons();
  console.log('disabled', disabled);
  return (
    <>
      {data.data && (
        <ul className={css.productList}>
          {filteredShopsProduct(data.data, companyName).map(
            ({ _id, name, price, img, restoraunt }) => (
              <ProductItem
                id={_id}
                name={name}
                price={price}
                img={img}
                restoraunt={restoraunt}
                disabled={disabled}
                key={_id}
              />
            )
          )}
        </ul>
      )}
    </>
  );
};

export default ProductList;
