
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../styles/footer.css'

export default function Footer() {
    return (
        <footer className="container-fluid mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 text-center my-5">
                    <div className="logo-top d-flex justify-content-center">
                        <img
                            className="img-fluid d-lg-inline-block"
                            src="/img/nabi/logo-NABI-blanco.webp"
                            alt="Logo Nabi"
                        />
                    </div>
                    <div className="footer-iconos mt-5 d-flex justify-content-evenly">
                        <a href="https://www.facebook.com/" target="_blank">
                            <FontAwesomeIcon icon={faFacebookF} className='icono' />
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            <FontAwesomeIcon icon={faXTwitter} className='icono' />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} className='icono' />
                        </a>
                        <a href="mailto:lopezrios.sol@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} className='icono' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}