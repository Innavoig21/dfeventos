import "./values.css";

import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaAward
} from "react-icons/fa";

import { motion } from "framer-motion";

const data = [
  {
    icon: <FaBullseye/>,
    title: "Missão",
    text:
      "Oferecer soluções audiovisuais inovadoras, garantindo experiências únicas aos nossos clientes."
  },
  {
    icon: <FaEye/>,
    title: "Visão",
    text:
      "Ser uma referência nacional em produção audiovisual e tecnologia para eventos."
  },
  {
    icon: <FaHandshake/>,
    title: "Valores",
    text:
      "Compromisso, qualidade, inovação, ética e excelência."
  },
  {
    icon: <FaAward/>,
    title: "Diferenciais",
    text:
      "Equipamentos modernos, equipa especializada e soluções personalizadas."
  }
];

function Values() {
  return (
    <section className="values">
      <div className="values-grid">
        {
          data.map((item, index) => (
            <motion.div
              className="value-card"
              key={index}
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: index * 0.15
              }}
              viewport={{
                once: true
              }}
            >
              <div className="value-icon">
                {item.icon}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>
            </motion.div>
          ))
        }
      </div>
    </section>
  );
}

export default Values;
