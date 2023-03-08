import { Outlet, Link } from 'react-router-dom';
import { Header, NavigationLink, Nav, Wrap, LogoImg, NavList } from './Header.styled';
import MobileMenuComponent from './MobileMenu';
import SocialComponent from './SocialsComponent';
import navigation from '../common/Navigation';

const HeaderComponent: React.FC = () => {
  return (
    <>
      <Header>
        <Wrap>
          <Link title="На головну" to="/">
            <LogoImg src={process.env.PUBLIC_URL + '/logo.jpg'} alt="logo" />
          </Link>
          <Nav>
            <NavList>
              {navigation.map(({ id, title, path }) => (
                <li key={id}>
                  <NavigationLink to={path}>{title}</NavigationLink>
                </li>
              ))}
            </NavList>
          </Nav>
          <SocialComponent />
        </Wrap>
      </Header>
      <MobileMenuComponent />
      <Outlet />
    </>
  );
};

export default HeaderComponent;
