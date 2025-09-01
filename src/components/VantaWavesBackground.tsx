'use client';

import { useEffect } from 'react';
import { Vanta } from '@/types';
export function VantaNetBackground() {
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
        script.async = false;
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    const initVanta = async () => {
      try {
        // Load Three.js first
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.min.js');
        
        // Then load Vanta net
        await loadScript('https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.net.min.js');
        
        // Wait a bit for scripts to be ready
        setTimeout(() => {
          const setVanta = () => {
            if (window.THREE && window.VANTA?.NET) {
              try {
                window.VANTA.NET({
                  el: "#vanta-bg",
                  mouseControls: true,
                  touchControls: true,
                  gyroControls: false,
                  minHeight: 200.00,
                  minWidth: 200.00,
                  scale: 1.00,
                  scaleMobile: 1.00,
                  color: 0x3b82f6,
                  backgroundColor: 0x0f172a,
                  points: 10.00,
                  maxDistance: 20.00,
                  spacing: 15.00
                });
                console.log('Vanta net initialized successfully');
              } catch (error) {
                console.error('Error initializing Vanta net:', error);
              }
            }
          };
          
          setVanta();
        }, 200);
      } catch (error) {
        console.error('Error loading Vanta scripts:', error);
      }
    };

    initVanta();
  }, []);

  return (
    <div
      id="vanta-bg"
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1,
        backgroundColor: '#020617'
      }}
    />
  );
}

// Extend Window interface to include THREE and VANTA
declare global {
  interface Window {
    THREE: unknown;
    VANTA: Vanta;
  }
}
