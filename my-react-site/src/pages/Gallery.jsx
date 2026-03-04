import '../App.css'
import Header from "../components/page-headers.jsx"
import Footer from '../components/footer.jsx'
import g1_1 from '../assets/gallery_img/g1_1.JPG'
import g1_2 from '../assets/gallery_img/g1_2.jpg'
import g1_3 from '../assets/gallery_img/g1_3.png'
import g2_1 from '../assets/gallery_img/g2_1.png'
import g2_2 from '../assets/gallery_img/g2_2.png'
import g2_3 from '../assets/gallery_img/g2_3.png'
import g3_1 from '../assets/gallery_img/g3_1.jpg'
import g3_2 from '../assets/gallery_img/g3_2.jpg'
import g4_1 from '../assets/gallery_img/g4_1.jpg'
import g4_2 from '../assets/gallery_img/g4_2.jpg'
import g5_1 from '../assets/gallery_img/g5_1.JPG'
import g5_3 from '../assets/gallery_img/g5_3.jpg'

function Gallery() {
    return (
        <div className="page-background">
            <Header />
            <div className="body-title inter-medium">Gallery</div>
            <div className="wrapper">
                <div className="row-of-three">
                    <div className="row-of-three-img">
                            <img src={g1_1} />
                            <div className="caption inter-regular">
                                <div className="caption-text">
                                    blueberry streusel & banana chocolate chip muffins
                                </div>
                                <div className="caption-date">
                                    2026
                                </div>
                            </div>
                    </div>
                    <div className="row-of-three-img">
                        <img src={g1_2} />
                        <div className="caption inter-regular">
                            <div className="caption-text">
                                chocolate pumpkin swirl & molten chocolate muffins
                            </div>
                            <div className="caption-date">
                                2024
                            </div>
                        </div>
                    </div>
                    <div className="row-of-three-img">
                        <a href="https://retrogradenews.com/2025/10/06/utds-sweet-treat-aficionados-rep-cookie-contests-doughy-donations-and-sugar-sweet-memories/"
                        target="_blank" rel="noopener noreferrer">
                            <img src={g1_3} />
                            <div className="caption inter-regular">
                                <div className="caption-text">
                                    our news article
                                </div>
                                <div className="caption-date">
                                    2025
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="row">
                    <div className="row-img">
                        <img src={g2_1} />
                        <div className="caption inter-regular">
                            <div className="caption-text">
                                cookie competition
                            </div>
                            <div className="caption-date">
                                2023
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="col-img">
                            <img src={g2_2} />
                            <div className="caption inter-regular">
                                <div className="caption-text">
                                    chocolate pumpkin swirl muffins
                                </div>
                                <div className="caption-date">
                                    2024
                                </div>
                            </div>
                        </div>
                        <div className="col-img">
                            <img src={g2_3} />
                            <div className="caption inter-regular">
                                <div className="caption-text">
                                    cherry blossom cake for jsa event
                                </div>
                                <div className="caption-date">
                                    2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row2">
                    <div className="col2">
                        <div className="col2-img">
                            <img src={g3_1} />
                            <div className="caption inter-regular">
                                <div className="caption-text">
                                    valentine's cookie decorating social
                                </div>
                                <div className="caption-date">
                                    2024
                                </div>
                            </div>
                        </div>
                        <div className="col2-img">
                            <img src={g4_1} />
                            <div className="caption inter-regular">
                                <div className="caption-text">
                                    apple crumb bread
                                </div>
                                <div className="caption-date">
                                    2023
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col2">
                        <div className="col2-img">
                            <img src={g3_2} />
                            <div className="caption inter-regular">
                                <div className="caption-text">
                                    pumpkin decorating social
                                </div>
                                <div className="caption-date">
                                    2022
                                </div>
                            </div>
                        </div>
                        <div className="col2-img">
                            <img src={g4_2} />
                            <div className="caption inter-regular">
                                <div className="caption-text">
                                    baking cookies
                                </div>
                                <div className="caption-date">
                                    2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row3">
                    <div className="row3-img">
                        <img src={g5_1} />
                        <div className="caption inter-regular">
                            <div className="caption-text">
                                molten chocolate muffins
                            </div>
                            <div className="caption-date">
                                2024
                            </div>
                        </div>
                    </div>
                    <div className="row3-img">
                        <img src={g5_3} />
                        <div className="caption inter-regular">
                            <div className="caption-text">
                                cake pops for our bake sale
                            </div>
                            <div className="caption-date">
                                2022
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Gallery