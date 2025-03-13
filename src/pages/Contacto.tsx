// Contacto.tsx responsivo
import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Send, AlertCircle, Clock} from "lucide-react";
import { contactInfo, faqs } from "@/assets/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import ScrollReveal from "@/components/ScrollReveal";

const Contacto = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };
  
  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = "El nombre es requerido";
    }
    
    if (!formData.email.trim()) {
      errors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Email inválido";
    }
    
    if (!formData.phone.trim()) {
      errors.phone = "El teléfono es requerido";
    }
    
    if (!formData.service.trim()) {
      errors.service = "Por favor seleccione un servicio";
    }
    
    if (!formData.message.trim()) {
      errors.message = "El mensaje es requerido";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "¡Formulario enviado!",
      description: "Nos pondremos en contacto con usted a la brevedad.",
      duration: 5000,
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    
    setIsSubmitting(false);
  };
  
  // WhatsApp link
  const whatsappLink = `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Hola!. Vengo del sitio web y quiesiera una cotización del servicio que necesito")}`;
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-mc-accent to-white">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-mc-dark mb-4 md:mb-6">
                Contáctenos
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                Estamos aquí para responder a todas sus consultas y ofrecerle un presupuesto personalizado para sus necesidades.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Contact Info & Form Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
            {/* Contact Info */}
            <ScrollReveal direction="down">
              <div className="bg-mc-accent rounded-xl p-6 md:p-8 shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold text-mc-dark mb-6 md:mb-10 text-center">Información de Contacto</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8 md:gap-x-16 max-w-4xl mx-auto">
                  {/* Teléfono */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-mc-primary flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mc-dark mb-1">Teléfono</h3>
                      <p className="text-gray-600 mb-1">{contactInfo.phone}</p>
                      <a 
                        href={whatsappLink} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-mc-primary hover:text-mc-secondary font-medium inline-flex items-center"
                      >
                        <span>Contactar por WhatsApp</span>
                        <Send size={14} className="ml-2" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-mc-primary flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mc-dark mb-1">Email</h3>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="text-gray-600 hover:text-mc-primary transition-colors duration-200"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  {/* Ubicación */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-mc-primary flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mc-dark mb-1">Ubicación</h3>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>
                  
                  {/* Horario */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-mc-primary flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-mc-dark mb-1">Horario de atención</h3>
                      <p className="text-gray-600">24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="pb-20 md:pb-40 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-mc-dark mb-3 md:mb-4">
                Nuestra Ubicación
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Estamos ubicados en una zona estratégica para brindarle un mejor servicio.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115872.99258374562!2d-57.70334229668647!3d-25.28934944900352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da8fc27584a9d%3A0xefa3149ac5777af8!2sAsunci%C3%B3n%2C%20Paraguay!5e0!3m2!1ses-419!2s!4v1721335248097!5m2!1ses-419!2s" 
                width="100%" 
                height="350"
                className="md:h-[450px]" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="pb-16 md:pb-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-mc-dark mb-3 md:mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Aquí respondemos algunas de las preguntas más comunes sobre nuestros servicios.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} direction={window.innerWidth >= 768 ? (index % 2 === 0 ? "left" : "right") : "up"} delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-5 md:p-6 hover-lift">
                  <h3 className="text-base md:text-lg font-semibold text-mc-dark mb-2 md:mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={400}>
            <div className="text-center mt-10 md:mt-12">
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                ¿No encontró respuesta a su pregunta?
              </p>
              <Link 
                to={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-mc-primary text-white font-medium px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-mc-secondary transition-colors duration-300 text-sm md:text-base"
              >
                <Phone size={16} className="mr-2" />
                <span>Contáctenos por WhatsApp</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Contacto;