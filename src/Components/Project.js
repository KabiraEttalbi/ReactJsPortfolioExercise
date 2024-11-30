
export default function Project({project}){
    return(
        <div >
            <h3 className="text-xl font-semibold text-gray-700">
            {project.title}
            </h3>
            <p className="text-gray-600">{project.date}</p>
            <ul className="list-disc list-inside text-gray-600 mt-2 ml-4">
            <li>{project.content}</li>
            </ul>
      </div>
    )
}
