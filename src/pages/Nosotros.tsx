// Nosotros.tsx responsivo
import { Award, Users, Target, Clock } from "lucide-react";
import { companyInfo } from "@/assets/data";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ScrollReveal";

const Nosotros = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-mc-accent to-white">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mc-dark mb-4 md:mb-6">
                Sobre Nosotros
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                Conozca más sobre nuestra empresa y por qué somos líderes en servicios de Fletes y mudanzas en Paraguay.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* About Section */}
      <section className="pt-6 md:pt-10 pb-16 md:pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/src/assets/MC-equipo.jpeg" 
                    alt="MC Fletes equipo" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="lg:pl-4 xl:pl-8">
                <div className="inline-block px-3 py-1 bg-mc-accent text-mc-primary font-medium rounded-full text-sm mb-3 md:mb-4">
                  Nuestra Historia
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-mc-dark mb-4 md:mb-6">
                  {companyInfo.name}
                </h2>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  {companyInfo.description}
                </p>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                  Desde nuestra fundación, hemos estado comprometidos con brindar soluciones de Fletes y mudanzas que superan las expectativas de nuestros clientes. Nuestra experiencia en el sector nos ha permitido perfeccionar nuestros procesos y ofrecer un servicio cada vez más eficiente y de mayor calidad.
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  Contamos con un equipo altamente capacitado y una flota moderna, preparada para hacer frente a cualquier desafío de Fletes, desde pequeñas mudanzas residenciales hasta grandes proyectos logísticos para empresas.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 md:pb-20 bg-mc-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <ScrollReveal direction="up" delay={100}>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold mb-2 md:mb-3">+100</div>
                <div className="text-sm md:text-xl font-medium">Mudanzas Realizadas</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={200}>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold mb-2 md:mb-3">+80</div>
                <div className="text-sm md:text-xl font-medium">Clientes Satisfechos</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={300}>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold mb-2 md:mb-3">5</div>
                <div className="text-sm md:text-xl font-medium">Vehículos Especializados</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={400}>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-bold mb-2 md:mb-3">24/7</div>
                <div className="text-sm md:text-xl font-medium">Atención al Cliente</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="pt-6 md:pt-10 pb-16 md:pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
              <div className="inline-block px-3 py-1 bg-mc-accent text-mc-primary font-medium rounded-full text-sm mb-3 md:mb-4">
                Nuestros Valores
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-mc-dark mb-3 md:mb-4">
                Los Principios que Nos Guían
              </h2>
              <p className="text-sm md:text-lg text-gray-600">
                Estos valores fundamentales definen quiénes somos y cómo trabajamos cada día.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {companyInfo.values.map((value, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
                <div className="bg-white rounded-xl p-5 md:p-8 shadow-md hover-lift flex">
                  <div className="mr-4 md:mr-6">
                    {index === 0 && <Award size={28} className="text-mc-primary" />}
                    {index === 1 && <Users size={28} className="text-mc-primary" />}
                    {index === 2 && <Target size={28} className="text-mc-primary" />}
                    {index === 3 && <Clock size={28} className="text-mc-primary" />}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-mc-dark mb-2 md:mb-3">{value.title}</h3>
                    <p className="text-sm md:text-base text-gray-600">{value.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTA title="¿Quiere conocer más sobre nosotros?" subtitle="Contáctenos hoy mismo para hablar sobre sus necesidades de Fletes" />
    </>
  );
};

export default Nosotros;
