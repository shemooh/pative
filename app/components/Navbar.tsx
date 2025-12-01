export default function Navbar() {
  return (
    <nav className="fixed top-4 left-4 right-4 rounded-xl bg-black/85 backdrop-blur-md z-50 border border-gray-700/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-black text-white tracking-wide select-none">
            Patively    
          </div>
          <div className="hidden md:flex space-x-10 items-center">
            <a
              href="#hero"
              className="font-medium text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="font-medium text-gray-300 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#systems"
              className="font-medium text-gray-300 hover:text-white transition-colors"
            >
              Systems
            </a>
            <a
              href="#contact"
              className="font-medium text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>
            <button className="bg-gray-800 text-white px-9 py-3 rounded-3xl font-semibold shadow-md hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Free Audit
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
