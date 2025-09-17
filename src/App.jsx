import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import Volunteer from './components/Volunteer/Volunteer';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/volunteer" element={<Volunteer />} />
            </Routes>
            <Footer />
        </>

    );
}

export default App;