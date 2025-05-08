
import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: 
    | 'fade-in' 
    | 'fade-in-up' 
    | 'fade-in-down'
    | 'fade-in-left'
    | 'fade-in-right'
    | 'zoom-in'
    | 'rotate-in'
    | 'slide-in';
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
}

const ScrollReveal = ({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
  duration = 600,
  once = true,
  threshold = 0.1,
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    const currentElement = elementRef.current;

    if (!currentElement) return;

    // Initially hide the element
    currentElement.style.opacity = '0';
    
    // Set initial transforms based on animation type
    switch (animation) {
      case 'fade-in-up':
        currentElement.style.transform = 'translateY(30px)';
        break;
      case 'fade-in-down':
        currentElement.style.transform = 'translateY(-30px)';
        break;
      case 'fade-in-left':
        currentElement.style.transform = 'translateX(-30px)';
        break;
      case 'fade-in-right':
        currentElement.style.transform = 'translateX(30px)';
        break;
      case 'zoom-in':
        currentElement.style.transform = 'scale(0.9)';
        break;
      case 'rotate-in':
        currentElement.style.transform = 'rotate(-5deg) scale(0.95)';
        break;
      case 'slide-in':
        currentElement.style.transform = 'translateX(50px)';
        currentElement.style.opacity = '0.2';
        break;
      default:
        break;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Skip if element has already animated and 'once' is true
          if (once && hasAnimated.current) return;
          
          if (entry.isIntersecting) {
            // When element comes into view, apply animation after delay
            setTimeout(() => {
              if (currentElement) {
                currentElement.style.transition = `opacity ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1), transform ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
                currentElement.style.opacity = '1';
                currentElement.style.transform = 'translateY(0) translateX(0) scale(1) rotate(0)';
                
                hasAnimated.current = true;
                
                // If animation should only occur once, disconnect observer
                if (once) {
                  observer.disconnect();
                }
              }
            }, delay);
          } else if (!once && hasAnimated.current) {
            // Reset the animation when element leaves viewport if once is false
            currentElement.style.opacity = '0';
            
            // Reset transform based on animation type
            switch (animation) {
              case 'fade-in-up':
                currentElement.style.transform = 'translateY(30px)';
                break;
              case 'fade-in-down':
                currentElement.style.transform = 'translateY(-30px)';
                break;
              case 'fade-in-left':
                currentElement.style.transform = 'translateX(-30px)';
                break;
              case 'fade-in-right':
                currentElement.style.transform = 'translateX(30px)';
                break;
              case 'zoom-in':
                currentElement.style.transform = 'scale(0.9)';
                break;
              case 'rotate-in':
                currentElement.style.transform = 'rotate(-5deg) scale(0.95)';
                break;
              case 'slide-in':
                currentElement.style.transform = 'translateX(50px)';
                currentElement.style.opacity = '0.2';
                break;
              default:
                break;
            }
            
            hasAnimated.current = false;
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -100px 0px', // Adjust when animation triggers
      }
    );

    observer.observe(currentElement);
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [animation, delay, duration, once, threshold]);

  return (
    <div
      ref={elementRef}
      className={`${className}`}
      style={{ opacity: 0, willChange: 'opacity, transform' }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
