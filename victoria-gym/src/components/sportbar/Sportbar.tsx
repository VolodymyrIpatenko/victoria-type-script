import React, { useState, useContext } from 'react';
import Menu from './data';
import { CategoryButton, ProductsVariety, ProductsGallery, ProductsGalleryItem, StyledPrice, SportbarMain, ProductCard } from './GalleryFilter.styled';
import { DarkModeContext } from '../context/DarkModeContext';
import { v4 as uuid } from 'uuid';
import Modal from "../modal/Modal"
import "./sportbar.css";

const id = uuid();

interface ProductsData {
  image: string;
  description: string;
  category: string;
  price: string;
  id: number;
}

const GalleryReact: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [items, setItems] = useState<ProductsData[]>(Menu);
  const buttons = [
    'Амінокислоти',
    'Батончики',
    'Гейнер',
    'Предтреніки',
    'Карнітин',
    'Все',
    'Протеїнові коктейлі',
  ];

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

  const Buttons: React.FC = () => (
    <ProductsVariety>
      {buttons.map((button) => (
        <li key={id}>
          <CategoryButton onClick={() => filterItem(button)}>{button}</CategoryButton>
        </li>
      ))}
    </ProductsVariety>
  );

  interface ImageModalProps {
  imageObj: ProductsData;
  handleClose: () => void;
}

function ImageModal({ imageObj, handleClose }: ImageModalProps): JSX.Element {
  return (
    <Modal>
      <span className="x-close" onClick={handleClose}>
        &times;
      </span>

      <img id="caption" className="modal-content" src={imageObj.image} alt={imageObj.description} />

      <div id="caption">{imageObj.description}</div>
    </Modal>
  );
}
  
  interface ImgListProps {
  itemsGallery: ProductsData[];
  handleClick: (event: React.MouseEvent<HTMLImageElement>) => void;
}
  
  function ProductsGalleryList({itemsGallery, handleClick}:ImgListProps):JSX.Element {
    return (
       <ProductsGallery>
          {items.map(({ image, price, description},index) => (
            <ProductsGalleryItem>
              <img id={String(index)}  src={image} alt={description} onClick={handleClick} />
              <ProductCard>
                <StyledPrice>{price}</StyledPrice>
                <p>{description}</p>
              </ProductCard>
            </ProductsGalleryItem>
          ))}
        </ProductsGallery>
    )
  }

  return (
    <div className={darkMode ? `Content-dark` : undefined}>
    <SportbarMain>
      <section>
        <Buttons />
         {selectedImage !== null ? (
        <ImageModal
          imageObj={items[selectedImage]}
          handleClose={handleModalClose}
        />
      ) : (
        <ProductsGalleryList itemsGallery={items} handleClick={handleImageClick} />
      )}
      </section>
      </SportbarMain>
    </div>
  )
};

export default GalleryReact;