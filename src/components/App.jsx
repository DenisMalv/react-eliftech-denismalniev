import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import Loader from './Loader/Loader';

const StorePage = lazy(() => import('pages/StorePage.js'));
const CompanyPage = lazy(() => import('pages/CompanyPage.js'));

const Page404 = lazy(() => import('pages/Page404.js'));
const ShopingCartPage = lazy(() => import('pages/ShopingCartPage.js'));
const HistoryPage = lazy(() => import('pages/HistoryPage'));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="store" element={<StorePage />}>
              <Route path=":companyName" element={<CompanyPage />} />
            </Route>
            <Route path="cart" element={<ShopingCartPage />} />
            <Route path="history" element={<HistoryPage />} />
            {/* <Route path="coupons" element={<CouponsPage />} /> */}
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
  // }
};

export default App;
