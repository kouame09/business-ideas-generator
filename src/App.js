import React, { useState } from 'react';
import InputForm from './components/InputForm';
import ResponseArea from './components/ResponseArea';
import { generateIdeas } from './services/api';

function App() {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      const generatedIdeas = await generateIdeas(formData);
      setIdeas(generatedIdeas);
    } catch (error) {
      console.error('Error generating ideas:', error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-bold mb-5 text-center">Générateur d'idées de business</h1>
          <InputForm onSubmit={handleSubmit} />
          <ResponseArea ideas={ideas} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default App;