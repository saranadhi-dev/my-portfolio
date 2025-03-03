import React from 'react';

const ExperienceSection = () => {
    return (
        <section className="experience-section">
            <div className="experience-container">
                <h1>Experience</h1>
                <div className="experience-item">
                    <div className="experience-left">
                        <span className="year">2023 - Present</span>
                    </div>
                    <div className="experience-right">
                        <h2>Full Stack Developer</h2>
                        <p>
                            As a Full Stack Developer, I work on both front-end and back-end technologies.
                            My role involves building scalable web applications, collaborating with teams to design and develop solutions, and maintaining the codebase.
                        </p>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="experience-left">
                        <span className="year">2021 - 2023</span>
                    </div>
                    <div className="experience-right">
                        <h2>Front-End Developer</h2>
                        <p>
                            In this role, I focused on creating responsive and interactive front-end components using technologies like React and Vue.js.
                            I worked closely with the design team to ensure a seamless user experience.
                        </p>
                    </div>
                </div>

                {/* Add more experience items as needed */}
            </div>
        </section>
    );
};

export default ExperienceSection;
