import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

interface BackdropProps {
  children: ReactNode;
}

const Backdrop = ({ children }:BackdropProps) => {
  return ReactDOM.createPortal(
    <div className="backdrop">{children}</div>,
    document.getElementById('portal') as Element
  );
};

export default Backdrop;
