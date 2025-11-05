// src/components/About/About.jsx
import CabinetRoleCard from './CabinetRoleCard';

const members = [
    {
        image: "alyssa-kaplan",
        name: "Alyssa Kaplan",
        pronouns: "she/her",
        position: "Reunion Chair",
        house: "Talbot",
        major: "Math & Sociology minor",
        activities: "Smiffenpoofs",
        sinceGraduation:
            "I live in Boston with my husband. I worked in consulting for five years, and now work as a school psychologist in a K-4 school. In my spare time, I love playing soccer and pickleball, reading books, and spending time with friends and family.",
    },
    {
        image: "anna-steckel",
        name: "Anna Steckel",
        pronouns: "she/they",
        position: "Reunion Chair",
        house: "Gardiner",
        major: "Psychology & Jewish Studies",
        activities: "Smiffenpoofs, SC Jewish Community, Gold Key, House Council",
        sinceGraduation:
            "I live in Portland with my spouse and our two cats. I work in the mental health field and spend my time outside of work birdwatching, reading, and cooking.",
    },
    {
        image: "arielle-boucher",
        name: "Arielle Boucher",
        pronouns: "she/her",
        position: "Reunion Chair",
        house: "Emerson",
        major: "Music & German Studies minor",
        activities: "Emerson House VP, Smiffenpoofs",
        sinceGraduation:
            "I live in New York City where I work supporting a research team at a biotech investment company. In my spare time, I take voice lessons, go to the theatre, and read.",
    },
    {
        image: "celine-rosak",
        name: "Celine Rosak",
        position: "Souvenir/Merch Chair",
        pronouns: "she/her",
        house: "Gardiner",
        major: "Anthropology & French Studies",
        activities: "House Council",
        sinceGraduation:
            "I moved to Seattle, where I discovered the wild world of tech and now work as a marketing director. In my spare time I like picking up new skills—current pursuits include making beeswax taper candles and trying not to cry while skiing. I love spending time over good food with great friends.",
    },
    {
        image: "elise-parisian",
        name: "Elise Parisian",
        position: "Program Chair",
        pronouns: "Any",
        house: "Sessions/Friedman Apartment",
        major: "Studio Art",
        activities: "Students for Social Justice and Institutional Change (SSJIC), worked at the campus Art supply store and in town at Urban Outfitters",
        sinceGraduation:
            "I have been living in Chicago with my wife and dogs and fill my time with a multitude of things. I work as a relationship/couples therapist and as adjunct faculty at The Family Institute/Northwestern University, host Unspookable - a podcast for children about playground folklore, and have been increasingly invested in learning to play the fiddle and getting involved in the Old Time music scene.",
    },
    {
        image: "kristin-rivers",
        name: "Kristin Rivers",
        position: "Web Chair",
        pronouns: "she/her",
        house: "Chapin",
        major: "English Language & Literature",
        activities: "Intervarsity Christian Fellowship, Center for Religious & Spiritual Life reporter & photographer, Boutelle-Day Poetry Center intern, and MANNA Soup Kitchen volunteer",
        sinceGraduation:
            "I ran a personal writing blog, had work published by the Straw Dog Writers Guild and the Young Voices Project, and contributed to contests and showcases with Pen and Muse, Wordhaus, Short Fiction Break, and PowerfulU. I currently work as an editor for two weekly community newspapers and am an advocate for mental health/suicide prevention with the American Foundation for Suicide Prevention MA Chapter. I also became an aunt!",
    },
    {
        image: "lena-wilson",
        name: "Lena Wilson",
        position: "Program Chair",
        pronouns: "she/her",
        house: "Talbot/Tyler",
        major: "Film Studies & SWAG",
        activities: "SEC, Labrys Literary Magazine, Gold Key, theater stuff, haunting the basement of Seelye Hall as an ETS employee",
        sinceGraduation:
            "I was a townie for two years working at Oh My, Sweeties, and Amherst Cinema, then I moved to New York City to pursue a career in arts and culture journalism. My work has been featured in The New York Times, The Boston Globe, and The Washington Post, among others. I live in Brooklyn with my wife and our two senior rescue dogs, Neil and Knives.",
    },
    {
        image: "lily-eriksen",
        name: "Lily Eriksen",
        position: "Parade Chair & Fund Team Coordinator",
        pronouns: "she/her",
        house: "Lamont",
        major: "Government",
        activities: "Soccer Team, Ski Team",
        sinceGraduation:
            "I live in Seattle, where I work as a public affairs consultant and lobbyist at our state capitol. In my spare time, I can be found outside on my bike, on a pair of skis, running, and generally frolicking in nature.",
    },
    {
        image: "nat-belkov",
        name: "Nat Belkov",
        position: "Logo & Theme Chair",
        pronouns: "they/he",
        house: "Jordan",
        major: "Architecture & Urbanism",
        activities: "Athletic Association, Noteables",
        sinceGraduation:
            "I moved to NYC and designed with a few agencies before landing in media where I am now creative director for Vox's food and bev publications, Eater, Punch, and Thrillist.",
    },
    {
        image: "tia-karapoulios",
        name: "Tia Karapoulios",
        position: "Treasurer",
        pronouns: "she/her",
        house: "Morrow",
        major: "Psychology/Exercise & Sport Studies",
        activities: "Basketball team",
        sinceGraduation:
            "I coached Women’s College Basketball at Long Beach State and Saint Mary’s College and now work in Sports Tech at Teamworks.",
    },
    // {
    //     image: "",
    //     name: "",
    //     position: "",
    //     pronouns: "",
    //     house: "",
    //     major: "",
    //     activities: "",
    //     sinceGraduation:
    //         "",
    // },
    // {
    //     image: "",
    //     name: "",
    //     position: "",
    //     pronouns: "",
    //     house: "",
    //     major: "",
    //     activities: "",
    //     sinceGraduation:
    //         "",
    // },
];

const About = () => {
    return (
        <div>
            <h1 className="hero-h1">Your Class Cabinet</h1>
            <div className="card-container">
                {members.map((member, index) => (
                    <CabinetRoleCard key={index} {...member} />
                ))}
            </div>
        </div>
    );
};

export default About;
