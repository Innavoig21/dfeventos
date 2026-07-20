import "./Services.css";

import {
    FaVideo,
    FaBroadcastTower,
    FaCamera,
    FaLightbulb,
    FaDesktop,
    FaMicrophone,
    FaBuilding,
    FaFilm,
    FaTv
} from "react-icons/fa";

import { motion } from "framer-motion";

const services = [

    {
        icon: <FaVideo />,
        title: "Produção Audiovisual",
        description: "Captação profissional de vídeos para eventos corporativos, institucionais e comerciais."
    },

    {
        icon: <FaBroadcastTower />,
        title: "Streaming",
        description: "Transmissão ao vivo para YouTube, Facebook, Zoom e outras plataformas."
    },

    {
        icon: <FaCamera />,
        title: "Fotografia",
        description: "Cobertura fotográfica de eventos, conferências, workshops e cerimónias."
    },

    {
        icon: <FaLightbulb />,
        title: "Iluminação",
        description: "Soluções profissionais de iluminação para eventos de qualquer dimensão."
    },

    {
        icon: <FaDesktop />,
        title: "Painel LED",
        description: "Painéis LED de alta resolução para apresentações e eventos."
    },

    {
        icon: <FaMicrophone />,
        title: "Áudio Profissional",
        description: "Equipamentos modernos de sonorização para eventos corporativos."
    },

    {
        icon: <FaBuilding />,
        title: "Estruturas",
        description: "Montagem de palcos, tendas, suportes e estruturas para eventos."
    },

    {
        icon: <FaFilm />,
        title: "Pós-Produção",
        description: "Edição de vídeo, motion graphics e finalização profissional."
    },

    {
        icon: <FaTv />,
        title: "Eventos Corporativos",
        description: "Planeamento técnico e produção completa de eventos empresariais."
    }

];

function Services() {

    return (

        <section
            id="services"
            className="services"
        >

            <div className="section-title">

                <span>NOSSOS SERVIÇOS</span>

                <h2>Soluções completas para cada evento</h2>

                <p>
                    Trabalhamos com tecnologia moderna e uma equipa especializada
                    para oferecer experiências memoráveis.
                </p>

            </div>

            <div className="services-grid">

                {

                    services.map((service, index) => (

                        <motion.div

                            key={index}

                            className="service-card"

                            initial={{
                                opacity: 0,
                                y: 40
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}

                            transition={{
                                delay: index * .10
                            }}

                            viewport={{
                                once: true
                            }}

                        >

                            <div className="service-icon">

                                {service.icon}

                            </div>

                            <h3>

                                {service.title}

                            </h3>

                            <p>

                                {service.description}

                            </p>

                        </motion.div>

                    ))

                }

            </div>

        </section>

    );

}

export default Services;