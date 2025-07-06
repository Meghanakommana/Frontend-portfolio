'use client';

import React from 'react';

const services = [
  {
    title: 'Anxiety & Stress Management',
    description:
      'Learn practical strategies to calm your mind, reduce overwhelm, and build lasting resilience. Dr. Blake uses CBT and mindfulness to help you manage anxiety with confidence.',
    image:
      'https://communitycare.com/wp-content/uploads/2022/01/Stress-Awareness-Month-Blog-1200x600-1-1024x512.png',
  },
  {
    title: 'Relationship Counseling',
    description:
      'Whether you’re navigating conflict or want to deepen connection, therapy can help. Dr. Blake supports couples and individuals in building healthy, satisfying relationships.',
    image:
      'https://mantracare.org/wp-content/uploads/2023/04/Find-A-Relationship-Counsellor.jpg',
  },
  {
    title: 'Trauma Recovery',
    description:
      'Heal from past experiences in a safe, supportive environment. Dr. Blake uses trauma-informed care to help you move forward with strength and self-compassion.',
    image:
      'https://another-light.com/media/post_headers/Trauma_counselling_Therapy-ALC.jpg',
  },
];

const Services = () => {
  return (
    <section id="Services" className="py-20 px-6 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-14">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition">
              <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
