import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (window.scrollY > 300) {
        navbar.classList.add("scrolled");
        navbar.classList.remove("transparent");
      } else {
        navbar.classList.add("transparent");
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.addEventListener("click", () => {
        menuRef.current.classList.remove("show"); // Menyunu bağlayır
      });
    });
    
    const toggleMenu = () => {
      menuRef.current.classList.toggle("show");
    };

    const button = buttonRef.current;
    button.addEventListener("click", toggleMenu);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      button.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    
    <nav ref={navbarRef} className="navbar navbar-expand-lg fixed-top transparent">
      
      <div className="container-fluid">
        
        <Link className="navbar-brand" to="/">Mediplus</Link>

        <button
          className="navbar-toggler"
          type="button"
          ref={buttonRef}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNavDropdown"
          ref={menuRef}
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/departament">Departament</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div> 
    </nav>
  );
}

export default Navbar;
