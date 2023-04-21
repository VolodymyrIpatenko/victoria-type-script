import React from 'react';
import { ProductsGallery, ProductsGalleryItem, ProductCard } from './SportbarGallery.styled';
import type ProductsData from '@entities/SportBarData';
import { nanoid } from 'nanoid';
const id = nanoid();

interface ImgListProps {
  itemsGallery: ProductsData[];
  handleClick: (event: React.MouseEvent<HTMLImageElement>) => void;
}

const ProductsGalleryList = React.memo(({ itemsGallery, handleClick }: ImgListProps) => {
  return (
    <ProductsGallery>
      {itemsGallery.map(({ image, price, description }, index) => (
        <ProductsGalleryItem key={id}>
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

export default ProductsGalleryList;
