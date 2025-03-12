
import { Award, Users, Target, Clock } from "lucide-react";
import { companyInfo } from "@/assets/data";
import CTA from "@/components/CTA";
import ScrollReveal from "@/components/ScrollReveal";

const Nosotros = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-mc-accent to-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-mc-dark mb-6">
                Sobre Nosotros
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Conozca más sobre nuestra empresa y por qué somos líderes en servicios de Fletes y mudanzas en Paraguay.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* About Section */}
      <section className="pt-10 pb-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/src/assets/MC-equipo.jpeg" 
                    alt="MC Fletes equipo" 
                    className="w-full h-auto object-cover"
                  />
                </div>
               {/*div className="absolute -bottom-8 -right-8 bg-mc-primary text-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold">{companyInfo.founded}</div>
                  <div className="text-sm uppercase tracking-wider">Fundado</div>
                </div>*/}
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="lg:pl-8">
                <div className="inline-block px-4 py-1 bg-mc-accent text-mc-primary font-medium rounded-full mb-4">
                  Nuestra Historia
                </div>
                <h2 className="text-3xl font-bold text-mc-dark mb-6">
                  {companyInfo.name}
                </h2>
                <p className="text-gray-600 mb-6">
                  {companyInfo.description}
                </p>
                <p className="text-gray-600 mb-6">
                  Desde nuestra fundación{/* en companyInfo.founded*/}, hemos estado comprometidos con brindar soluciones de Fletes y mudanzas que superan las expectativas de nuestros clientes. Nuestra experiencia en el sector nos ha permitido perfeccionar nuestros procesos y ofrecer un servicio cada vez más eficiente y de mayor calidad.
                </p>
                <p className="text-gray-600">
                  Contamos con un equipo altamente capacitado y una flota moderna, preparada para hacer frente a cualquier desafío de Fletes, desde pequeñas mudanzas residenciales hasta grandes proyectos logísticos para empresas.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="pb-20 bg-mc-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal direction="up" delay={100}>
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">+100</div>
                <div className="text-xl font-medium">Mudanzas Realizadas</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={200}>
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">+80</div>
                <div className="text-xl font-medium">Clientes Satisfechos</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={300}>
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">5</div>
                <div className="text-xl font-medium">Vehículos Especializados</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={400}>
              <div className="text-center">
                <div className="text-5xl font-bold mb-3">24/7</div>
                <div className="text-xl font-medium">Atención al Cliente</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="pt-10 pb-20 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-4 py-1 bg-mc-accent text-mc-primary font-medium rounded-full mb-4">
                Nuestros Valores
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-mc-dark mb-4">
                Los Principios que Nos Guían
              </h2>
              <p className="text-gray-600 text-lg">
                Estos valores fundamentales definen quiénes somos y cómo trabajamos cada día.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyInfo.values.map((value, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
                <div className="bg-white rounded-xl p-8 shadow-md hover-lift flex">
                  <div className="mr-6">
                    {index === 0 && <Award size={36} className="text-mc-primary" />}
                    {index === 1 && <Users size={36} className="text-mc-primary" />}
                    {index === 2 && <Target size={36} className="text-mc-primary" />}
                    {index === 3 && <Clock size={36} className="text-mc-primary" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-mc-dark mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      
      
      {/* Team Section 
      <section className="py-20 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-block px-4 py-1 bg-mc-accent text-mc-primary font-medium rounded-full mb-4">
                Nuestro Equipo
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-mc-dark mb-4">
                Profesionales Dedicados
              </h2>
              <p className="text-gray-600 text-lg">
                Contamos con un equipo de profesionales altamente capacitados y comprometidos con ofrecer un servicio excelente.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover-lift">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="/src/assets/team-1.jpg" 
                    alt="Director General" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-mc-dark mb-1">Carlos Rodríguez</h3>
                  <p className="text-mc-primary font-medium mb-4">Director General</p>
                  <p className="text-gray-600">
                    Con más de 15 años de experiencia en el sector logístico, lidera nuestro equipo con visión y dedicación.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover-lift">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="/src/assets/team-2.jpg" 
                    alt="Gerente de Operaciones" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-mc-dark mb-1">Laura Martínez</h3>
                  <p className="text-mc-primary font-medium mb-4">Gerente de Operaciones</p>
                  <p className="text-gray-600">
                    Coordina todas nuestras operaciones, asegurando que cada servicio cumpla con los más altos estándares de calidad.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={300}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover-lift">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src="/src/assets/team-3.jpg" 
                    alt="Líder de Logística" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-mc-dark mb-1">Roberto Pérez</h3>
                  <p className="text-mc-primary font-medium mb-4">Líder de Logística</p>
                  <p className="text-gray-600">
                    Especialista en planificación de rutas y optimización de recursos para garantizar entregas puntuales.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>*/}
      


      
      {/* CTA Section */}
      <CTA title="¿Quiere conocer más sobre nosotros?" subtitle="Contáctenos hoy mismo para hablar sobre sus necesidades de Fletes" />
    </>
  );
};

export default Nosotros;
