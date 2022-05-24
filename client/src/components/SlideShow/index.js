import './style.css'

import Carousel from "react-bootstrap/Carousel"
import one from "./img/posterOne.png"
import two from "./img/posterTwo.png"
import three from "./img/posterThree.png"

function SlideShow() {
    return (
        <div className='slide-show'>
            <div className='slide-body'>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={one}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={two}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={three}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default SlideShow