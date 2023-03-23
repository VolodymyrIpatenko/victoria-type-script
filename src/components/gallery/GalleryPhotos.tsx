import { useState } from 'react';
import mainGallery from '../../common/data/GalleryList';
import type GalleryData from '@entities/GalleryData';

const GalleryPhotosComponent = () => {
  const [data, setData] = useState<GalleryData[]>(mainGallery);
  return (
    <>
      {data.map(({ photo, alt }) => {
        return (
          <li>
            <img src={photo} alt={alt} loading="lazy" />
          </li>
        );
      })}
    </>
  );
};

export default GalleryPhotosComponent;
