import { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import AISuggestions from './components/AISuggestions';

function App() {
  const [resumeData, setResumeData] = useState({
    _id: null,
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      linkedIn: '',
      portfolio: '',
      summary: ''
    },
    experience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: []
  });

  const [activeTab, setActiveTab] = useState('form');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (section, field, value) => {
    setResumeData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleArrayChange = (section, index, field, value) => {
    setResumeData(prev => {
      const newArray = [...prev[section]];
      newArray[index][field] = value;
      return {
        ...prev,
        [section]: newArray
      };
    });
  };

  const addItem = (section, newItem) => {
    setResumeData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  const removeItem = (section, index) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800">Smart Resume Builder</h1>
          <p className="text-sm text-gray-600">AI-Powered Resume Generator</p>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-6 py-3 font-medium text-sm transition-colors ${
                activeTab === 'form'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <i className="mr-2">📝</i>Build Resume
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-6 py-3 font-medium text-sm transition-colors ${
                activeTab === 'preview'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <i className="mr-2">👁️</i>Preview
            </button>
            <button
              onClick={() => setActiveTab('suggestions')}
              className={`px-6 py-3 font-medium text-sm transition-colors ${
                activeTab === 'suggestions'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <i className="mr-2">💡</i>AI Suggestions
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-center">Processing...</p>
            </div>
          </div>
        )}

        {activeTab === 'form' && (
          <ResumeForm
            resumeData={resumeData}
            handleInputChange={handleInputChange}
            handleArrayChange={handleArrayChange}
            addItem={addItem}
            removeItem={removeItem}
            setLoading={setLoading}
            setResumeData={setResumeData}
          />
        )}

        {activeTab === 'preview' && (
          <ResumePreview
            resumeData={resumeData}
            setLoading={setLoading}
          />
        )}

        {activeTab === 'suggestions' && (
          <AISuggestions
            resumeData={resumeData}
            setLoading={setLoading}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-600">
          <p>Smart Resume Builder © 2024 | Powered by AI</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

