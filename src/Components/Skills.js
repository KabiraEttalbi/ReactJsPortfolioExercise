import { useState } from "react"
import { skillsList } from '../Variables/skillsList';
import AddSkill from "./AddSkill";


export default function Skills(){
    const [skills,setSkills] = useState(skillsList)
    const progLang = skills.filter(skill => skill.type === "Programming Languages").map(skill => <li key = {skill.id}>{skill.title}</li>);
    const devTools = skills.filter(skill => skill.type === "Development Tools").map(skill => <li key = {skill.id}>{skill.title}</li>);
    const frameLib = skills.filter(skill => skill.type === "Frameworks and Libraries").map(skill => <li key = {skill.id}>{skill.title}</li>)
    const databases = skills.filter(skill => skill.type === "Databases").map(skill => <li key = {skill.id}>{skill.title}</li>)

    return (
        <section className="w-full bg-white p-8">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Skills</h2>
    
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                
                <h3 className="text-xl font-semibold text-gray-700">Programming Languages</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  {progLang}
                </ul>
              </div>
    
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Development Tools</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  {devTools}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-700">Frameworks and Libraries</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  {frameLib}
                </ul>
              </div>
    
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Databases</h3>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  {databases}
                </ul>
              </div>
    
            </div>
            <br></br>
            <AddSkill setSkills={setSkills} />
          </div>
        </section>
      );
}