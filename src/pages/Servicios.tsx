
import { useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/assets/data";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ScrollReveal";

const Servicios = () => {
  const location = useLocation();
  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  
  // Handle hash navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = serviceRefs.current[id];
      if (element) {
        setTimeout(() => {
          const yOffset = -100; // Header height offset
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 300);
      }
    }
  }, [location]);
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-mc-accent to-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-mc-dark mb-6">
                Nuestros Servicios
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Ofrecemos soluciones integrales de transporte y mudanzas adaptadas a sus necesidades específicas, con los más altos estándares de calidad y seguridad.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              ref={(el) => (serviceRefs.current[service.id] = el)}
              className="mb-24 last:mb-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                      style={{ aspectRatio: "16/9" }}
                    />
                  </div>
                </ScrollReveal>
                
                <ScrollReveal direction={index % 2 === 0 ? "right" : "left"}>
                  <div className={`lg:${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <h2 className="text-3xl font-bold text-mc-dark mb-6">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-8">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      <h3 className="text-xl font-semibold text-mc-dark">
                        Características del Servicio:
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="flex items-start">
                          <div className="mr-3 mt-1">
                            <Check size={16} className="text-mc-primary" />
                          </div>
                          <p className="text-gray-600">Personal capacitado y profesional</p>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 mt-1">
                            <Check size={16} className="text-mc-primary" />
                          </div>
                          <p className="text-gray-600">Vehículos adecuados para cada necesidad</p>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 mt-1">
                            <Check size={16} className="text-mc-primary" />
                          </div>
                          <p className="text-gray-600">Seguro de transporte incluido</p>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 mt-1">
                            <Check size={16} className="text-mc-primary" />
                          </div>
                          <p className="text-gray-600">Evaluación previa sin costo</p>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 mt-1">
                            <Check size={16} className="text-mc-primary" />
                          </div>
                          <p className="text-gray-600">Embalaje profesional disponible</p>
                        </div>
                        <div className="flex items-start">
                          <div className="mr-3 mt-1">
                            <Check size={16} className="text-mc-primary" />
                          </div>
                          <p className="text-gray-600">Servicio en todo Paraguay</p>
                        </div>
                      </div>
                    </div>
                    
                    <Link
                      to="/contacto"
                      className="inline-flex items-center bg-mc-primary text-white font-medium px-6 py-3 rounded-full hover:bg-mc-secondary transition-colors duration-300"
                    >
                      <span>Solicitar Presupuesto</span>
                      <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default Servicios;
