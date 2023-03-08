import React, { useState, useContext } from 'react';
import Menu from './data';
import {
  ProductsGallery,
  ProductsGalleryItem,
  SportbarMain,
  ProductCard,
} from './SportbarGallery.styled';
import { DarkModeContext } from '../context/DarkModeContext';
import ButtonsList from './Buttons';
import type ProductsData from '@entities/SportBarData';
import './SportbarModal.styled.js';
import ImageModal from './ImgModal';

const GalleryReact: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [items, setItems] = useState<ProductsData[]>(Menu);
  const { darkMode } = useContext(DarkModeContext);

  function handleImageClick(event: React.MouseEvent<HTMLImageElement>) {
    setSelectedImage(parseInt(event.currentTarget.id));
  }

  function handleModalClose() {
    setSelectedImage(null);
  }

  const filterItem = (categItem: string) => {
    if (categItem === 'Все') {
      return setItems(Menu);
    }
    const updatedItems = Menu.filter(({ category }) => category === categItem);
    setItems(updatedItems);
  };
  interface ImgListProps {
    itemsGallery: ProductsData[];
    handleClick: (event: React.MouseEvent<HTMLImageElement>) => void;
  }

  function ProductsGalleryList({ itemsGallery, handleClick }: ImgListProps): JSX.Element {
    return (
      <ProductsGallery>
        {items.map(({ image, price, description }, index) => (
          <ProductsGalleryItem>
            <img id={String(index)} src={image} alt={description} onClick={handleClick} />
            <ProductCard>
              <p>{price}</p>
              <p>{description}</p>
            </ProductCard>
          </ProductsGalleryItem>
        ))}
      </ProductsGallery>
    );
  }

  return (
    <div className={darkMode ? `Content-dark` : `Content-light`}>
      <SportbarMain>
        <section>
          <ButtonsList filterItem={filterItem} />
          {selectedImage !== null ? (
            <ImageModal imageObj={items[selectedImage]} handleClose={handleModalClose} />
          ) : (
            <ProductsGalleryList itemsGallery={items} handleClick={handleImageClick} />
          )}
        </section>
      </SportbarMain>
    </div>
  );
};

export default GalleryReact;
