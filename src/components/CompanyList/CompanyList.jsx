import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './ContactList.module.css';

const CompanyList = () => {
  return (
    <>
      <ul className={css.companylist}>
        <li className={css.companylist_item}>
          <NavLink className={css.companylist_link} to={'macdonny'}>
            MacDonny
          </NavLink>
        </li>
        <li className={css.companylist_item}>
          <NavLink className={css.companylist_link} to={'kfs'}>
            KFS
          </NavLink>
        </li>
        <li className={css.companylist_item}>
          <NavLink className={css.companylist_link} to={'pizzaday'}>
            PizzaDay
          </NavLink>
        </li>
        <li className={css.companylist_item}>
          <NavLink className={css.companylist_link} to={'gastrocafe'}>
            GastroCafe
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default CompanyList;
