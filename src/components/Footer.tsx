import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { contactInfo } from "../assets/data";
import { WHATSAPP_MESSAGE } from "../utils/constants";

const Footer = () => {
  // WhatsApp link
  const whatsappLink = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <footer className="bg-mc-dark text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-mc-primary">MC</span> Fletes
            </h2>
            <p className="text-gray-300 max-w-xs">
              Servicio de fletes y mudanzas con profesionalismo y seguridad en todo Paraguay.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-gray-300 hover:text-mc-primary transition-colors duration-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-gray-300 hover:text-mc-primary transition-colors duration-200">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-300 hover:text-mc-primary transition-colors duration-200">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-mc-primary transition-colors duration-200">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone size={20} className="text-mc-primary mr-2" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-mc-primary transition-colors duration-200">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-mc-primary mr-2" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-mc-primary transition-colors duration-200">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-mc-primary mr-2 mt-1" />
                <span className="text-gray-300">{contactInfo.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Redes Sociales</h3>
            <div className="flex space-x-4">
              <a
                href={contactInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-mc-primary transition-colors duration-200"
              >
                <Facebook size={24} />
              </a>
              <a
                href={contactInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-mc-primary transition-colors duration-200"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p> {new Date().getFullYear()} MC Fletes y Mudanzas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
