import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  top: 0;
  padding: 30px;
  background-color: #fc060e;
  @media (max-width: 768px) {
    display: block;
    height: 200px;
  }
`;

export const Icon = styled.a`
  position: relative;
  transition: color 550ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 20px;
  color: white;
  &:hover {
    color: #2196f3;
  }
`;

export const IconsList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 200px;
  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  top: 30px;
  right: 10px;

  @media screen and (min-width: 1199px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: absolute;
    top: 30px;
    right: 10px;
  }
`;

export const NavigationLink = styled(Link)`
  padding: 4px 7px;
  position: relative;
  transition: color 550ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  font-size: 30px;
  border-radius: 7px;
  color: #ffffff;
  &:is(:hover, :active) {
    color: #2196f3;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const MobileWrap = styled.div`
  @media screen and (max-width: 1199px) {
    display: flex;
    gap: 300px;
  }
  display: none;
`;

export const LogoImg = styled.img`
  width: 70px;
  height: 60px;
`;

export const NavList = styled.ul`
  display: grid;
  gap: 5px;
  @media screen and (min-width: 1199px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;
