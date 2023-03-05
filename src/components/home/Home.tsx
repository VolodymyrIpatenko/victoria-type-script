import {Main,Description,Title} from './Home.styled';
import Typed from 'react-typed';
import Slider from '../slider/Slider';
import { DarkModeContext } from '../context/DarkModeContext';
import CoachesList from './CoachesList';
import React, { useContext} from 'react';

const titleStyle = {
 title: {
  marginTop: '50p',
  fontWeight: 'bold',
  fontSize: '32px',
  textAlign: 'center',
  borderRadius: '15px',
  padding:"5px",
  backgroundColor: '#fc060e',
  color:"white",
  },
}as const ;

const Home: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);

    return (
      <div className={darkMode ? `Content-dark` : `Content-light`}>
        <Main>
          <Typed
            style={titleStyle.title}
            strings={['Спортклуб ВІКТОРІЯ']}
            typeSpeed={100}
            showCursor={false}
          />
          <Description>
            Спортивний клуб «Вікторія» — це чудове місце для активного
            відпочинку, а також нових знайомств і прекрасного спілкування. У
            нашому клубі ви гарантовано отримаєте гарний настрій і заряд
            бадьорості, який необхідний для досягнення успіху в житті! У нашому
            клубі продумано зонування і розташування тренажерів відповідно до
            концепції тренувального процесу. Це дозволяє виключити можливість
            одночасної концентрації великої кількості людей в одній зоні клубу,
            щоб тренувальний процес приносив задоволення і був комфортним й
            приємним абсолютно для кожного. Основний принцип нашої роботи —
            надання послуг кращої якості при збереженні помірних цін.
          </Description>
          <Slider />
          <section>
            <Title>Наші тренери</Title>
            <CoachesList/>
          </section>
        </Main>
      </div>
    );
};

export default Home;
