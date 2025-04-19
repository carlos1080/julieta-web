import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-100 text-center px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-pink-700 mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Para Julieta 💖
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-pink-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Esta página es un pedacito de lo mucho que siento por vos.
      </motion.p>

      <div className="flex justify-center">
            <motion.img
                src="/images/betito.jpg"
                alt="Betito"
                className="w-64 h-64 max-w-full max-h-full rounded-xl shadow-lg mt-6 object-cover"                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3, duration: 1 }}
            />
        </div>

  
     
    </div>
  );
}
