// src/components/Projects.jsx
import projectData from "../data/projectData";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="project-grid">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};


