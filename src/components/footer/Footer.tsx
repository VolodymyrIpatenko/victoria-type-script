import { Footer, MailLink } from './Footer.styled';
import { LogoImg } from '../header/Header.styled';
import { Link } from 'react-router-dom';

const PageFooter = () => {
  return (
    <Footer>
      <Link title="На головну" to="/">
        <LogoImg src={process.env.PUBLIC_URL + '/logo.jpg'} alt="logo" />
      </Link>
      <MailLink href="mailto:sport_club_victoria@gmail.com">sportzalviktoria@gmail.com</MailLink>
    </Footer>
  );
};

export default PageFooter;
