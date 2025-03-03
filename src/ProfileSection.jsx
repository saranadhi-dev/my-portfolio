import React from "react"

function ProfileSection() {
    return (
        <section className="profile-section">
            <div className="profile-container">
                <div className="profile-left">
                    <h1>Saran Aadithyan</h1>
                    <p>
                        I am a passionate web developer with a love for creating interactive and user-friendly websites.
                        I specialize in front-end development and always seek to learn and implement new technologies.
                        Outside of coding, I enjoy photography and exploring the outdoors.
                    </p>
                </div>
                <div className="profile-right">
                    <img src="your-image-url.jpg" alt="Profile" />
                </div>
            </div>
        </section>
    )
};

export default ProfileSection;
