import React, { useRef, useState } from 'react';
import { useIntersectionObserver } from '@fremtind/jkl-react-hooks';
import { Target } from './Observer.styled';

interface ObserverProps {
  children: React.ReactNode;
}

const Observer: React.FC<ObserverProps> = ({ children }) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const onIntersect = (entries: IntersectionObserverEntry[]) =>
    setIsIntersecting(entries.some(entry => entry.isIntersecting));

  const fallback = () =>
    console.log('useful for browsers that do not support intersection observer');
  useIntersectionObserver(targetRef, onIntersect, fallback);

  return (
    <Target ref={targetRef} intersect={isIntersecting ? 'intersect' : ''}>
      {children}
    </Target>
  );
};

export default Observer;
