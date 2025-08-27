import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowRight, Truck, ShieldCheck, Clock, Award, DollarSign } from "lucide-react";
import { services } from "@/assets/data";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ScrollReveal";
import transporte1 from "@/assets/transporte1.jpeg";
import transporte2 from "@/assets/transporte2.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
    arrows: false,
    dotsClass: "slick-dots custom-dots"
  };

  return (
    <div className="relative w-full h-full carousel-container">
      <style>
        {`
          .carousel-container {
            height: 100%;
          }
          .carousel-container .slick-slider,
          .carousel-container .slick-list,
          .carousel-container .slick-track,
          .carousel-container .slick-slide > div {
            height: 100%;
          }
          .carousel-container .slick-slide > div {
            width: 100%;
          }
          .carousel-container .custom-dots {
            bottom: -25px;
          }
          .carousel-container .custom-dots li button:before {
            color: #666;
            opacity: 0.5;
            font-size: 8px;
          }
          .carousel-container .custom-dots li.slick-active button:before {
            color: #333;
            opacity: 1;
          }
        `}
      </style>
      <Slider {...settings}>
        <div className="w-full h-full">
          <img
            src={transporte1}
            alt="Fletes Asunción Paraguay - MC Transporte Profesional"
            className="w-full h-full object-cover"
            style={{ aspectRatio: "4/3", display: "block" }}
          />
        </div>
        <div className="w-full h-full">
          <img
            src={transporte2}
            alt="Mudanzas Paraguay - Servicio Profesional Económico"
            className="w-full h-full object-cover"
            style={{ aspectRatio: "4/3", display: "block" }}
          />
        </div>
      </Slider>
    </div>
  );
};

const Index = () => {
  // Display only 3 services on homepage
  const featuredServices = services.slice(0, 3);
  
  return (
    <>
      <Helmet>
        <title>MC Fletes y Mudanzas - Asunción Paraguay Transporte Profesional 24hs</title>
        <meta name="description" content="✅ Fletes Asunción Paraguay ✅ Mudanzas Residenciales y Comerciales ✅ Transporte 24hs ✅ Servicio Económico ✅ Más de 10 años de experiencia - MC Fletes" />
        <meta name="keywords" content="fletes asuncion, mudanzas paraguay, transporte asuncion, fletes economicos, mudanzas residenciales, mudanzas comerciales, transporte profesional, fletes 24 horas, mudanzas seguras, transporte carga" />
      </Helmet>
      
      {/* Hero Section - Reconstruido para mejor centrado en móvil */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-mc-accent to-white relative overflow-hidden">
        <div className="px-3 mx-auto" style={{ maxWidth: '100%' }}>
          {/* Mobile View - Todo centrado */}
          <div className="block lg:hidden">
            <div className="flex flex-col items-center justify-center">
              {/* Título y subtítulo centrados */}
              <div className="text-center w-full mb-4">
                <h1 className="text-3xl font-bold text-mc-dark leading-tight mb-4">
                  MC Fletes y Mudanzas - Asunción Paraguay Servicio Profesional 24hs
                </h1>
                
                <p className="text-base text-gray-600 mb-6 px-4">
                  Empresa líder en fletes económicos y mudanzas seguras en Asunción Paraguay. Transporte profesional para hogares y empresas.
                </p>
              
                {/* Botones centrados y apilados */}
                <div className="flex flex-col gap-3 px-4 mb-8">
                  <Link 
                    to="/servicios" 
                    className="bg-mc-primary text-white font-medium px-6 py-3 rounded-full hover:bg-mc-secondary transition-colors duration-300 flex items-center justify-center"
                  >
                    Nuestros Servicios
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                  <Link 
                    to="/contacto" 
                    className="bg-white text-mc-primary font-medium px-6 py-3 rounded-full border border-mc-primary hover:bg-mc-accent transition-colors duration-300 text-center"
                  >
                    Contáctenos
                  </Link>
                </div>
              </div>
              
              {/* Imagen centrada en móvil */}
              <div className="relative w-full max-w-xs mx-auto">
                <div className="rounded-xl overflow-hidden shadow-xl h-[300px]">
                  <ImageCarousel />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 max-w-[160px]">
                  <div className="flex items-center mb-1">
                    <div className="w-7 h-7 rounded-full bg-mc-primary flex items-center justify-center">
                      <ShieldCheck size={14} className="text-white" />
                    </div>
                    <span className="ml-2 font-bold text-sm text-mc-dark">100% Seguro</span>
                  </div>
                  <p className="text-xs text-gray-600">Fletes protegido para todos sus bienes</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop View - Grid layout */}
          <div className="hidden lg:block">
            <div className="mx-auto" style={{ maxWidth: '1100px' }}>
              <div className="grid grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <ScrollReveal direction="left" className="mb-4">
                    <h1 className="text-5xl font-bold text-mc-dark leading-tight">
                      MC Fletes y Mudanzas - Asunción Paraguay Servicio Profesional 24hs
                    </h1>
                  </ScrollReveal>
                  
                  <ScrollReveal direction="left" delay={200} className="mb-6">
                    <p className="text-lg text-gray-600">
                      Empresa líder en fletes económicos y mudanzas seguras en Asunción Paraguay. Transporte profesional para hogares y empresas.
                    </p>
                  </ScrollReveal>
                  
                  <ScrollReveal direction="left" delay={400}>
                    <div className="flex flex-row items-center justify-start gap-4">
                      <Link 
                        to="/servicios" 
                        className="bg-mc-primary text-white font-medium px-6 py-3 rounded-full hover:bg-mc-secondary transition-colors duration-300 flex items-center justify-center"
                      >
                        Nuestros Servicios
                        <ArrowRight size={18} className="ml-2" />
                      </Link>
                      <Link 
                        to="/contacto" 
                        className="bg-white text-mc-primary font-medium px-6 py-3 rounded-full border border-mc-primary hover:bg-mc-accent transition-colors duration-300 text-center"
                      >
                        Contáctenos
                      </Link>
                    </div>
                  </ScrollReveal>
                </div>
                
                <ScrollReveal direction="right" delay={300} className="flex justify-center">
                  <div className="relative max-w-md mx-auto">
                    <div className="rounded-xl overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02] h-[400px]">
                      <ImageCarousel />
                    </div>
                    
                    {/* Floating badge */}
                    <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 max-w-[160px]">
                      <div className="flex items-center mb-1">
                        <div className="w-7 h-7 rounded-full bg-mc-primary flex items-center justify-center">
                          <ShieldCheck size={14} className="text-white" />
                        </div>
                        <span className="ml-2 font-bold text-sm text-mc-dark">100% Seguro</span>
                      </div>
                      <p className="text-xs text-gray-600">Fletes protegido para todos sus bienes</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-[5%] w-32 h-32 bg-mc-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-[10%] w-48 h-48 bg-mc-primary/5 rounded-full blur-3xl"></div>
      </section>
      
      {/* Features Section */}
      <section className="pb-16 md:pb-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-mc-dark mb-4">
                ¿Por Qué Elegir <span className="text-mc-primary">MC Fletes Y Mudanzas</span>?
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Líderes en fletes económicos y mudanzas seguras en Paraguay. Más de 10 años ofreciendo transporte profesional en Asunción y todo el país.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white rounded-xl p-5 shadow-md hover-lift h-full">
                <div className="w-12 h-12 bg-mc-accent rounded-full flex items-center justify-center mb-4">
                  <Truck size={20} className="text-mc-primary" />
                </div>
                <h3 className="text-lg font-bold text-mc-dark mb-2">Flota Moderna</h3>
                <p className="text-sm text-gray-600">
                  Contamos con una flota de vehículos modernos y seguros para garantizar el mejor servicio.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={300}>
              <div className="bg-white rounded-xl p-5 shadow-md hover-lift h-full">
                <div className="w-12 h-12 bg-mc-accent rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck size={20} className="text-mc-primary" />
                </div>
                <h3 className="text-lg font-bold text-mc-dark mb-2">Seguridad y Puntualidad</h3>
                <p className="text-sm text-gray-600">
                  Nos comprometemos a ofrecer un servicio seguro y puntual. Cumplimos con los plazos establecidos y garantizamos la protección de tus pertenencias durante el transporte.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={400}>
              <div className="bg-white rounded-xl p-5 shadow-md hover-lift h-full">
                <div className="w-12 h-12 bg-mc-accent rounded-full flex items-center justify-center mb-4">
                  <Award size={20} className="text-mc-primary" />
                </div>
                <h3 className="text-lg font-bold text-mc-dark mb-2">Experiencia</h3>
                <p className="text-sm text-gray-600">
                  Más de 10 años de experiencia en el sector de transporte y logística.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={500}>
              <div className="bg-white rounded-xl p-5 shadow-md hover-lift h-full">
                <div className="w-12 h-12 bg-mc-accent rounded-full flex items-center justify-center mb-4">
                  <DollarSign size={20} className="text-mc-primary" />
                </div>
                <h3 className="text-lg font-bold text-mc-dark mb-2">Servicio Económico</h3>
                <p className="text-sm text-gray-600">
                  Ofrecemos fletes y mudanzas a precios accesibles en Paraguay. Nuestras tarifas competitivas no comprometen la calidad del servicio.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Services Preview */}
      <section className="pb-16 md:pb-20 bg-gray-50">
        <Helmet>
          <title>Servicios de Fletes y Mudanzas Económicas</title>
          <meta name="description" content="Ofrecemos servicios de fletes y mudanzas, transporte económico y confiable en Paraguay. Cotización gratuita y tarifas competitivas para tus necesidades de mudanza." />
          <meta name="keywords" content="fletes, mudanzas, transporte económico, servicios de mudanza, tarifas competitivas, cotización gratuita, entrega a domicilio" />
        </Helmet>
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-mc-dark mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Soluciones completas de Fletes y mudanza adaptadas a sus necesidades específicas.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredServices.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index} 
              />
            ))}
          </div>
          
          <ScrollReveal delay={400}>
            <div className="text-center mt-10">
              <Link 
                to="/servicios" 
                className="inline-flex items-center text-mc-primary hover:text-mc-secondary font-medium transition-colors duration-200"
              >
                <span>Ver todos los servicios</span>
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA />
    </>
  );
};

export default Index;