import { useState } from 'react';
import css from './UserOrderForm.module.css';
import { useAddOrderRTKMutation } from 'redux/RTKOrdersApi/OrdersApi';
import {
  getUserProductsInBasket,
  resetProductInBasket,
} from 'redux/orderBasketSlice/orderBasketSlice';

import { useDispatch, useSelector } from 'react-redux';
import ProductBasketItem from 'components/ProductBasketItem/ProductBasketItem';

const UserOrderForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [adress, setAdress] = useState('');
  const [orderNumber, setOrderNumber] = useState('');
  const userProductsInBasket = useSelector(getUserProductsInBasket);
  console.log('userProductsInBasket', userProductsInBasket);

  const dispatch = useDispatch();
  const [addOrderRTK] = useAddOrderRTKMutation();

  const handleImputChange = event => {
    const { name, value } = event.currentTarget;

    // eslint-disable-next-line default-case
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'adress':
        setAdress(value);
        break;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const contact = {
      name,
      email,
      phone,
      adress,
    };
    const newOrder = {
      contact,
      order: userProductsInBasket,
      totalPrice,
    };
    console.log('newOrder', newOrder);
    const res = await addOrderRTK(newOrder);
    console.log(res);
    const number = res.data.responseData.orderNumber;
    setOrderNumber(number);
    reset();
  };

  const totalPrice = userProductsInBasket.reduce(
    (acc, item) => Number(acc) + Number(item.price) * Number(item.count),
    [0]
  );
  console.log('totalprice', totalPrice);

  const reset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setAdress('');
    dispatch(resetProductInBasket([]));
  };

  return (
    <>
      {!orderNumber && (
        <form className={css.userOrderForm} onSubmit={handleSubmit}>
          <div className={css.userOrderWrapper}>
            <label className={css.userOrderForm__label}>
              <span className={css.userOrderForm__text}>Name</span>
              <input
                className={css.userOrderForm__input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                //   required
                value={name}
                onChange={handleImputChange}
                placeholder="Name"
              />
            </label>
            <label className={css.userOrderForm__label}>
              <span className={css.userOrderForm__text}>Email</span>
              <input
                className={css.userOrderForm__input}
                type="text"
                name="email"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="email "
                value={email}
                onChange={handleImputChange}
                placeholder="example@gmail.com"
                required
              />
            </label>
            <label className={css.userOrderForm__label}>
              <span className={css.userOrderForm__text}>Phone</span>
              <input
                className={css.userOrderForm__input}
                type="text"
                name="phone"
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={phone}
                onChange={handleImputChange}
                required
                placeholder="+"
              />
            </label>
            <label className={css.userOrderForm__label}>
              <span className={css.userOrderForm__text}>Adress</span>
              <input
                className={css.userOrderForm__input}
                type="text"
                name="adress"
                title="adress"
                value={adress}
                onChange={handleImputChange}
                required
                placeholder="city streed h\a"
              />
            </label>
          </div>
          <ul className={css.userBasketWrapper}>
            {userProductsInBasket.map(({ id, name, img, price, count }) => (
              <ProductBasketItem
                id={id}
                name={name}
                price={price}
                img={img}
                count={count}
                key={id}
              />
            ))}
          </ul>
          <p className={css.totalPrice}>Total price: {totalPrice}</p>
          <button className={css.userOrderForm__button} type="submit">
            submit
          </button>
        </form>
      )}
      {orderNumber && (
        <h1>
          Your order successfull completed, number of order is {orderNumber}
        </h1>
      )}
    </>
  );
};

export default UserOrderForm;

//AIzaSyCR7hSB4k6A1zGCQ5y9-FGK5igYgbTnv7k
