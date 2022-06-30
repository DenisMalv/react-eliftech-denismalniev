import { Navigation, NavigationLink, AppBarContainer } from './AppBar.styled';

export const AppBar = () => {
  return (
    <AppBarContainer>
      <Navigation>
        <NavigationLink to="/store">
          <span>STORE</span>
        </NavigationLink>
        <NavigationLink to="/cart">
          <span>SHOPPING CART</span>
        </NavigationLink>
        <NavigationLink to="/history">
          <span>HISTORY</span>
        </NavigationLink>
        <NavigationLink to="/coupons">
          <span>COUPONS</span>
        </NavigationLink>
      </Navigation>
    </AppBarContainer>
  );
};
