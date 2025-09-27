// src/components/About/About.jsx

import CabinetRoleCard from '../About/CabinetRoleCard';

const members = [
    {
        image: "alyssa-kaplan",
        name: "Alyssa Kaplan",
        pronouns: "she/her",
        house: "Talbot",
        major: "Math and Sociology minor",
        activities: "Smiffenpoofs",
        sinceGraduation: "I live in Boston with my husband. I worked in consulting for five years, and now work as a school psychologist in a K-4 school. In my spare time, I love playing soccer and pickleball, reading books, and spending time with friends and family."
    },
    {
        image: "anna-steckel",
        name: "Anna Steckel",
        pronouns: "she/they", 
        house: "Gardiner", 
        major: "Psychology and Jewish Studies", 
        activities: "Smiffenpoofs, SC Jewish Community, Gold Key", 
        sinceGraduation: "I live in Portland with my spouse and our two cats. I work in the mental health field and spend my time outside of work birdwatching, reading, and cooking."
    },
    {
        image: "arielle-boucher",
        name: "Arielle Boucher",
        pronouns: "she/her", 
        house: "Emerson", 
        major: "Music and German Studies minor", 
        activities: "Emerson House VP, Smiffenpoofs", 
        sinceGraduation: "I live in New York City where I work supporting a research team at a biotech investment company. In my spare time, I take voice lessons, go to the theatre, and read." 
    },
    // { name: "", pronouns: "", house: "",  major: "", activities: "", sinceGraduation: "" },
];

const About = () => {
    return (
        <div>
            <h1 className="hero-h1">Your Class Cabinet</h1>
            <div className="member-card-container">
                {members.map((member, index) => (
                    <CabinetRoleCard
                        key={index}
                        image={member.image}
                        name={member.name}
                        pronouns={member.pronouns}
                        house={member.house}
                        major={member.major}
                        activities={member.activities}
                        sinceGraduation={member.sinceGraduation}
                    />
                ))}
            </div>
        </div>
    );
}

export default About;