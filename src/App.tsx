import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.tsx';
import About from './About.tsx';
import Blog from './Blog.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/danialog/" element={<Home />} />
        <Route path="/danialog/about" element={<About />} />
        <Route path="/danialog/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;