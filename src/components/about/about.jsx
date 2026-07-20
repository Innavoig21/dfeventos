import "./about.css";

import { motion } from "framer-motion";

import aboutImage from "../../assets/hero.png";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          className="about-text"
          initial={{
            opacity: 0,
            x: -80
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8
          }}
          viewport={{
            once: true
          }}
        >
          <span>QUEM SOMOS</span>
          <h2>
            Transformamos ideias
            <br />
            em experiências memoráveis
          </h2>
          <p>
            A DF Eventos é uma empresa angolana
            especializada em produção audiovisual,
            streaming, fotografia profissional e
            soluções técnicas para eventos.
          </p>
          <p>
            Com uma equipa experiente e equipamentos
            modernos, entregamos qualidade, inovação
            e criatividade em cada projeto.
          </p>
          <button>Conheça-nos</button>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8
          }}
          viewport={{
            once: true
          }}
        >
          <img src={aboutImage} />
          <div className="blue-shape"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
