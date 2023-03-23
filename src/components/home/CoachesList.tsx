import { Coaches, CoachDescription, CoachName } from './Home.styled';
import React, { useState } from 'react';
import { Breakpoint } from 'react-socks';
import coachData from '../../common/data/Coach.Data';
import type CoachData from '@entities/CoachData';
import './coach.css';
import { nanoid } from 'nanoid';
const id = nanoid();

const CoachesList: React.FC = () => {
  const [data, _] = useState<CoachData[]>(coachData);
  return (
    <Coaches>
      {data.map(({ photo, alt, description, name }) => {
        return (
          <>
            <CoachName>{name}</CoachName>
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
          </>
        );
      })}
    </Coaches>
  );
};

export default CoachesList;
