
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Home, Building2, Truck, Package, Warehouse, Globe, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Service } from '@/assets/data';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // For reveal animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, index * 100); // Staggered animation
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);
  
  const getIcon = (iconName: string): LucideIcon => {
    switch (iconName) {
      case 'home': return Home;
      case 'building-2': return Building2;
      case 'truck': return Truck;
      case 'package': return Package;
      case 'warehouse': return Warehouse;
      case 'globe': return Globe;
      default: return Truck;
    }
  };
  
  const Icon = getIcon(service.icon);
  
  return (
    <div
      ref={cardRef}
      id={service.id}
      className={cn(
        "group relative overflow-hidden rounded-xl shadow-md hover-lift reveal",
        index % 2 === 0 ? "reveal data-direction='left'" : "reveal data-direction='right'"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`/servicios#${service.id}`)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
      
      <div 
        className="h-72 bg-cover bg-center transition-transform duration-700 ease-in-out"
        style={{ 
          backgroundImage: `url(${service.image})`,
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      ></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-500 ease-in-out"
           style={{ transform: isHovered ? 'translateY(-8px)' : 'translateY(0)' }}>
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-mc-primary text-white">
            <Icon size={20} />
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
        <p className={cn(
          "text-white/80 mb-4 line-clamp-2 transition-all duration-500",
          isHovered ? "line-clamp-none" : ""
        )}>
          {service.description}
        </p>
        <div className={cn(
          "inline-flex items-center text-white font-medium group-hover:text-mc-primary transition-colors duration-300",
          "transform transition-transform duration-300",
          isHovered ? "translate-x-2" : ""
        )}>
          <span>Ver más</span>
          <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
