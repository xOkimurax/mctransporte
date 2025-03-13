import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactInfo } from "../assets/data";
import { WHATSAPP_MESSAGE } from "../utils/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Cerrar menú cuando cambia la ruta
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  // WhatsApp link
  const whatsappLink = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between relative">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative z-10"
            onClick={closeMenu}
          >
            <h1 className="text-xl md:text-2xl font-bold text-mc-dark">
              <span className="text-mc-primary">MC</span> Fletes & Mudanzas
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={cn(
                "text-mc-dark hover:text-mc-primary font-medium transition-colors duration-300",
                location.pathname === "/" && "text-mc-primary"
              )}
            >
              Inicio
            </Link>
            <Link 
              to="/servicios" 
              className={cn(
                "text-mc-dark hover:text-mc-primary font-medium transition-colors duration-300",
                location.pathname === "/servicios" && "text-mc-primary"
              )}
            >
              Servicios
            </Link>
            <Link 
              to="/nosotros" 
              className={cn(
                "text-mc-dark hover:text-mc-primary font-medium transition-colors duration-300",
                location.pathname === "/nosotros" && "text-mc-primary"
              )}
            >
              Nosotros
            </Link>
            <Link 
              to="/contacto" 
              className={cn(
                "text-mc-dark hover:text-mc-primary font-medium transition-colors duration-300",
                location.pathname === "/contacto" && "text-mc-primary"
              )}
            >
              Contacto
            </Link>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-mc-primary hover:bg-mc-secondary text-white px-5 py-2 rounded-full transition-all duration-300"
            >
              <Phone size={18} className="mr-2" />
              <span>{contactInfo.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden relative z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} className="text-mc-dark" /> : <Menu size={24} className="text-mc-dark" />}
          </button>

          {/* Mobile Navigation - Sin overlay y con un solo botón de cierre */}
          <div 
            className={cn(
              "fixed top-0 right-0 h-full w-[75%] max-w-xs bg-white shadow-lg z-40 transform transition-transform ease-in-out duration-300 md:hidden",
              isOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="flex flex-col p-6 pt-20 space-y-4">
              {/* Ya no necesitamos otro botón de cierre aquí */}
              <Link 
                to="/" 
                className={cn(
                  "text-mc-dark hover:text-mc-primary font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors",
                  location.pathname === "/" && "text-mc-primary bg-gray-50"
                )}
              >
                Inicio
              </Link>
              <Link 
                to="/servicios" 
                className={cn(
                  "text-mc-dark hover:text-mc-primary font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors",
                  location.pathname === "/servicios" && "text-mc-primary bg-gray-50"
                )}
              >
                Servicios
              </Link>
              <Link 
                to="/nosotros" 
                className={cn(
                  "text-mc-dark hover:text-mc-primary font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors",
                  location.pathname === "/nosotros" && "text-mc-primary bg-gray-50"
                )}
              >
                Nosotros
              </Link>
              <Link 
                to="/contacto" 
                className={cn(
                  "text-mc-dark hover:text-mc-primary font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors",
                  location.pathname === "/contacto" && "text-mc-primary bg-gray-50"
                )}
              >
                Contacto
              </Link>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-mc-primary hover:bg-mc-secondary text-white px-5 py-2 rounded-full transition-colors mt-4"
              >
                <Phone size={18} className="mr-2" />
                <span>{contactInfo.phone}</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;