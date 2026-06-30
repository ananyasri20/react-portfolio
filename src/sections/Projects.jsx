import Project from "../components/Project";
import { myProjects } from "../constants";

const Projects = () => {
  return (
    <section
    id="work"
     className="c-space section-spacing" >
      <h2 className="text-heading">My Projects</h2>

      <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {myProjects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;