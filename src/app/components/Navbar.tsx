'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black shadow-md fixed top-0 w-full z-50">
      <div className="text-2xl font-bold text-teal-600">Serena Blake</div>

      <ul className="flex items-center text-white space-x-6">
        <li>
          <a href="/#Hero" className="hover:text-teal-600 pt-24 transition">Home</a>
        </li>
        <li>
          <Link href="/#About"><span className="hover:text-teal-600  transition">About</span></Link>
        </li>
        <li>
          <Link href="/#Services"><span className="hover:text-teal-600 transition">Services</span></Link>
        </li>
        <li>
          <Link href="/#FAQ"><span className="hover:text-teal-600 transition">FAQ</span></Link>
        </li>
        <li>
          <Link href="/#gallery"><span className="hover:text-teal-600 transition">Gallery</span></Link>
        </li>
        <li>
          <a href="/#contact" className="hover:text-teal-600 pt-24 transition">Contact</a>
        </li>
        <li>
          <Link href="/consult" className="inline-block">
            <span className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md transition text-sm font-medium align-middle">
              Book Now
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
