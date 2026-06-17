import { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

export const Skills = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, []);
  
  const levelMap = {
    1: "Beginner",
    2: "Intermediate",
    3: "Proficient",
    4: "Advanced",
  };

  const technicalSkills = [
    { name: "Python", level: 4 },
    { name: "MATLAB", level: 4 },
    { name: "C / C++", level: 3 },
    { name: "React", level: 2 },
    { name: "CSS", level: 1 },
    { name: "Machine Learning", level: 4 },
    { name: "Signal Processing", level: 4 },
    { name: "Embedded Systems", level: 2 },
  ];
  
  const languageSkills = [
    { name: "English", level: 4 },
    { name: "Mandarin", level: 4 },
    { name: "Cantonese", level: 2 },
    { name: "Korean", level: 1 },
    { name: "Scientific Writing", level: 2 },
  ];
  
  const toolSkills = [
    { name: "PyTorch", level: 3 },
    { name: "TensorFlow", level: 3 },
    { name: "Git / GitHub", level: 3 },
    { name: "SolidWorks", level: 1 },
    { name: "Arduino", level: 3 },
    { name: "CubeIDE", level: 2 },
    { name: "EEGLAB", level: 2 },
  ];

  const SkillBarList = ({ skills }) => (
    <div className="skills-panel">
      {skills.map((skill) => (
        <div className="skill-row" key={skill.name}>
          <div className="skill-row-top">
            <h4>{skill.name}</h4>
            <span>{levelMap[skill.level]}</span>
          </div>

          <div className="skill-level-grid">
            {[1, 2, 3, 4].map((lvl) => (
                <div
                key={lvl}
                className={`skill-level-box ${
                    animated && lvl <= skill.level ? `filled level-${lvl}` : ""
                }`}
                />
            ))}
            </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="skills-section" id="skills" ref={sectionRef}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="skills-head">
              <h2>Skills</h2>
              <p>
                A cross-disciplinary toolkit spanning technical development,
                languages, and research-oriented tools.
              </p>
            </div>

            <Tab.Container id="skills-tabs" defaultActiveKey="technical">
              <Nav
                variant="pills"
                className="skills-tabs justify-content-center"
              >
                <Nav.Item>
                  <Nav.Link eventKey="technical">Technical</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="languages">Languages</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="tools">Tools</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content className="skills-tab-content">
                <Tab.Pane eventKey="technical">
                  <SkillBarList skills={technicalSkills} />
                </Tab.Pane>

                <Tab.Pane eventKey="languages">
                  <SkillBarList skills={languageSkills} />
                </Tab.Pane>

                <Tab.Pane eventKey="tools">
                  <SkillBarList skills={toolSkills} />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};