import Backdrop from './Backdrop';
import './Modal.styled.js';
import { ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return <Backdrop>{children}</Backdrop>;
};

export default Modal;
