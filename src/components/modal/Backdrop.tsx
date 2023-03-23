import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Backdrop } from './Modal.styled';

interface BackdropProps {
  children: ReactNode;
}

const BackdropComponent = ({ children }: BackdropProps) => {
  return ReactDOM.createPortal(
    <Backdrop>{children}</Backdrop>,
    document.getElementById('portal') as Element,
  );
};

export default BackdropComponent;
