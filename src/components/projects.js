import { Col, Container, Row, Tab } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from "./projectCard";
import projImg1 from '../assets/img/skill-1.png';
import projImg2 from '../assets/img/skill-1.png';
import projImg3 from '../assets/img/skill-1.png';
import projImg4 from '../assets/img/skill-1.png';
import projImg5 from '../assets/img/skill-1.png';

export const Projects = () =>{
    const projects=[
        {
            title: "FDA clearance",
            desciption:"Medical Ideation and Development",
            imgUrl: projImg1,
        },
        {
            title: "FDA clearance",
            desciption:"Medical Ideation and Development",
            imgUrl: projImg2,
        },
        {
            title: "FDA clearance",
            desciption:"Medical Ideation and Development",
            imgUrl: projImg3,
        },
        {
            title: "FDA clearance",
            desciption:"Medical Ideation and Development",
            imgUrl: projImg4,
        },
        {
            title: "FDA clearance",
            desciption:"Medical Ideation and Development",
            imgUrl: projImg5,
        },
        {
            title: "FDA clearance",
            desciption:"Medical Ideation and Development",
            imgUrl: projImg5,
        }
    ]
 
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Lorean jsiorgj jiridspokfgo ewr roigwrpfkweo fkow dsijsdfvfwo</p>
                    <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id='pills-tab'>
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third"> Tab 3</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='first'>
                            <Row>
                                {
                                    projects.map((project, index)=>{
                                        return(
                                            <ProjectCard key={index}{...project}/>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey='second'>jopojo</Tab.Pane>
                        <Tab.Pane eventKey='third'>pokokop</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}