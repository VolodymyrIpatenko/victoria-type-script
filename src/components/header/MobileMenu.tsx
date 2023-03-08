import { GiHamburgerMenu } from 'react-icons/gi';
import { NavigationLink, MobileMenu } from './Header.styled';
import { useToggle } from '../hooks/customHooks';
import { LogoImg } from './Header.styled';
import { Breakpoint } from 'react-socks';
import SwitchMode from '../switch-btn/LightSwitch';
import SocialComponent from './SocialsComponent';
import navigation from '../common/Navigation';
import { Link } from 'react-router-dom';

export default function MobileMenuComponent() {
  const [isOpenMobileMenu, setMobileMenuOpen] = useToggle();

  return (
    <MobileMenu>
      <Breakpoint style={{ display: 'flex', gap: '300px' }} small down>
        <Link title="На головну" to="/">
          <LogoImg src={process.env.PUBLIC_URL + '/logo.jpg'} alt="logo" />
        </Link>
        <GiHamburgerMenu onClick={() => setMobileMenuOpen.toggle()}></GiHamburgerMenu>
      </Breakpoint>
      {isOpenMobileMenu ? (
        <MobileMenu>
          {navigation.map(({ id, title, path }) => (
            <li key={id}>
              <NavigationLink to={path}>{title}</NavigationLink>
            </li>
          ))}
          <SocialComponent />
        </MobileMenu>
      ) : null}
      <SwitchMode />
    </MobileMenu>
  );
}
