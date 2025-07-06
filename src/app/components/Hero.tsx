'use client';

import React from 'react';
import Link from 'next/link';


const Hero = () => {
  return (
    <section id="Hero" className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white px-6"
     style={{
      backgroundImage: "url(images/13153.jpg)"
    }}>
      <div className="bg-black/6 backdrop-blur-md border border-black/20 p-10 rounded-xl text-center max-w-2xl shadow-xl transition-all duration-300 ease-in-out
">
        <h1 className="text-4xl text-black md:text-5xl font-bold mb-4">Dr. Serena Blake, PsyD</h1>
        <h2 className="text-lg text-black md:text-xl mb-6">
          Compassionate therapy for anxiety, relationships & trauma.
        </h2>
        <Link href="/consult" className="inline-block bg-teal-400 hover:bg-teal-500 text-black font-semibold px-6 py-3 rounded-full transition">
          Book a Free Consult
        </Link>
      </div>
    </section>
  );
};

export default Hero;
