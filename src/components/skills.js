import { Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import skillIcon1 from "../assets/img/skill-1.png";
import skillIcon2 from "../assets/img/skill-2.png";
import skillIcon3 from "../assets/img/skill-3.png";
import skillIcon4 from "../assets/img/skill-4.png";
import skillIcon5 from "../assets/img/skill-5.png";
import colorSharp from "../assets/img/color-sharp.png"

import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    return(
        <section className="skill" id='skills'>
            <container>
                <Row>
                    <Col>
                    <div className="skill-box">
                        <h2>Skills</h2>
                        <p>sijfdwpi efjgpwrif wrkfopwrkfo wrfhorwjfgjrog ewr</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                                <img src={skillIcon1}/>
                                <h5>Skill 1</h5>
                            </div>
                            <div className="item">
                                <img src={skillIcon2}/>
                                <h5>Skill 2</h5>
                            </div>
                            <div className="item">
                                <img src={skillIcon3}/>
                                <h5>Skill 3</h5>
                            </div>
                            <div className="item">
                                <img src={skillIcon4}/>
                                <h5>Skill 4</h5>
                            </div>
                            <div className="item">
                                <img src={skillIcon5}/>
                                <h5>Skill 5</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
                
            </container>
        </section>
    );
}