
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-mc-accent to-white">
        <div className="container-custom">
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-mc-dark mb-6">
                Contáctenos
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Estamos aquí para responder a todas sus consultas y ofrecerle un presupuesto personalizado para sus necesidades.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Contact Info & Form Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
            {/* Contact Info */}
            <ScrollReveal direction="down">
  <div className="bg-mc-accent rounded-xl p-8 shadow-lg">
    <h2 className="text-2xl font-bold text-mc-dark mb-10 text-center">Información de Contacto</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto">
      {/* Teléfono */}
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-mc-primary flex items-center justify-center mr-4 flex-shrink-0">
          <Phone size={20} className="text-white" />
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
            <Send size={16} className="ml-2" />
          </a>
        </div>
      </div>
      
      {/* Email */}
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-mc-primary flex items-center justify-center mr-4 flex-shrink-0">
          <Mail size={20} className="text-white" />
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
        <div className="w-12 h-12 rounded-full bg-mc-primary flex items-center justify-center mr-4 flex-shrink-0">
          <MapPin size={20} className="text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-mc-dark mb-1">Ubicación</h3>
          <p className="text-gray-600">{contactInfo.address}</p>
        </div>
      </div>
      
      {/* Horario */}
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-mc-primary flex items-center justify-center mr-4 flex-shrink-0">
          <Clock size={20} className="text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-mc-dark mb-1">Horario de atención</h3>
          <p className="text-gray-600">24/7</p>
        </div>
      </div>
    </div>
  </div>
</ScrollReveal>

            

            {/* Contact Form 
            <ScrollReveal direction="right">
            <div className="bg-mc-accent rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-mc-dark mb-8">Horario de Atención</h2>
                  <div className="mt-12">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Lunes - Viernes:</span>
                          <span className="font-medium text-mc-dark">8:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sábados:</span>
                          <span className="font-medium text-mc-dark">8:00 - 13:00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Domingos:</span>
                          <span className="font-medium text-mc-dark">Cerrado</span>
                        </div>
                      </div>
                    </div>
                </div>
            </ScrollReveal> 


            <ScrollReveal direction="right">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-mc-dark mb-8">Envíenos un Mensaje</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre Completo
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={formErrors.name ? "border-red-500" : ""}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle size={14} className="mr-1" /> {formErrors.name}
                      </p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={formErrors.email ? "border-red-500" : ""}
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertCircle size={14} className="mr-1" /> {formErrors.email}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={formErrors.phone ? "border-red-500" : ""}
                      />
                      {formErrors.phone && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertCircle size={14} className="mr-1" /> {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Servicio de Interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full rounded-md border ${formErrors.service ? "border-red-500" : "border-gray-300"} px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-mc-primary`}
                    >
                      <option value="">Seleccione un servicio</option>
                      <option value="mudanzas">Mudanzas Residenciales</option>
                      <option value="Fletes-comercial">Fletes Comercial</option>
                      <option value="logistica">Logística y Distribución</option>
                      <option value="embalaje">Embalaje Profesional</option>
                      <option value="almacenamiento">Almacenamiento Temporal</option>
                      <option value="internacional">Mudanzas Internacionales</option>
                    </select>
                    {formErrors.service && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle size={14} className="mr-1" /> {formErrors.service}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={formErrors.message ? "border-red-500" : ""}
                    />
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <AlertCircle size={14} className="mr-1" /> {formErrors.message}
                      </p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-mc-primary hover:bg-mc-secondary text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </div>
            </ScrollReveal>*/}
        </div>
      </section>
      
      {/* Map Section */}
      <section className="pb-40 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-mc-dark mb-4">
                Nuestra Ubicación
              </h2>
              <p className="text-gray-600">
                Estamos ubicados en una zona estratégica para brindarle un mejor servicio.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115872.99258374562!2d-57.70334229668647!3d-25.28934944900352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da8fc27584a9d%3A0xefa3149ac5777af8!2sAsunci%C3%B3n%2C%20Paraguay!5e0!3m2!1ses-419!2s!4v1721335248097!5m2!1ses-419!2s" 
                width="100%" 
                height="450" 
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
      <section className="pb-20 bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-mc-dark mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-gray-600">
                Aquí respondemos algunas de las preguntas más comunes sobre nuestros servicios.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
                <div className="bg-gray-50 rounded-xl p-6 hover-lift">
                  <h3 className="text-lg font-semibold text-mc-dark mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={400}>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                ¿No encontró respuesta a su pregunta?
              </p>
              <Link 
                to={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-mc-primary text-white font-medium px-6 py-3 rounded-full hover:bg-mc-secondary transition-colors duration-300"
              >
                <Phone size={18} className="mr-2" />
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
