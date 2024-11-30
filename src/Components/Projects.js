import Project from "./Project";
import { useState } from "react";
import { projectsList } from "../Variables/projectsList";
import AddProject from "./AddProject";

export default function Projects(){
    const [projects,setProjects] = useState(projectsList)
    const content = projects.map(project => <Project key = {project.id} project = {project}/>)
    return (
        <section className="w-full bg-white p-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Projects</h2>
            
            <div className="mt-6 space-y-6">
                {content}
            </div>
            <br></br>
            <AddProject setProjects={setProjects} />
          </div>
        </section>
      );
}