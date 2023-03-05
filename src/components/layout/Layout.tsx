import PageFooter from '../footer/Footer';
import HeaderComponent from '../header/Header';

interface Props {
  children?: React.ReactNode;
}

const SharedLayout: React.FC<Props> = ({ children }) => (
  <>
    <HeaderComponent />
    {children}
    <PageFooter />
  </>
);

export default SharedLayout;
