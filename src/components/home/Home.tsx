import { Main, Title, VideoStyle } from './Home.styled';
import Slider from '../slider/Slider';
import { DarkModeContext } from '../../context/DarkModeContext';
import CoachesList from './CoachesList';
import React, { useContext } from 'react';
import videoBg from '../assets/victoria.mp4';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import HomeComponent from './HomeDesktopDescription';
import MobileHomeComponent from './HomeMobileDescription';
import { ContentDark, ContentLight } from '../../Mode.styled';

export const titleStyle = {
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: '15px',
    padding: '5px',
    backgroundColor: '#fc060e',
    color: 'white',
  },
} as const;

const Home: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  const Theme = darkMode ? ContentDark : ContentLight;
  return (
    <Theme>
      <Main>
        <VideoStyle>
          <Player src={videoBg} />
        </VideoStyle>
        <MobileHomeComponent />
        <HomeComponent />
        <Slider />
        <section>
          <Title>Наші тренери</Title>
          <CoachesList />
        </section>
      </Main>
    </Theme>
  );
};

export default Home;
