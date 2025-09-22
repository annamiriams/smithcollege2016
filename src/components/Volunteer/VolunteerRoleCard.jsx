const VolunteerRoleCard = ({emoji, title, description }) => {
    return (
        <div>
            <h3>{title}</h3>
            <div className="description">
            <p>{description}</p>
            <p>~~~</p>
            </div>
        </div>
    )

};

export default VolunteerRoleCard;