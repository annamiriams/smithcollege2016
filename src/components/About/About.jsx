// src/components/About/About.jsx
import CabinetRoleCard from './CabinetRoleCard';

const members = [
    {
        image: "alyssa-kaplan",
        name: "Alyssa Kaplan",
        pronouns: "she/her",
        position: "Reunion Chair",
        house: "Talbot",
        major: "Math and Sociology minor",
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
        major: "Psychology and Jewish Studies",
        activities: "Smiffenpoofs, SC Jewish Community, Gold Key",
        sinceGraduation:
            "I live in Portland with my spouse and our two cats. I work in the mental health field and spend my time outside of work birdwatching, reading, and cooking.",
    },
    {
        image: "arielle-boucher",
        name: "Arielle Boucher",
        pronouns: "she/her",
        position: "Reunion Chair",
        house: "Emerson",
        major: "Music and German Studies minor",
        activities: "Emerson House VP, Smiffenpoofs",
        sinceGraduation:
            "I live in New York City where I work supporting a research team at a biotech investment company. In my spare time, I take voice lessons, go to the theatre, and read.",
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
    //     image: "lena-wilson",
    //     name: "Lena Wilson",
    //     position: "Program Chair",
    //     pronouns: "",
    //     house: "",
    //     major: "",
    //     activities: "",
    //     sinceGraduation:
    //         "",
    // },
    // {
    //     image: "elise-parisian",
    //     name: "Elise Parisian",
    //     position: "Program Chair",
    //     pronouns: "",
    //     house: "",
    //     major: "",
    //     activities: "",
    //     sinceGraduation:
    //         "",
    // },
    // {
    //     image: "celine-rosak",
    //     name: "Celine Rosak",
    //     position: "Souvenir Chair",
    //     pronouns: "",
    //     house: "Gardiner",
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
