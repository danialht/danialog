import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.tsx';
import NavBar from './Navbar.tsx';
import About from './About.tsx';
import Blog from './Blog.tsx';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <>
      <NavBar handleNavigation={handleNavigation} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <About />}
      {currentPage === 'blog' && <Blog />}
    </>
  );

}

export default App;