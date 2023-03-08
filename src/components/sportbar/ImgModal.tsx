import type ProductsData from '@entities/SportBarData';
import { ModalContent, CloseButton, Caption } from './SportbarModal.styled';
import { v4 as uuid } from 'uuid';
import Modal from '../modal/Modal';

const id = uuid();

interface ImageModalProps {
  imageObj: ProductsData;
  handleClose: () => void;
}

export default function ImageModal({ imageObj, handleClose }: ImageModalProps): JSX.Element {
  return (
    <Modal key={id}>
      <CloseButton onClick={handleClose}>&times;</CloseButton>

      <ModalContent src={imageObj.image} alt={imageObj.description} />

      <Caption>{imageObj.description}</Caption>
    </Modal>
  );
}
