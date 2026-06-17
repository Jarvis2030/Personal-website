import { Link } from "react-router-dom";

export const ProjectCard = ({ imgUrl, slug, tags = [] }) => {
  const displayTags = tags.slice(0, 3); // not more than three tag

  return (
    <Link to={`/projects/${slug}`} className="project-link">
      <div className="proj-imgbox">
        <img src={imgUrl} alt={slug} />

        <div className="proj-overlay">
          <div className="proj-txt">
            {displayTags.map((tag, index) => (
              <span key={index} className="proj-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};