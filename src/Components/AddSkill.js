import React, { useState } from "react";

export default function AddSkill({ setSkills }) {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");

  const handleClick = () => {
    if (type && title) {
      setSkills((prevSkills) => [
        ...prevSkills,
        { id: prevSkills.length + 1, type, title },
      ]);
      setType("");
      setTitle("");
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Add a Skill</h3>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleClick();
        }}
      >
        <div>
          <label htmlFor="type" className="block text-gray-600 font-medium mb-1">
            Skill Type
          </label>
          <select
            id="type"
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="" disabled hidden>
              Select a type
            </option>
            <option value="Programming Languages">Programming Languages</option>
            <option value="Development Tools">Development Tools</option>
            <option value="Frameworks and Libraries">Frameworks and Libraries</option>
            <option value="Databases">Databases</option>
          </select>
        </div>

        <div>
          <label htmlFor="title" className="block text-gray-600 font-medium mb-1">
            Skill Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., JavaScript"
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
