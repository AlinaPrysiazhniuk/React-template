import { Routes, Route, NavLink } from 'react-router-dom';
import Home from 'pages/Home';
import Dogs from 'pages/Dogs';
import DogDetails from 'pages/DogDetails';
// import { Layout } from './Layout';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/"> Домашня</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Колекція</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/dogs/:dogId" element={<DogDetails />} />
      </Routes>
    </div>
  );
};
