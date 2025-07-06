'use client';

import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold ">🏢 Contact & Office Info</h2>

        {/* 2x2 Grid Layout - Left aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 text-lg text-left">
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-xl mb-2">📍 Location</h3>
            <p>1287 Maplewood Drive,</p>
            <p>Los Angeles, CA 90026</p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-xl mb-2">📞 Contact</h3>
            <p>Phone: (323) 555-0192</p>
            <p>
              Email:{' '}
              <a
                href="mailto:serena@blakepsychology.com"
                className="underline text-teal-400 hover:text-teal-300"
              >
                serena@blakepsychology.com
              </a>
            </p>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold text-xl mb-2">🕒 Office Hours</h3>
            <p>In-person: Tue & Thu, 10 AM–6 PM</p>
            <p>Virtual: Mon, Wed & Fri, 1 PM–5 PM</p>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-semibold text-xl mb-2">💼 Experience</h3>
            <p>8 years of practice</p>
            <p>500+ client sessions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
