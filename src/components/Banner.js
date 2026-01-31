import { Col, Container, Row } from "react-bootstrap"
import {BsArrowRightCircle} from 'react-icons/bs';
import headerImg from "../assets/img/banner.jpg";
import { useEffect, useState } from "react";
export const Banner = ()=> {

    const [text, setText] = useState(""); // main variable to be update dynamically
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Nerual Engineer","Data Analyst", "Crossfiter"];
    const [Delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },Delta)
        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length; // iteration will loop through 0,1,2,0,1,2. etc
        let fullText = toRotate[i]; // the text to be demo
        let uppdateText = isDeleting ? fullText.substring(0, text.length - 1): fullText.substring(0, text.length +1); // Here is the type in type out animation function

        setText(uppdateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if(!isDeleting & uppdateText == fullText) { // if text is fully presented (e.g. rotated[0[ = web engineer -> web engineer)
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting & uppdateText == ""){ // updateText hs been all deleted
            setLoopNum(loopNum + 1); // Move on to the next loop item
            setIsDeleting(false); // not deleting
            setDelta(500); // Delete velocity fast
        } 
    }
    return (
        <section className="banner" id="home">
            
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6}xl={7}>
                        <span className="tagline"> Welcome to MY world! </span>
                        <h1>{'Hi this is June'}</h1><span className="wrap">{text}</span>
                        <p>Testing paragraph</p>
                        <button onClick={()=> console.log('connect')}>Let's connect! <BsArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6}xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col> 
                </Row>

            </Container>

        </section>
    )
}