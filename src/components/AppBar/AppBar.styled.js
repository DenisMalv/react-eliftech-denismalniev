import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AppBarContainer = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 15px;
  padding: 10px;
  background: #ebebeb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 68px;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  outline: none;
  color: #271515;
  display: inline-block;
  position: relative;
  padding: 15px 20px;
  // border: 1px solid #271515;
  border-radius: 68px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    background: #271515;
    color: white;
  }
  &.active {
    color: white;
    background: #271515;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    pointer-events: none;
  }
`;

export const NavContacts = styled(NavLink)`
  text-decoration: none;
  outline: none;
  color: white;
  display: inline-block;
  position: relative;
  padding: 15px 20px;
  border: 1px solid;
  //   border-image: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
  border-image-slice: 1;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 0;
    width: 100%;
    z-index: -1;
    color: white;
    // background: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
    background: linear-gradient(
      0deg,
      rgba(0, 230, 255, 1) 0%,
      rgba(0, 93, 92, 1) 36%,
      rgba(1, 0, 16, 1) 100%
    );
    transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  &:hover {
    background: rgba(255, 255, 255, 0);
    &:before {
      bottom: 0%;
      top: auto;
      height: 100%;
    }
    span {
      position: relative;
    }
  }
  &.active {
    color: #00cdd5;
    pointer-events: none;
  }
`;

// export const NavHomepage = styled(NavLink)`
//   font-family: Roboto;
//   font-weight: 700;
//   font-size: 24px;
//   text-decoration: none;
//   color: #282828;
//   transition: color 400ms ease;
//   &:hover {
//     color: #00cee4;
//   }
//   &.active {
//     color: #00cdd5;
//     pointer-events: none;
//   }
// `;

// export const NavContacts = styled(NavLink)`
//   font-family: Roboto;
//   font-weight: 700;
//   font-size: 24px;
//   text-decoration: none;
//   color: #282828;

//   transition: color 400ms ease;
//   &:hover {
//     color: #00cee4;
//   }
//   &.active {
//     color: #00cdd5;
//     pointer-events: none;
//   }
// `;

export const Helper = styled.div`
  margin: 0;
  padding: 0;
  font-size: 14px;
  p {
    padding: 0;
    margin: 0;
  }
`;
