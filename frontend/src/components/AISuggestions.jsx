import { useState } from 'react';
import axios from 'axios';

function AISuggestions({ resumeData, setLoading }) {
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState('');

  const getSuggestions = async () => {
    setLoading(true);
    setError('');
    setSuggestions([]);
    
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await axios.post(`${apiUrl}/api/suggestions`, { resumeData });
      setSuggestions(response.data.suggestions);
    } catch (err) {
      console.error('Error getting AI suggestions:', err);
      setError('Failed to get AI suggestions. Make sure the OpenAI API key is configured in the backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">AI-Powered Resume Suggestions</h2>
        <p className="text-gray-600">
          Get intelligent recommendations to improve your resume based on best practices and industry standards.
        </p>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <button
        onClick={getSuggestions}
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-semibold mb-6"
      >
        🤖 Get AI Suggestions
      </button>

      {suggestions.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Recommendations:</h3>
          {Array.isArray(suggestions) ? (
            suggestions.map((suggestion, index) => (
              <div key={index} className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                <h4 className="font-semibold text-gray-800 mb-2">
                  {typeof suggestion === 'object' ? suggestion.title : `Suggestion ${index + 1}`}
                </h4>
                <p className="text-gray-700 text-sm">
                  {typeof suggestion === 'object' ? suggestion.description : String(suggestion)}
                </p>
              </div>
            ))
          ) : (
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <pre className="text-sm text-gray-700 whitespace-pre-wrap">{JSON.stringify(suggestions, null, 2)}</pre>
            </div>
          )}
        </div>
      )}

      {suggestions.length === 0 && !error && (
        <div className="text-center py-12 text-gray-500">
          <p className="mb-2">👆 Click the button above to get AI-powered suggestions</p>
          <p className="text-sm">Make sure you have configured your OpenAI API key in the backend</p>
        </div>
      )}
    </div>
  );
}

export default AISuggestions;

