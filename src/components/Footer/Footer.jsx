// src/components/Footer/Footer.jsx

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <>
            <section className='footer'>

                <div>
                    <h1>SEE Y'ALL IN NOHO</h1>
                </div>

                <div className='footer-info'>
                    <div>
                        <h3>SITEMAP</h3>
                        <ul>
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/volunteer'>We Need You</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>REUNION DATES</h3>
                        <p>5/14/26 - 5/17/26</p>
                    </div>
                    <div>
                        <h3>REGISTER</h3>
                        <p>More details coming soon…</p>
                    </div>
                </div>

                <div>
                    <a href='https://www.instagram.com/smithcollegeclassof2016' target="_blank" rel="noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff", fontSize: "2em" }} />
                    </a>
                </div>
            
            </section>

        </>

    );
}

export default Footer