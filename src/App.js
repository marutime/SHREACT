import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import News from './pages/News/News'
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
      <MainLayout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="News" element={<News />}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
