import React from 'react';
import socialsList from '../common/SocialsList';
import { IconsList, Icon } from './Header.styled';

const SocialComponent = (): JSX.Element => {
  return (
    <IconsList>
      {socialsList.map(({ id, path, component }) => (
        <li key={id}>
          <Icon href={path} target="_blank">
            {React.createElement(component)}
          </Icon>
        </li>
      ))}
    </IconsList>
  );
};

export default SocialComponent;
