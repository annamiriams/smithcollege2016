const CabinetRoleCard = ({image, name, pronouns, house, major, activities, sinceGraduation }) => {
    return (
        <div className="member-role-card">
            <img src={`/${image}.jpg`} alt={`${name}'s photo`} className="member-image"/>
            <div className="member-role-card-header">
                <h3>{name}</h3>
                <h4>{pronouns}</h4>
            </div>
            <p><b>House:</b> {house}</p>
            <p><b>Major:</b> {major}</p>
            <p><b>Activities:</b> {activities}</p>
            <p><b>Since graduation:</b> {sinceGraduation}</p>
        </div>
    )
};

export default CabinetRoleCard;