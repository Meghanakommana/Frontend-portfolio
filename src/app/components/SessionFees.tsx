'use client';

import Link from 'next/link';

export default function SessionFees() {
  return (
    <section id="fees" className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">💰 Session Fees</h2>
        <p className="text-lg text-gray-600 mb-10">
          Flexible, compassionate care that meets your needs and respects your time.
        </p>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <Link href="/consult" className="h-full">
            <div className="bg-teal-50 hover:bg-teal-100 cursor-pointer transition p-6 rounded-xl shadow-md flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-semibold text-teal-600 mb-2">Individual Session</h3>
                <p className="text-4xl font-bold text-gray-800 mb-2">$200</p>
                <p className="text-sm text-gray-600">One-on-one therapy, tailored to your personal goals.</p>
              </div>
            </div>
          </Link>

          <Link href="/consult" className="h-full">
            <div className="bg-pink-50 hover:bg-pink-100 cursor-pointer transition p-6 rounded-xl shadow-md flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-semibold text-pink-600 mb-2">Couples Session</h3>
                <p className="text-4xl font-bold text-gray-800 mb-2">$240</p>
                <p className="text-sm text-gray-600">Supportive sessions for healing and strengthening relationships.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
