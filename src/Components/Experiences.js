import Project from "./Project";
import { useState } from "react";
import {projectsList} from "../Variables/experiences";
import AddExperience from "./AddExperience";

export default function Experiences(){
  const [projects,setProjects] = useState(projectsList)
    const content = projects.map(project => <Project key = {project.id} project = {project}/>)
    return (
        <section className="w-full bg-gray-100 p-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Professional Experiences</h2>
            
            <div className="mt-6 space-y-6">    
              {content}
            </div>
            <br></br>
            <AddExperience setProjects={setProjects} />
          </div>
        </section>
      );
}