import { Coaches, CoachDescription, CoachesDescription } from './Home.styled';
import React, { useState } from 'react';
import coachData from '../../common/data/CoachData';
import type CoachData from '@entities/CoachData';
import '@fremtind/jkl-core/core.min.css';
import Observer from '../../utils/Observer';
import { nanoid } from 'nanoid';
const id = nanoid();

const CoachesList: React.FC = () => {
  const [data, _] = useState<CoachData[]>(coachData);
  return (
    <Coaches>
      {data.map(({ photo, alt, description, name }) => {
        return (
          <>
            <li key={id}>
              <img src={photo} alt={alt} width="300" height="200" />
              <Observer>
                <CoachesDescription>
                  <h2>{name}</h2>
                  <CoachDescription>{description}</CoachDescription>
                </CoachesDescription>
              </Observer>
            </li>
          </>
        );
      })}
    </Coaches>
  );
};

export default CoachesList;
