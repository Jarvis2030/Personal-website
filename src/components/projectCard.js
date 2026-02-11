import { Col} from "react-bootstrap"
import { Link } from "react-router-dom"

export const ProjectCard = ({title, description, imgUrl, slug}) =>{
    return (
        <Col sm={6} md = {4}>
        <Link to={`/projects/${slug}`} className="project-link">
        <div className="proj-imgbox">
            <img src={imgUrl}></img>
            <div className="proj-txt">
                <h4>{title}</h4>
                <span>
                    {description}
                </span>
            </div>
        </div>
        </Link>
        </Col>
    )

}