import React from "react"
import Navbar from "./NavBar";
import ProfileSection from "./ProfileSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";

function Home() {
    return (
        <div>
            <Navbar />

            <ProfileSection />

            <br /><br />  <br /><br />
            <section id="about" >
                <AboutSection />
            </section>
            <section id="experience" style={{ height: '100vh', }}>
                <ExperienceSection />
            </section>
            <section id="contact" style={{ height: '100vh', }}>
                <h1>Blogs</h1>
            </section>
            <section id="blogs" style={{ height: '100vh', }}>
                <h1>Projects</h1>
            </section>
            <section id="projects" style={{ height: '100vh', }}>
                <h1>Contact</h1>
            </section>
        </div>
    )
};

export default Home;
