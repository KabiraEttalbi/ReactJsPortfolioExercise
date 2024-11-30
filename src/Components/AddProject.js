import { useState } from "react";

export default function AddProject({ setProjects, type }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const handleClick = () => {
    if (title && date && content) {
      setProjects((prevProjects) => [
        ...prevProjects,
        { id: prevProjects.length + 1, title, date, content },
      ]);
      setTitle("");
      setDate("");
      setContent("");
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">
        Add a Project{" "}
      </h3>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <div>
          <label
            htmlFor="title"
            className="block text-gray-600 font-medium mb-1"
          >
            Project Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., Institute of Technology – Sidi Bennour"
          />
        </div>
        <div>
          <label
            htmlFor="date"
            className="block text-gray-600 font-medium mb-1"
          >
            Project Date
          </label>
          <input
            id="date"
            name="date"
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., (December 2023 - January 2024)"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-gray-600 font-medium mb-1"
          >
            Project Content
          </label>
          <input
            id="content"
            name="content"
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., Development of an e-commerce website"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Add
        </button>
      </form>
    </div>
  );
}
