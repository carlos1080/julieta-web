import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-pink-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-pink-700">Para Julieta 💖</h1>
        <div className="space-x-4">
          <Link to="/" className="text-pink-800 hover:text-pink-600 transition">Inicio</Link>
          <Link to="/galeria" className="text-pink-800 hover:text-pink-600 transition">Galería</Link>
          <Link to="/carta" className="text-pink-800 hover:text-pink-600 transition">Cartita</Link>
        </div>
      </div>
    </nav>
  );
}
