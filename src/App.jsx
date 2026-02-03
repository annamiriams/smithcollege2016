import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import FAQ from './components/FAQ/FAQ';
import NavBar from './components/NavBar/NavBar';
import Volunteer from './components/Volunteer/Volunteer';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
    return (
        <>
            <NavBar />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/class-cabinet" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/volunteer" element={<Volunteer />} />
            </Routes>
            <Footer />
        </>

    );
}

export default App;