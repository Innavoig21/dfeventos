import "./Footer.css";

import logo from "../../assets/hero.png";

import {

FaFacebookF,
FaInstagram,
FaLinkedinIn,
FaWhatsapp,
FaArrowUp

} from "react-icons/fa";

import { animateScroll as scroll } from "react-scroll";

function Footer() {

    function backToTop() {
        scroll.scrollToTop({
            duration: 700,
            smooth: true
        });
    }

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* Empresa */}

                <div className="footer-column">

                    <img
                        src={logo}
                        alt="DF Eventos"
                        className="footer-logo"
                    />

                    <p>

                        A DF Eventos é especializada em soluções audiovisuais,
                        produção técnica e streaming para eventos corporativos,
                        institucionais e sociais.

                    </p>

                </div>

                {/* Links */}

                <div className="footer-column">

                    <h3>Links</h3>

                    <a href="#hero">Início</a>

                    <a href="#about">Sobre Nós</a>

                    <a href="#services">Serviços</a>

                    <a href="#clients">Clientes</a>

                    <a href="#equipment">Equipamentos</a>

                    <a href="#team">Equipa</a>

                    <a href="#contact">Contacto</a>

                </div>

                {/* Serviços */}

                <div className="footer-column">

                    <h3>Serviços</h3>

                    <span>Streaming</span>

                    <span>Fotografia</span>

                    <span>Produção Audiovisual</span>

                    <span>Iluminação</span>

                    <span>Painéis LED</span>

                    <span>Eventos Corporativos</span>

                </div>

                {/* Contactos */}

                <div className="footer-column">

                    <h3>Contacto</h3>

                    <span>📞 +244 900 000 000</span>

                    <span>📧 geral@dfeventos.ao</span>

                    <span>📍 Luanda - Angola</span>

                </div>

            </div>

            {/* Redes */}

            <div className="footer-social">

                <a href="#">
                    <FaFacebookF />
                </a>

                <a href="#">
                    <FaInstagram />
                </a>

                <a href="#">
                    <FaLinkedinIn />
                </a>

                <a href="#">
                    <FaWhatsapp />
                </a>

            </div>

            <div className="footer-bottom">

                <p>

                    © 2026 DF Eventos. Todos os direitos reservados.

                </p>

            </div>

            <button
                className="back-top"
                onClick={backToTop}
            >

                <FaArrowUp />

            </button>

        </footer>

    );

}

export default Footer;