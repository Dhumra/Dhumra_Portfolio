
export const ProjectCard = ({ project }) => {
  return (
    <div className="custom-project-card">
      <div className="custom-project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="custom-project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-buttons">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <button>GitHub</button>
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="ms-2">
            <button>Live Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};
