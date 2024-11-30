import Project from "./Project";
import { useState } from "react";
import { projectsList } from "../Variables/projectsList";
import AddProject from "./AddProject";

export default function Projects() {
  const [projects, setProjects] = useState(projectsList)
  const [showAddProject, setShowAddProject] = useState(false);
  const content = projects.map(project => <Project key={project.id} project={project} />)
  return (
    <section className="w-full bg-white p-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Projects</h2>

        <div className="mt-6 space-y-6">
          {content}
        </div>
        <br />
        <button
          onClick={() => setShowAddProject((prev) => !prev)}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          {showAddProject ? "Hide Form" : "Add a Project"}
        </button>
        <br />
        {showAddProject && <AddProject setProjects={setProjects} />}

      </div>
    </section>
  );
}