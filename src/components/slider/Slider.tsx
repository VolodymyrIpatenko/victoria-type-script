import React from 'react';
import Slider, { Settings } from 'react-slick';
import { Wrraper } from './Slider.styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent: React.FC = () => {
  const settings: Settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <Wrraper>
      <h2>Абонементи та графік роботи</h2>
      <Slider {...settings}>
        <div>
          <h3>Режим роботи</h3>
          <p>Пн.-Пт. 8:00-21:30</p>
          <p>Сб. 10:00-19:00</p>
          <p>Неділя - Вихідний</p>
        </div>
        <div>
          <h3>Разове тренування</h3>
          <p>120 грн</p>
        </div>
        <div>
          <h3>1 Місяць</h3>
          <p>Безліміт 900грн</p>
          <p>Термін дії абонемента 30 днів</p>
        </div>
        <div>
          <h3>3 Місяці</h3>
          <p>Безліміт 2500грн</p>
          <p>Термін дії абонемента 90 днів</p>
        </div>
        <div>
          <h3>6 Місяців</h3>
          <p>Безліміт 4200грн</p>
          <p>Термін дії абонемента 180 днів</p>
        </div>
        <div>
          <h3>12 Місяців</h3>
          <p>Безліміт 8000грн</p>
          <p>Термін дії абонемента 360 днів</p>
        </div>
      </Slider>
    </Wrraper>
  );
};

export default SliderComponent;
