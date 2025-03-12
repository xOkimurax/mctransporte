
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { contactInfo, companyInfo } from "@/assets/data";

const Footer = () => {
  // WhatsApp link
  const whatsappLink = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hola!. Vengo del sitio web y quiesiera una cotización del servicio que necesito")}`;

  return (
    <footer className="bg-mc-dark text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">
              <span className="text-mc-primary">MC</span> Fletes
            </h2>
            <p className="text-gray-300 max-w-xs">
              {companyInfo.description.substring(0, 120)}...
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/servicios#mudanzas" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Mudanzas Residenciales
                </Link>
              </li>
              <li>
                <Link to="/servicios#Fletes-comercial" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Fletes Comercial
                </Link>
              </li>
              <li>
                <Link to="/servicios#logistica" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Logística y Distribución
                </Link>
              </li>
              <li>
                <Link to="/servicios#internacional" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Mudanzas Internacionales
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-mc-primary" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-white transition-colors duration-200">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-mc-primary" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-mc-primary" />
                <span className="text-gray-300">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center space-x-4 pt-2">
              <a href={contactInfo.socialMedia.facebook} className="text-gray-300 hover:text-white transition-colors duration-200">
              <Facebook size={20} />
              </a>
                <a href={contactInfo.socialMedia.instagram} className="text-gray-300 hover:text-white transition-colors duration-200">
                  <Instagram size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} {companyInfo.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
