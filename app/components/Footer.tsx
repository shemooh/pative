"use client";

import { Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
return (
<footer className="bg-white text-gray-700 py-12 border-t border-gray-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center space-y-4">
<div className="text-xl font-semibold tracking-wide select-none text-gray-800">
Patively
</div>
<p className="text-sm max-w-md text-center">
© 2025 DigitalPro. All rights reserved. Transforming businesses through digital excellence.
</p>
<div className="flex space-x-8">
<a href="#" aria-label="Twitter" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" >
<Twitter size={24} />
</a>
<a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" >
<Linkedin size={24} />
</a>
<a href="#" aria-label="YouTube" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300" >
<Youtube size={24} />
</a>
</div>
</div>
</footer>
);
}