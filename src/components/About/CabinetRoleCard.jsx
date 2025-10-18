// src/components/About/CabinetRoleCard.jsx

const CabinetRoleCard = ({
    image,
    name,
    pronouns,
    position,
    house,
    major,
    activities,
    sinceGraduation,
}) => {
    return (
        <div className="card">
            <img 
                src={`/${image}.jpg`} 
                alt={`${name}'s photo`}
                // Shifting Tia and Kristin's photos down
                className={`card-image ${name === "Tia Karapoulios" ? "adjust-crop-mobile" : name === "Kristin Rivers" ? "adjust-crop-mobile" : ""}`} 
                />
            <div className="card-content">
                <div className="card-header">
                    <h3>{name}</h3>
                    <span className="pronouns">{pronouns}</span>
                </div>
                <div className="card-info">
                    <p><strong>Position:</strong> {position}</p>
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
