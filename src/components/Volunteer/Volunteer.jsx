// src/components/Volunteer/Volunteer.jsx

import VolunteerDescription from './VolunteerDescription';
import VolunteerRoleCard from './VolunteerRoleCard';

const roles = [
    {
        title: 'Alumnae Parade Chair',
        description: 'Writes the iconic parade signs and manages parade logistics.'
    },
    {
        title: 'Headquarters Chair',
        description: 'Decorates class headquarters, arranges refreshments, and creates a welcoming space. (Ideal: Someone local or with a car.)'
    },
    {
        title: 'House Connector Chair',
        description: 'Recruits classmates from each house or campus area to serve as House Connectors and supports their outreach to boost Reunion attendance.'
    },
    {
        title: 'House Connector',
        description: 'Recruits classmates from their Smith house to boost Reunion attendance.'
    },
    // {
    //     title: 'Logo and Theme Chair',
    //     description: 'Develops our Reunion theme and custom logo. (Ideal: Graphic designer.)'
    // },
    {
        title: 'Program Chair',
        description: 'Plans one to two programs for the weekend.'
    },
    // {
    //     title: 'Reunion Souvenir Chair',
    //     description: 'Selects a souvenir and handles ordering and delivery.'
    // }
];

const Volunteer = () => {
    return (
        <div>
            <h1 className="hero-h1">Volunteer</h1>
            <div className="main-content">
                <VolunteerDescription />
                {roles.map((role, index) => (
                    <VolunteerRoleCard key={index} title={role.title} description={role.description} />
                ))}
            </div>
        </div>
    );
}

export default Volunteer;