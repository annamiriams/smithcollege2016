// src/components/Home/Home.jsx

const Home = () => {

    return (
        <div className="main-content">
            {/* <h1>SMITHIES</h1> */}
            <div class="home-hero">
                <h1>Reunion</h1>
                <h1>2026</h1>
            </div>
            {/* <h2>It's nearly time</h2> */}
            <p class="description">This isn’t a drill. We’re heading back to Noho—IRL this time. That’s right: we’re leaving our apartments, putting on pants with actual zippers, and talking to each other in person.</p>
            <div className="reunion-details">
                <h3>When</h3>
                <p>5/14/26 - 5/17/26</p>
            </div>
            <div className="reunion-details">
                <h3>Where</h3>
                <p>Smith College (duh)</p>
            </div>
        </div>
    );
}

export default Home