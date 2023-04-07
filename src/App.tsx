import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import GlobalStyle from './Global.styled';

const Home = lazy(() => import('./components/home/Home'));
const Gallery = lazy(() => import('./components/gallery/Gallery'));
const GalleryReact = lazy(() => import('./components/sportbar/Sportbar'));
const Contacts = lazy(() => import('./components/contacts/Contacts'));
const SharedLayout = lazy(() => import('./components/layout/Layout'));

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/sportbar" element={<GalleryReact />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
