import { Route, Routes } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Home from './components/home/Home';
import Gallery from './components/gallery/Gallery';
import SharedLayout from './components/layout/Layout';
import GalleryReact from './components/sportbar/Sportbar';
import './mode.css';

interface Props {
  coachData: object;
  photoGallery: object[];
  
}

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home/>} />
        <Route
          path="/gallery"
          element={<Gallery/>}
        />
        <Route path="/sportbar" element={<GalleryReact />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default App;
