import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

import './app.css';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
