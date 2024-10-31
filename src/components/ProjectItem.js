const ProjectItem = ({ project }) => {
  return (
      <div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className="technologies">
              {project.technologies.map((tech, index) => (
                  <span key={index}>{tech}</span> // Make sure this renders span elements
              ))}
          </div>
      </div>
  );
};

export default ProjectItem;
