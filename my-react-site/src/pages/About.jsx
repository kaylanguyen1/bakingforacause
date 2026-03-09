import '../App.css'
import Header from "../components/page-headers.jsx"
import Footer from '../components/footer.jsx'
import a_main from "../assets/about_img/a_main.png"
import a_left from "../assets/about_img/a_left.jpg"
import a_right from "../assets/about_img/a_right.jpg"

function About() {
    return (
        <div className="page-background">
            <Header />
            <div className="body-title inter-medium">
                Who We Are
            </div>

            <div className="center-section">
                <div className="split-section">
                    <div className="split-img">
                        <img src={a_main} />
                    </div>
                    <div className="split-text">
                        <div className="split-title instrument-serif-regular-italic">our purpose</div>
                        <div className="split-body inter-regular">
                            Baking for a Cause is a student organization at UT Dallas dedicated to baking and donating specialty treats to shelters in the DFW area. 
                        </div>
                        <div className="split-body inter-regular">
                            By providing the supplies and a space for students to bake, we’re able to nurture a learning environment for students while giving back to our community.
                        </div>
                    </div>
                </div>

                <div className="split-section">
                    <div className="split-text">
                        <div className="split-title instrument-serif-regular-italic">meeting information</div>
                        <div className="split-body inter-regular">
                            Our meetings are usually from 6-8 PM every other Thursday and Friday at Northside Clubhouse 1. 
                            No experience is necessary, and all ingredients, equipment, and recipes will be provided. 
                        </div>
                        <div className="split-body inter-regular">
                            For meeting dates and information, follow our <a href="https://www.instagram.com/utdbakingforacause/" target="_blank"
                            rel="noopener noreferrer">Instagram </a> or 
                            <a href="https://discord.gg/x5C5wWC3bh" target="_blank"
                            rel="noopener noreferrer"> Discord, </a>
                            where information will be posted a week in advance. 
                        </div>
                    </div>
                    <div className="split-img">
                        <img src={a_left} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About