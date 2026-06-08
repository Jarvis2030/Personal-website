import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { ProjectCard } from "./projectCard";
import pivot from "../assets/img/project_img/cover/pivot.png";
import help from "../assets/img/project_img/cover/help.png";
import projImg3 from "../assets/img/project_img/cover/help.png";
import semonet from "../assets/img/project_img/cover/S_emonet.png";
import bikegrid from "../assets/img/project_img/cover/bikegrid.png";
import paws from "../assets/img/project_img/cover/paws.png";

export const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [leavingIndex, setLeavingIndex] = useState(null);
  const leavingTimerRef = useRef(null);

  const projects = [
  
    {
      title: "PAWS: Pet Automated Weighing and Feeding System",
      description:
        "A microcontroller-based smart pet feeding system that automates meal scheduling, portion control, pet presence detection, and feeding confirmation through multimodal sensing and embedded control logic.",
      imgUrl: paws,
      slug: "paws",
      date: "2023 Jun",
    },
    {
      title: "BikeGrid: Recurrent Ensemble Framework for Predictive Multi-Day Bike Usage Forecasting",
      description:
        "A commercial application model for weekly, geometrically local district bike usage prediction using multi-model architectures and ensemble learning methods.",
      imgUrl: bikegrid,
      slug: "bikegrid",
      date: "2023 Dec",
    },
    {
      title: "HELP: Heteromodal Epidermal Liquid-metal Patch",
      description:
        "Flexible Patch with Analog Constriction Gates for Cardiorespiratory Monitoring. The associated software can successfully classified 78.9% of sleeping stage and diagnosed apnea in testing subject data.",
      imgUrl: help,
      slug: "help-patch",
      date: "2024 Sep",
    },
    {
      title: "PIVOT: Advanced Neuromodulation System for Phantom Limb Pain",
      description:
        "The ultimate, seamless pain management solution tailored for Phantom Limb Pain patients.",
      imgUrl: pivot,
      slug: "pivot-phantom-limb-pain",
      date: "2025 Sep",
    },
    {
      title: "S-EmoNet: Efficient Model for Real-time EEG Emotion Recognition",
      description:
        "A hybrid CNN–SNN–LSTM architecture for EEG emotion recognition that reduces synaptic operations in the spiking classifier by 99.9%, advancing low-power emotion decoding for edge-device affective BCI.",
      imgUrl: semonet,
      slug: "s-emonet",
      date: "2026 Jan",
    },
    {
      title: "Bio-Inspired Neural Architecture for EEG-Based Affective Computing",
      description:
        "Implementation and construction of an advanced affective computing framework using a Kalman filter backbone and spiking neural network models.",
      imgUrl: projImg3,
      slug: "bio-inspired-eeg-emotion",
      date: "2026 Jun",
    },
  
  ];

  const slides = [
    { type: "spacer", slug: "spacer-left" },
    ...projects.map((project) => ({ ...project, type: "project" })),
    { type: "spacer", slug: "spacer-right" },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleAfterChange = (_, { currentSlide }) => {
    const centeredIndex = currentSlide + 1;
    const centeredSlide = slides[centeredIndex];

    if (!centeredSlide || centeredSlide.type === "spacer") return;
    if (centeredIndex === activeIndex) return;

    setLeavingIndex(activeIndex);
    setActiveIndex(centeredIndex);

    if (leavingTimerRef.current) {
      clearTimeout(leavingTimerRef.current);
    }

    leavingTimerRef.current = setTimeout(() => {
      setLeavingIndex(null);
      leavingTimerRef.current = null;
    }, 260);
  };

  useEffect(() => {
    return () => {
      if (leavingTimerRef.current) {
        clearTimeout(leavingTimerRef.current);
      }
    };
  }, []);

  const activeProject = slides[activeIndex];

  return (
    <section className="projects project" id="projects">
      <Container fluid="xl">
        <Row>
          <Col>
            <div className="project-head-box">
              <h2>Projects</h2>
              <p>Selected research, biomedical engineering, and applied AI projects.</p>

              <div className="active-project-info">
                <h3>{activeProject?.title}</h3>
                <p>{activeProject?.description}</p>
              </div>

              <Carousel
                responsive={responsive}
                infinite={false}
                centerMode={false}
                partialVisible={false}
                slidesToSlide={1}
                swipeable={true}
                draggable={true}
                keyBoardControl={true}
                minimumTouchDrag={30}
                afterChange={handleAfterChange}
                className="project-slider"
                containerClass="project-carousel-container"
                itemClass="project-slider-item"
              >
                {slides.map((slide, index) => {
                  if (slide.type === "spacer") {
                    return (
                      <div key={slide.slug} className="timeline-item spacer-item">
                        <div className="timeline-card-slot" />
                        <div className="timeline-meta" />
                      </div>
                    );
                  }

                  const stateClass =
                    index === activeIndex
                      ? "active"
                      : index === leavingIndex
                      ? "leaving"
                      : "inactive";

                  return (
                    <div key={slide.slug} className={`timeline-item ${stateClass}`}>
                      <div className="timeline-card-slot">
                        <ProjectCard {...slide} />
                      </div>

                      <div className="timeline-meta">
                        <div className="timeline-dot"></div>
                        <span className="timeline-date">{slide.date}</span>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};