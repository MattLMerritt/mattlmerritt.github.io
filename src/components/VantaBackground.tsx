'use client';

import { useEffect, useRef } from 'react';

interface VantaBackgroundProps {
  children: React.ReactNode;
}

// Extend Window interface to include VANTA
declare global {
  interface Window {
    VANTA: any;
  }
}

export function VantaBackground({ children }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    // Function to load scripts dynamically
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    // Initialize Vanta effect
    const setVanta = () => {
      if (window.VANTA && window.VANTA.TOPOLOGY && vantaRef.current && !vantaEffect.current) {
        try {
          vantaEffect.current = window.VANTA.TOPOLOGY({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x4e7c96,
            backgroundColor: 0x020617
          });
          console.log('Vanta topology effect initialized');
        } catch (error) {
          console.error('Error initializing Vanta effect:', error);
        }
      }
    };

    // Load scripts and initialize
    const initVanta = async () => {
      try {
        // Load p5.js version 1.1.9 (as recommended by Vanta.js docs)
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js');
        
        // Load Vanta topology
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js');
        
        // Wait a bit for scripts to be ready
        setTimeout(setVanta, 100);
      } catch (error) {
        console.error('Error loading Vanta scripts:', error);
      }
    };

    initVanta();

    // Cleanup function
    return () => {
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (error) {
          console.error('Error destroying Vanta effect:', error);
        }
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Vanta background container */}
      <div
        ref={vantaRef}
        className="fixed inset-0 z-0"
        style={{ backgroundColor: '#020617' }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
