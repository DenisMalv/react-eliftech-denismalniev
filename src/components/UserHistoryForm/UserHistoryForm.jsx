import { useState } from 'react';
import css from './UserHistoryForm.module.css';
import { useGetOrdersRTKMutation } from 'redux/RTKOrdersApi/OrdersApi';

import ProductHistoryItem from 'components/ProductHistoryItem/ProductHistoryItem';

const UserHistoryForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [userOrders, setUserOrders] = useState([]);
  const [getOrdersRTK] = useGetOrdersRTKMutation();

  const handleImputChange = event => {
    const { name, value } = event.currentTarget;

    // eslint-disable-next-line default-case
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const contact = {
      email,
      phone,
    };
    console.log('contact', contact);
    const res = await getOrdersRTK(contact);
    setUserOrders(res.data.data);
    reset();
  };

  const reset = () => {
    setEmail('');
    setPhone('');
  };

  return (
    <>
      <form className={css.userHistoryForm} onSubmit={handleSubmit}>
        <div className={css.userHistoryWrapper}>
          <label className={css.userHistoryForm__label}>
            <span className={css.userHistoryForm__text}>Email</span>
            <input
              className={css.userHistoryForm__input}
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
          <label className={css.userHistoryForm__label}>
            <span className={css.userHistoryForm__text}>Phone</span>
            <input
              className={css.userHistoryForm__input}
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
        </div>
        {userOrders && (
          <ul className={css.userHistoryOrdersWrapper}>
            {userOrders.map(({ _id, order, totalPrice }) => (
              <ProductHistoryItem
                id={_id}
                order={order}
                price={totalPrice}
                key={_id}
              />
            ))}
          </ul>
        )}
        <button className={css.userHistoryForm__button} type="submit">
          submit
        </button>
      </form>
    </>
  );
};

export default UserHistoryForm;

//AIzaSyCR7hSB4k6A1zGCQ5y9-FGK5igYgbTnv7k
