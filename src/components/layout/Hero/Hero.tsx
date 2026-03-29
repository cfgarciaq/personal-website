import React, { useRef, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const boundsRef = useRef<{ left: number; top: number; width: number; height: number }>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!heroRef.current) return;

    const updateBounds = () => {
      if (heroRef.current) {
        boundsRef.current = heroRef.current.getBoundingClientRect();
      }
    };

    const observer = new ResizeObserver(updateBounds);
    observer.observe(heroRef.current);
    updateBounds();

    window.addEventListener('scroll', updateBounds);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateBounds);
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { left, top, width, height } = boundsRef.current;
    if (width === 0 || height === 0) return;

    const x = e.clientX - left;
    const y = e.clientY - top;

    requestAnimationFrame(() => {
      if (heroRef.current) {
        heroRef.current.style.setProperty('--mouse-x', `${x}px`);
        heroRef.current.style.setProperty('--mouse-y', `${y}px`);
      }
    });
  }, []);

  return (
    <section 
      className="hero" 
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      <div className="hero-bg-gradient"></div>
      <div className="hero-container">
        <h1 className="hero-title">
          Carlos <span className="text-gradient">García</span>
        </h1>
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        <a href="#projects" className="hero-button">
          {t('hero.cta')}
        </a>
      </div>
    </section>
  );
};

export default Hero;
