import "./contact.css";

import { motion } from "framer-motion";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="contact"
    >
      <div className="contact-title">
        <span>CONTACTO</span>

        <h2>Vamos conversar sobre o seu próximo evento</h2>

        <p>
          Entre em contacto connosco. A nossa equipa responderá o mais rapidamente possível.
        </p>
      </div>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="info-card">
            <FaPhoneAlt />
            <div>
              <h4>Telefone</h4>
              <p>+244 900 000 000</p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>geral@dfeventos.ao</p>
            </div>
          </div>

          <div className="info-card">
            <FaWhatsapp />
            <div>
              <h4>WhatsApp</h4>
              <p>+244 900 000 000</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Localização</h4>
              <p>Luanda, Angola</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Nome"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="text"
            placeholder="Assunto"
          />

          <textarea
            rows="6"
            placeholder="Mensagem"
          />

          <button>
            Enviar Mensagem
          </button>
        </motion.form>
      </div>

      <div className="map">
        <iframe
          title="Mapa"
          src="https://www.google.com/maps?q=Luanda&output=embed"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
