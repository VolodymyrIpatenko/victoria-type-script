import { Breakpoint } from 'react-socks';
import { Description, HomeSection } from './Home.styled';
import Typed from 'react-typed';
import { titleStyle } from './Home';

const HomeComponent = () => {
  return (
    <Breakpoint large up>
      <HomeSection>
        <Typed
          style={titleStyle.title}
          strings={['Спортклуб ВІКТОРІЯ']}
          typeSpeed={100}
          showCursor={false}
        />
        <Description>
          Спортивний клуб «Вікторія» — це чудове місце для активного відпочинку, а також нових
          знайомств і прекрасного спілкування. У нашому клубі ви гарантовано отримаєте гарний
          настрій і заряд бадьорості, який необхідний для досягнення успіху в житті! У нашому клубі
          продумано зонування і розташування тренажерів відповідно до концепції тренувального
          процесу. Це дозволяє виключити можливість одночасної концентрації великої кількості людей
          в одній зоні клубу, щоб тренувальний процес приносив задоволення і був комфортним й
          приємним абсолютно для кожного. Основний принцип нашої роботи — надання послуг кращої
          якості при збереженні помірних цін.
        </Description>
      </HomeSection>
    </Breakpoint>
  );
};

export default HomeComponent;
