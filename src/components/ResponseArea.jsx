import React from 'react';

function ResponseArea({ ideas, loading }) {
  if (loading) {
    return <div className="mt-4 text-center">Génération des idées en cours...</div>;
  }

  if (ideas.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-3">Idées générées :</h2>
      <ul className="space-y-2">
        {ideas.map((idea, index) => (
          <li key={index} className="bg-gray-100 p-3 rounded-md">{idea}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResponseArea;