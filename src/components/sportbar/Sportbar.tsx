import React, { useState, useContext, useCallback } from 'react';
import Menu from '../../common/data/SportbarData';
import { ContentDark, ContentLight } from '../../Mode.styled';
import {
  ProductsGallery,
  ProductsGalleryItem,
  SportbarMain,
  ProductCard,
} from './SportbarGallery.styled';
import { DarkModeContext } from '../../context/DarkModeContext';
import ButtonsList from './Buttons';
import type ProductsData from '@entities/SportBarData';
import './SportbarModal.styled';
import ImageModal from './ImgModal';

const GalleryReact: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [items, setItems] = useState<ProductsData[]>(Menu);
  const { darkMode } = useContext(DarkModeContext);

  const Theme = darkMode ? ContentDark : ContentLight;

  const handleImageClick = useCallback(
    (event: React.MouseEvent<HTMLImageElement>) => {
      setSelectedImage(parseInt(event.currentTarget.id));
    },
    [setSelectedImage],
  );

  function handleModalClose() {
    setSelectedImage(null);
  }
  const filterItem = useCallback(
    (categItem: string) => {
      if (categItem === 'Все') {
        return setItems(Menu);
      }
      const updatedItems = Menu.filter(({ category }) => category === categItem);
      setItems(updatedItems);
    },
    [setItems],
  );
  interface ImgListProps {
    itemsGallery: ProductsData[];
    handleClick: (event: React.MouseEvent<HTMLImageElement>) => void;
  }

  const ProductsGalleryList = React.memo(({ itemsGallery, handleClick }: ImgListProps) => {
    return (
      <ProductsGallery>
        {itemsGallery.map(({ image, price, description }, index) => (
          <ProductsGalleryItem key={index}>
            <img id={String(index)} src={image} alt={description} onClick={handleClick} />
            <ProductCard>
              <p>{price}</p>
              <p>{description}</p>
            </ProductCard>
          </ProductsGalleryItem>
        ))}
      </ProductsGallery>
    );
  });

  return (
    <Theme>
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
    </Theme>
  );
};

export default GalleryReact;
