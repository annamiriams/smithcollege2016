const VolunteerRoleCard = ({emoji, title, description }) => {
    return (
        <div className="role-card">
            <h3>{title}</h3>
            <div className="description">

            <p>{description}</p>
            <p>~~~</p>
            </div>
        </div>
    )

};

export default VolunteerRoleCard;