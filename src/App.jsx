import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carusel from './components/Carusel/Carusel';
import Home from './components/Home/Home';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Doctors from './components/Doctors/Doctors';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';





function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Navigasiya menyusu */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
