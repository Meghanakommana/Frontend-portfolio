'use client';

import React from 'react';

const About = () => {
  return (
    <section id="About" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-12 bg-gray-100 p-8 rounded-xl shadow-lg">
        
        {/* Image */}
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-md border-2 border-black-200 flex-shrink-0">
          <img
            src="images/SereneBlake.jpg"
            alt="Dr. Serena Blake"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Dr. Serena Blake</h2>
          <p className="text-lg leading-relaxed">
            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA,
            with eight years of experience and over 500 client sessions. She blends evidence-based
            approaches—like cognitive-behavioral therapy and mindfulness—with compassionate,
            personalized care to help you overcome anxiety, strengthen relationships, and heal from
            trauma.
          </p>
          <p className="text-lg mt-4 leading-relaxed">
            Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is
            committed to creating a safe, supportive space for you to thrive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
