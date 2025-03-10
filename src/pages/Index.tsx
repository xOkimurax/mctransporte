
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, ShieldCheck, Clock, Award } from "lucide-react";
import { services, testimonials } from "@/assets/data";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  // Display only 3 services on homepage
  const featuredServices = services.slice(0, 3);
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-mc-accent to-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <ScrollReveal direction="left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-mc-dark leading-tight mb-6">
                  Transporte y Mudanzas con Profesionalismo y Seguridad
                </h1>
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={200}>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                  Servicio completo de mudanzas y transporte para particulares y empresas en todo Paraguay.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="left" delay={400}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link 
                    to="/servicios" 
                    className="bg-mc-primary text-white font-medium px-8 py-3 rounded-full hover:bg-mc-secondary transition-colors duration-300 flex items-center"
                  >
                    Nuestros Servicios
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                  <Link 
                    to="/contacto" 
                    className="bg-white text-mc-primary font-medium px-8 py-3 rounded-full border border-mc-primary hover:bg-mc-accent transition-colors duration-300"
                  >
                    Contáctenos
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            
            <ScrollReveal direction="right" delay={300}>
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                  <img 
                    src="/src/assets/hero-image.jpg" 
                    alt="MC Transporte y Mudanzas" 
                    className="w-full h-auto object-cover"
                    style={{ aspectRatio: "4/3" }}
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 md:left-auto md:-right-6 bg-white rounded-lg shadow-lg p-4 max-w-[180px]">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-mc-primary flex items-center justify-center">
                      <ShieldCheck size={16} className="text-white" />
                    </div>
                    <span className="ml-2 font-bold text-mc-dark">100% Seguro</span>
                  </div>
                  <p className="text-sm text-gray-600">Transporte protegido para todos sus bienes</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-[5%] w-40 h-40 bg-mc-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-[10%] w-60 h-60 bg-mc-primary/5 rounded-full blur-3xl"></div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-mc-dark mb-4">
                ¿Por Qué Elegir <span className="text-mc-primary">MC Transporte</span>?
              </h2>
              <p className="text-gray-600 text-lg">
                Ofrecemos soluciones integrales adaptadas a sus necesidades específicas con los más altos estándares de calidad.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white rounded-xl p-6 shadow-md hover-lift">
                <div className="w-14 h-14 bg-mc-accent rounded-full flex items-center justify-center mb-6">
                  <Truck size={24} className="text-mc-primary" />
                </div>
                <h3 className="text-xl font-bold text-mc-dark mb-3">Flota Moderna</h3>
                <p className="text-gray-600">
                  Vehículos equipados con tecnología de seguimiento y adaptados para todo tipo de carga.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white rounded-xl p-6 shadow-md hover-lift">
                <div className="w-14 h-14 bg-mc-accent rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck size={24} className="text-mc-primary" />
                </div>
                <h3 className="text-xl font-bold text-mc-dark mb-3">Seguridad</h3>
                <p className="text-gray-600">
                  Sistemas de seguridad avanzados y personal capacitado para proteger sus bienes.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={300}>
              <div className="bg-white rounded-xl p-6 shadow-md hover-lift">
                <div className="w-14 h-14 bg-mc-accent rounded-full flex items-center justify-center mb-6">
                  <Clock size={24} className="text-mc-primary" />
                </div>
                <h3 className="text-xl font-bold text-mc-dark mb-3">Puntualidad</h3>
                <p className="text-gray-600">
                  Cumplimos con los plazos acordados, garantizando que su carga llegue a tiempo.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={400}>
              <div className="bg-white rounded-xl p-6 shadow-md hover-lift">
                <div className="w-14 h-14 bg-mc-accent rounded-full flex items-center justify-center mb-6">
                  <Award size={24} className="text-mc-primary" />
                </div>
                <h3 className="text-xl font-bold text-mc-dark mb-3">Experiencia</h3>
                <p className="text-gray-600">
                  Años de experiencia en el sector nos permiten ofrecer un servicio de calidad.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-mc-dark mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-gray-600 text-lg">
                Soluciones completas de transporte y mudanza adaptadas a sus necesidades específicas.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index} 
              />
            ))}
          </div>
          
          <ScrollReveal delay={400}>
            <div className="text-center mt-12">
              <Link 
                to="/servicios" 
                className="inline-flex items-center text-mc-primary hover:text-mc-secondary font-medium transition-colors duration-200"
              >
                <span>Ver todos los servicios</span>
                <ArrowRight size={18} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-mc-dark mb-4">
                Lo Que Dicen Nuestros Clientes
              </h2>
              <p className="text-gray-600 text-lg">
                La satisfacción de nuestros clientes es nuestra mayor recompensa.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                avatar={testimonial.avatar}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default Index;
