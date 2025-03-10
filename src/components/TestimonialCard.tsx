
import { useRef, useEffect } from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
}

const TestimonialCard = ({ name, role, content, avatar, index }: TestimonialProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // For reveal animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('active');
          }, index * 150); // Staggered animation
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

  return (
    <div 
      ref={cardRef} 
      className="bg-white rounded-xl shadow-md p-6 hover-lift reveal data-direction='up'"
    >
      <div className="relative">
        <Quote className="absolute top-0 left-0 text-mc-primary opacity-20" size={40} />
        <div className="pt-8">
          <p className="text-gray-700 leading-relaxed mb-6">{content}</p>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
              <img src={avatar} alt={name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-semibold text-mc-dark">{name}</h4>
              <p className="text-sm text-gray-500">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
