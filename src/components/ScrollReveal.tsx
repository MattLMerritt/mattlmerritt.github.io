'use client';

import { useEffect } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollReveal({ children, className = '' }: ScrollRevealProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return <div className={`reveal ${className}`}>{children}</div>;
}
