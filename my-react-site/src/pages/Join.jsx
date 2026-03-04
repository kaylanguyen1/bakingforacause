import '../App.css'
import Footer from '../components/footer.jsx'
import Header from '../components/page-headers.jsx'
import j_main from '../assets/join_img/j_main.jpg'
import j_left from '../assets/join_img/j_left.jpg'
import j_right from '../assets/join_img/j_right.jpg'

function Join() {
    return (
        <div className="page-background">
            <Header />
            <div className="body-title inter-medium">
                Membership
            </div>

            <div className="center-section">
                <div className="split-section">
                    <div className="split-img">
                        <img src={j_main} />
                    </div>
                    <div className="split-text">
                        <div className="split-body inter-regular">
                            Students can join at any time during the school year, with no experience or equipment necessary. 
                            Simply show up to one of our meetings (announced on all social media a week in advance) and pay the membership fee at the second meeting you attend.
                        </div>
                    </div>
                </div>

                <div className="split-section">
                    <div className="split-text">
                        <div className="split-title instrument-serif-regular-italic">
                            Volunteer Hours
                        </div>
                        <div className="split-body inter-regular">
                            Members can earn up to 2 hours per meeting or more by volunteering at our bake sales or Saturday donations. 
                            If you would like to receive volunteer hours or have questions, message us through our social media.
                        </div>
                    </div>
                    <div className="split-img">
                        <img src={j_left} />
                    </div>
                </div>

                <div className="split-section">
                    <div className="split-img">
                        <img src={j_right} />
                    </div>
                    <div className="split-text">
                        <div className="split-title instrument-serif-regular-italic">
                        Membership Fee
                        </div>
                        <div className="split-body inter-regular">
                            If you would like to join us after your first trial meeting, we would appreciate a payment of $15 for a year or $10 for a semester as part of your membership dues. 
                            If you would like to pay your fee or have questions, feel free to message us on our social media or ask at a meeting.
                        </div>
                        <div className="split-body inter-regular">
                            Our membership dues allow us to buy ingredients and equipment for our various baking meetings, enabling us to provide everything at no additional cost for our members. 
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Join