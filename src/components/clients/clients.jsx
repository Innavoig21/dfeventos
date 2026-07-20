import "./clients.css";

import { motion } from "framer-motion";

import {
  FaUsers,
  FaProjectDiagram,
  FaCalendarCheck,
  FaStar
} from "react-icons/fa";

const stats = [
  {
    icon: <FaProjectDiagram />,
    number: "150+",
    label: "Projetos Realizados"
  },
  {
    icon: <FaUsers />,
    number: "80+",
    label: "Clientes Satisfeitos"
  },
  {
    icon: <FaCalendarCheck />,
    number: "8+",
    label: "Anos de Experiência"
  },
  {
    icon: <FaStar />,
    number: "100+",
    label: "Eventos Realizados"
  }
];

const partners = [
  "Cliente 01",
  "Cliente 02",
  "Cliente 03",
  "Cliente 04",
  "Cliente 05",
  "Cliente 06",
  "Cliente 07",
  "Cliente 08"
];

function Clients() {
  return (
    <section id="clients" className="clients">
      <div className="clients-title">
        <span>CLIENTES E PARCEIROS</span>
        <h2>Empresas que confiam no nosso trabalho</h2>
        <p>
          Construímos relações sólidas com empresas e
          instituições que valorizam qualidade,
          inovação e profissionalismo.
        </p>
      </div>

      {/* ESTATISTICAS */}
      <div className="stats">
        {stats.map((item, index) => (
          <motion.div
            className="stat-card"
            key={index}
            initial={{
              opacity: 0,
              y: 50
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.15
            }}
            viewport={{
              once: true
            }}
          >
            <div className="stat-icon">{item.icon}</div>
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* PARCEIROS */}
      <div className="partners">
        <h3>Alguns dos nossos parceiros</h3>
        <div className="partners-slider">
          <div className="partners-track">
            {[...partners, ...partners].map((partner, index) => (
              <div className="partner" key={index}>
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
