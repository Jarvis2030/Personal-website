import { Col, Container, Row } from "react-bootstrap"
import logo from "../assets/img/logo_nav.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"
import navIcon3 from "../assets/img/nav-icon3.png"


export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col className="text-center text-sm-head">
                        <div className="social-icon">
                    <a href="https://github.com/Jarvis2030"><img src={navIcon1} alt = "" /></a>
                    <a href="https://www.linkedin.com/in/lin-yuchun/"><img src={navIcon2} alt = "" /></a>
                    <a href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=zC3L56MAAAAJ"><img src={navIcon3} alt = "" /></a>
                    </div>
                    <p>Copyright 2022. All Right Reserved.</p>
                    </Col>
                </Row>
            </Container>
            </footer>
    )
}