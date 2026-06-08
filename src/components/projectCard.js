import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, slug }) => {
  return (
      <Link to={`/projects/${slug}`} className="project-link">
        <div className="proj-imgbox">
          <img src={imgUrl} alt={title} />
          <div className="proj-txt">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Link>
  );
};