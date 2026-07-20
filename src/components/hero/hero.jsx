import "./hero.css";
import { motion } from "framer-motion";
import ParticlesBackground from "../particles/particles-background";

function Hero() {
  return (
    <section id="hero" className="hero">
      <ParticlesBackground />
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          DF EVENTOS
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Produção Audiovisual
          e Multimédia
        </motion.h2>

        <div className="hero-buttons">
          <button>Solicitar Orçamento</button>
          <button className="outline">Conhecer Serviços</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
