import styled from 'styled-components';

export interface DivWithIntersectProp {
  intersect?: string;
}

export const Target = styled.div<DivWithIntersectProp>`
  transition: color ease-in-out 4000ms;
  color: ${({ intersect }) => (intersect ? 'red' : 'transparent')};
`;
