import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Menu from './components/Menu';
import HomePage from './pages/HomePage';
import FavouritesPage from './pages/FavouritesPage';
import "./styles.css";

export default function App() {
  return (
    <>
      <h1>11. Домашнее задание к занятию «Redux Toolkit»</h1>
      <h2>11.1  Поиск фильмов по каталогу IMDb и добавление найденных фильмов в "Избранное"</h2>
      <div className="container">
        <Router basename="/">
          <div>
            <Menu />
            <div className="page">
              <Routes >
                <Route path="/" index element={<HomePage />} />
                <Route path="/favourites" element={<FavouritesPage />} />
                <Route path="*" element={<Navigate replace to="/" />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
}
