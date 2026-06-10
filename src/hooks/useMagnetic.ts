import { useEffect } from 'react';
import gsap from 'gsap';

export default function useMagnetic() {
  useEffect(() => {
    const elements = document.querySelectorAll('.magnetic');
    const cleanups: (() => void)[] = [];

    elements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      
      const handleMouseMove = (e: MouseEvent) => {
        const rect = htmlEl.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(htmlEl, {
          x: x * 0.35,
          y: y * 0.35,
          duration: 0.3,
          ease: 'power2.out',
        });
      };
      
      const handleMouseLeave = () => {
        gsap.to(htmlEl, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1.1, 0.4)',
        });
      };
      
      htmlEl.addEventListener('mousemove', handleMouseMove);
      htmlEl.addEventListener('mouseleave', handleMouseLeave);
      
      cleanups.push(() => {
        htmlEl.removeEventListener('mousemove', handleMouseMove);
        htmlEl.removeEventListener('mouseleave', handleMouseLeave);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);
}
