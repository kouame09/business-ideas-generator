import React, { useState } from "react";
import countries from "country-list";

function InputForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    budget: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="text"
          name="projectName"
          placeholder="Nom du projet"
          value={formData.projectName}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg pr-10 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
          required
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="relative">
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
          required
        ></textarea>
      </div>

      <div className="relative">
        <input
          type="number"
          name="budget"
          placeholder="Budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      <div className="relative">
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg appearance-none pr-10 focus:border-blue-500 focus:ring-blue-500 focus:outline-none"
          required
        >
          <option value="">Sélectionnez un pays</option>
          {countries.getNames().map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>

      <button
        type="submit"
        className="w-full button bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Générer des idées
      </button>
    </form>
  );
}

export default InputForm;