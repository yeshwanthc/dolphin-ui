"use client"
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  { title: 'Consultation', description: 'We start with a free consultation to understand your needs and preferences.' },
  { title: 'Design', description: 'Our designers create a custom plan tailored to your space.' },
  { title: 'Build', description: 'Our team builds your cabinetry to the highest standards.' },
  { title: 'Installation', description: 'We install the cabinets with precision and care.' },
];

const OurProcess = () => {
  useEffect(() => {
    gsap.utils.toArray('.process-card').forEach((card: unknown, index: number) => {
      const element = card as HTMLElement;
      gsap.fromTo(element, 
        { opacity: 0, y: 100 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          ease: 'power3.out', 
          scrollTrigger: {
            trigger: element,
            start: 'top 75%', 
            toggleActions: 'play none none reverse',
          },
        });
    });
  }, []);

  return (
    <section className="our-process-container container py-12 bg-white">
      <h2 className="text-center text-4xl font-bold mb-10">Our Process</h2>
      <div className="process-cards-container relative max-w-5xl mx-auto">
        {processSteps.map((step, index) => (
          <div 
            key={index} 
            className={`process-card bg-white p-6 rounded-lg shadow-lg relative transition-transform duration-300 ease-in-out`} 
            style={{ 
              top: `${index * 10}px`, 
              zIndex: processSteps.length - index 
            }}
          >
            <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
            <span className="card-number absolute top-0 left-0 text-6xl font-bold text-gray-200">
              {index + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
