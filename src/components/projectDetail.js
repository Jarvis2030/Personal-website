import { useParams, Link, Navigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { projectsData } from "../data/ProjectsData";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/" replace />;

  return (
    <section className="project-detail">
      <Container className="project-detail-container">
        <Link to="/" className="pd-back">
          ← Back
        </Link>

        {/* HERO */}
        <header className="pd-hero">
          <h1 className="pd-title">{project.title}</h1>

          <div className="pd-meta">
            <div className="pd-meta-item">
              <div className="pd-meta-label">Role</div>
              <div className="pd-meta-value">{project.role}</div>
            </div>

            <div className="pd-meta-item">
              <div className="pd-meta-label">Year</div>
              <div className="pd-meta-value">{project.year}</div>
            </div>
          </div>
        </header>

        {/* OVERVIEW */}
        {(project.overviewTitle || project.overview) && (
          <section className="pd-overview">
            {project.overviewTitle && (
              <h2 className="pd-h2">{project.overviewTitle}</h2>
            )}
            {project.overview && <p className="pd-p">{project.overview}</p>}
          </section>
        )}

       {/* BLOCKS */}
        <main className="pd-body">
          {project.blocks?.map((block, idx) => {
            if (block.type === "section") {
              const leftAlignedSection = !!block.sectionheading;

              // special layout for Core Techniques & Stack
              if (block.heading === "Core Techniques & Stack" && Array.isArray(block.groups)) {
                return (
                  <section key={idx} className="pd-section">
                    {block.heading && <h2 className="pd-h2">{block.heading}</h2>}
                    {block.text && <p className="pd-sub pd-sub-center">{block.text}</p>}

                    <div className="pd-tech-grid">
                      {block.groups.map((group, gidx) => (
                        <div key={gidx} className="pd-tech-card">
                          <h3 className="pd-tech-title">{group.title}</h3>

                          {group.text && <p className="pd-tech-text">{group.text}</p>}

                          {Array.isArray(group.items) && group.items.length > 0 && (
                            <ul className="pd-tech-list">
                              {group.items.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>
                );
              }

              return (
                <section
                  key={idx}
                  className={`pd-section ${leftAlignedSection ? "pd-section-left" : ""}`}
                >
                  {block.heading && <h2 className="pd-h2">{block.heading}</h2>}
                  {block.subheading && <h3 className="pd-h3">{block.subheading}</h3>}
                  {block.sectionheading && <h4 className="pd-h4">{block.sectionheading}</h4>}

                  {block.subtext && <p className="pd-sub">{block.subtext}</p>}
                  {block.text && <p className="pd-p">{block.text}</p>}

                  {Array.isArray(block.bullets) && block.bullets.length > 0 && (
                    <ul className="pd-list">
                      {block.bullets.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}  
                  {/*paragraph*/}
                  {Array.isArray(block.paragraphs) &&
                    block.paragraphs.map((p, i) => (
                      <p key={i} className="pd-p">
                        {p}
                      </p>
                    ))}
                  {/*image*/}
                  {Array.isArray(block.images) && block.images.length > 0 && (
                    <div
                      className={
                        block.images.length === 1
                          ? "pd-imggrid-one"
                          :block.images.length === 2
                          ? "pd-imggrid-two"
                          : "pd-imggrid-many"
                      }
                    >
                      {block.images.map((img, i) => (
                        <figure key={i} className="pd-figure">
                          <img className="pd-img" src={img.src} alt={img.alt || ""} />
                          {img.caption && (
                            <figcaption className="pd-caption">
                              {img.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  )}
                  {/*video*/}
                  {Array.isArray(block.videos) && block.videos.length > 0 && (
                    <div
                      className={
                        block.videos.length === 1
                          ? "pd-videogrid-one"
                          : block.videos.length === 2
                          ? "pd-videogrid-two"
                          : "pd-videogrid-many"
                      }
                    >
                      {block.videos.map((video, i) => (
                        <figure key={i} className="pd-figure">
                          <video
                            className="pd-video"
                            controls
                            playsInline
                            preload="metadata"
                          >
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>

                          {video.caption && (
                            <figcaption className="pd-caption">
                              {video.caption}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  )}
                </section>
              );
            }

            if (block.type === "text") {
              return (
                <p key={idx} className="pd-p">
                  {block.text}
                </p>
              );
            }

            return null;
          })}
        </main>
      </Container>
    </section>
  );
};



