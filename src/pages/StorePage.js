import CompanyList from 'components/CompanyList/CompanyList';
import { Outlet } from 'react-router-dom';

const StorePage = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <CompanyList />
        <Outlet />
      </div>
    </>
  );
};

export default StorePage;
