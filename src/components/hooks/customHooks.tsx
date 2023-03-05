import { useState } from 'react';

export const useToggle = ():[boolean,{toggle:()=>void}] => {
  const [value, setValue] = useState<boolean>(false);

  const toggle = (): void => {
    setValue(state => !state);
  }

  return [value, { toggle }];
};
