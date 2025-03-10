
import { Phone } from 'lucide-react';
import { contactInfo } from '@/assets/data';

interface CTAProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const CTA = ({ 
  title = "¿Necesita un servicio de transporte o mudanza?", 
  subtitle = "Contáctenos hoy para una cotización gratuita",
  className = ""
}: CTAProps) => {
  const whatsappLink = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hola!. Vengo del sitio web y quiesiera una cotización del servicio que necesito")}`;

  return (
    <section className={`bg-mc-primary py-16 ${className}`}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{title}</h2>
            <p className="text-white/80 text-lg max-w-lg">{subtitle}</p>
          </div>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-white text-mc-primary font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-mc-accent transition-all duration-300 transform hover:-translate-y-1"
          >
            <Phone size={20} className="mr-3" />
            <span>Solicitar Cotización</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
