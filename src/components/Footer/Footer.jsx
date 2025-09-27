// src/components/Footer/Footer.jsx

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import SplitText from '../../components/SplitText/SplitText';

const Footer = () => {

    return (
        <>
            <section className='footer'>

                {/* Static h1 if animation doesn't work */}
                {/* <div>
                    <h1>See y'all in noho</h1>
                </div> */}

                <SplitText
                    text="See y'all in noho"
                    tag="h1"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />

                <div className='footer-info'>
                    <div>
                        <h3>Sitemap</h3>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/volunteer'>We Need You</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3>Reunion Dates</h3>
                        <p>5/14/26 - 5/17/26</p>
                    </div>
                    <div>
                        <h3>Register</h3>
                        <p>More details coming soon…</p>
                    </div>
                </div>

                <div className="instagram-icon">
                    <a href='https://www.instagram.com/smithcollegeclassof2016' target="_blank" rel="noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff", fontSize: "2em" }} />
                    </a>
                </div>
            
            </section>

        </>

    );
}

export default Footer