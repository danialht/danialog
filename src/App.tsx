import Home from './Home.tsx';
import NavBar from './Navbar.tsx';
import About from './About.tsx';
import Blog from './Blog.tsx';
import { useState } from 'react';
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavBar handleNavigation={handleNavigation} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <About />}
      {currentPage === 'blog' && <Blog />}
    </ThemeProvider>
  );

}

export default App;