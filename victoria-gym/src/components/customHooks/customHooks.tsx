import { useState, ChangeEvent } from 'react';

export const useInput = (): [string, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState<string>('');

  const handleValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  }

  return [value, handleValue];
};

export const useToggle = (): [boolean, { toggle: () => void }] => {
  const [value, setValue] = useState<boolean>(false);

  const toggle = (): void => {
    setValue(state => !state);
  }

  return [value, { toggle }];
};
