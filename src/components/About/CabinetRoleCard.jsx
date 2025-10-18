// src/components/About/CabinetRoleCard.jsx

const CabinetRoleCard = ({
    image,
    name,
    pronouns,
    house,
    major,
    activities,
    sinceGraduation,
}) => {
    return (
        <div className="card">
            <img src={`/${image}.jpg`} alt={`${name}'s photo`} className="card-image" />
            <div className="card-content">
                <div className="card-header">
                    <h3>{name}</h3>
                    <span className="pronouns">{pronouns}</span>
                </div>
                <div className="card-info">
                    <p><strong>House:</strong> {house}</p>
                    <p><strong>Major:</strong> {major}</p>
                    <p><strong>Activities:</strong> {activities}</p>
                    <p><strong>Since Graduation:</strong> {sinceGraduation}</p>
                </div>
            </div>
        </div>
    );
};

export default CabinetRoleCard;
