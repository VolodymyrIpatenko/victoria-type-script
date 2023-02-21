import { Main } from '../home/Home.styled.js';
import {
  GalleryListColumn,
  GalleryListRow,
  DirectionBtn,
} from './Gallery.styled';
import Typed from 'react-typed';
import { FaExpandArrowsAlt } from 'react-icons/fa';
import { useToggle } from '../customHooks/customHooks';
import { Breakpoint } from 'react-socks';
import { DarkModeContext } from '../context/DarkModeContext';
import React, { useContext, useState } from 'react';
import mainGallery from './page.js'



type GalleryData = {
  alt: string,
  photo: string
}

const titleStyle = {
  title: {
  marginTop: '50p',
  fontWeight: 'bold',
  fontSize: '32px',
  textAlign: 'center',
  },
} as const;




const Gallery: React.FC = () => {
  const [data, setData] = useState<GalleryData[]>(mainGallery);
  const [row, setToggleDirection] = useToggle();
  const GalleryDirection = row ? GalleryListColumn : GalleryListRow;
 
  const { darkMode } = useContext(DarkModeContext);

    return (
      <div className={darkMode ? `Content-dark` : undefined}>
        <Main>
          <Typed
            style={titleStyle.title}
            strings={['Наші фото']}
            typeSpeed={100}
            showCursor={false}
          />
          <Breakpoint
            style={{
              display: 'flex',
              gap: '20px',
              marginLeft: 'auto',
              fontSize: '30px',
              cursor: 'pointer',
            }}
            xlarge
            up
          >
            <>
              <DirectionBtn onClick={() => setToggleDirection.toggle()}>
                <FaExpandArrowsAlt title="Змінити напрям"></FaExpandArrowsAlt>
              </DirectionBtn>
            </>
          </Breakpoint>
             <GalleryDirection>
            {data.map(({photo,alt}) => {
              return (
                <li>
                  <img src={photo} alt={alt} loading="lazy" />
                </li>
              );
            })}
        </GalleryDirection>
        </Main>
      </div>
    );
};

export default Gallery;
