import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

export const ProjectDetail = () => {
    const { slug } = useParams();
    
    return (
        <section className="project-detail">
            <Container>
                <h1>{slug}</h1>
                <p>This is the detail page for {slug}</p>
            </Container>
        </section>

    );
}



