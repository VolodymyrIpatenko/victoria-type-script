import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 50px;
`;

export const Description = styled.p`
  margin-bottom: 50px;
  line-height: 2;
  letter-spacing: 0.06em;
  font-style: italic;
`;

export const Coaches = styled.ul`
  display: grid;
  @media screen and (min-width: 1199px) {
    display: grid;
    gap: 20px;
    text-align: center;
  }
`;

export const CoachDescription = styled.p`
  padding: 10px;
  text-align: left;
  line-height: 28px;
`;

export const CoachName = styled.h2`
  display: none;
  @media screen and (min-width: 1199px) {
    margin-top: 100px;
    display: block;
  }
`;

export const HomeSection = styled.section`
  width: 854px;
  height: 900px;
  padding: 50px;
  text-align: center;
  font-size: 20px;
  color: #fc060e;
  background-image: url('https://volodymyripatenko.github.io/victoria-react/main.jpeg');
`;

export const MobileHome = styled(HomeSection)`
  width: 400px;
  height: 400px;
  background-image: url('https://volodymyripatenko.github.io/victoria-react/resized-main.jpeg');
`;

export const VideoStyle = styled.div`
  width: 400px;
  height: 400px;
  @media screen and (min-width: 1199px) {
    width: 700px;
    height: 500px;
  }
`;
