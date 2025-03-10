
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { companyInfo, contactInfo } from "@/assets/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  // WhatsApp link
  const whatsappLink = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hola!. Vengo del sitio web y quiesiera una cotización del servicio que necesito")}`;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-md py-2" : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative z-10"
            onClick={closeMenu}
          >
            <h1 className="text-xl md:text-2xl font-bold text-mc-dark">
              <span className="text-mc-primary">MC</span> Transporte
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-mc-dark hover:text-mc-primary font-medium transition-colors duration-200">
              Inicio
            </Link>
            <Link to="/servicios" className="text-mc-dark hover:text-mc-primary font-medium transition-colors duration-200">
              Servicios
            </Link>
            <Link to="/nosotros" className="text-mc-dark hover:text-mc-primary font-medium transition-colors duration-200">
              Nosotros
            </Link>
            <Link to="/contacto" className="text-mc-dark hover:text-mc-primary font-medium transition-colors duration-200">
              Contacto
            </Link>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center bg-mc-primary hover:bg-mc-secondary text-white px-5 py-2 rounded-full transition-all duration-300"
            >
              <Phone size={18} className="mr-2" />
              <span>{contactInfo.phone}</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-10 p-2 text-mc-dark"
            onClick={toggleMenu}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
            <Link 
              to="/" 
              className="text-mc-dark hover:text-mc-primary font-medium transition-colors duration-200"
              onClick={closeMenu}
            >
              Inicio
            </Link>
            <Link 
              to="/servicios" 
              className="text-mc-dark hover:text-mc-primary font-medium transition-colors duration-200"
              onClick={closeMenu}
            >
              Servicios
            </Link>
            <Link 
              to="/nosotros" 
              className="text-mc-dark hover:text-mc-primary font-medium transition-colors duration-200"
              onClick={closeMenu}
            >
              Nosotros
            </Link>
            <Link 
              to="/contacto" 
              className="text-mc-dark hover:text-mc-primary font-medium transition-colors duration-200"
              onClick={closeMenu}
            >
              Contacto
            </Link>
            <Button asChild className="mt-4">
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Phone size={18} className="mr-2" />
                <span>Contactar ahora</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
