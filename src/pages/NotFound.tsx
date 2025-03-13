// NotFound.tsx responsivo
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-mc-accent to-white p-4">
      <div className="text-center max-w-xs md:max-w-md">
        <div className="text-6xl md:text-8xl font-bold text-mc-primary mb-4 md:mb-6">404</div>
        <h1 className="text-2xl md:text-3xl font-bold text-mc-dark mb-3 md:mb-4">Página no encontrada</h1>
        <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
          Lo sentimos, la página que está buscando no existe o ha sido movida.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center bg-mc-primary text-white font-medium px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-mc-secondary transition-colors duration-300 text-sm md:text-base"
        >
          <ArrowLeft size={16} className="mr-2" />
          <span>Volver al inicio</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;