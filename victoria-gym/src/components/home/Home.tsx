import {
  Main,
  Description,
  Coaches,
  Title,
  CoachDescription,
} from './Home.styled';
import { Breakpoint } from 'react-socks';
import Typed from 'react-typed';
import Slider from '../slider/Slider';
import './coach.css';
import { nanoid } from 'nanoid';
import coachData from "./coach.js"
import { DarkModeContext } from '../context/DarkModeContext';
import React, { useContext, useState } from 'react';

const id = nanoid();


type CoachData = {
  photo: string,
  alt: string,
  name: string,
  description: string
};

const CoachesList: React.FC = () => {
  const [data, setData] = useState<CoachData[]>(coachData)
   return (
    <Coaches>
       {data.map(({ photo, alt, description, name }) => {
      return(
    <li key={id} className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={photo} alt={alt} width="300" height="200" />
          <Breakpoint small down>
            <h2>{name}</h2>
            <p>{description}</p>
          </Breakpoint>
        </div>
        <div className="flip-card-back">
          <h1>{name}</h1>
          <CoachDescription>{description}</CoachDescription>
        </div>
      </div>
        </li>
      )
    })}   
     </Coaches>
  );
};

const titleStyle = {
  title: {
    marginTop: '50p',
    fontWeight: 'bold',
    fontSize: '32px',
    textAlign: 'center',
  },
}as const ;

const Home: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);

    return (
      <div className={darkMode ? `Content-dark` : undefined}>
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
