import React, { useState, useContext } from 'react';
import Menu from './data';
import { CategoryButton, ProductsVariety, ProductsGallery, ProductsGalleryItem, StyledPrice, SportbarMain, ProductCard } from './GalleryFilter.styled';
import { DarkModeContext } from '../context/DarkModeContext';
import { nanoid } from "nanoid";

const id = nanoid();

type ProductsData = {
  image: string,
  description: string,
  category: string,
  price: string
}

const GalleryReact: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
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

  return (
    <div className={darkMode ? `Content-dark` : undefined}>
    <SportbarMain>
      <section>
        <Buttons />
        <ProductsGallery>
          {items.map(({ image, price, description }) => (
            <ProductsGalleryItem key={id}>
              <img src={image} alt={description} />
              <ProductCard>
                <StyledPrice>{price}</StyledPrice>
                <p>{description}</p>
              </ProductCard>
            </ProductsGalleryItem>
          ))}
        </ProductsGallery>
      </section>
      </SportbarMain>
    </div>
  )
};

export default GalleryReact;