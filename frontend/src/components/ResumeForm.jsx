import { useState } from 'react';
import axios from 'axios';

function ResumeForm({ resumeData, handleInputChange, handleArrayChange, addItem, removeItem, setLoading, setResumeData }) {
  const [saveMessage, setSaveMessage] = useState('');

  const saveResume = async () => {
    setLoading(true);
    setSaveMessage('');
    try {
      const response = await axios.post('http://localhost:5000/api/resume', resumeData);
      setResumeData(response.data);
      setSaveMessage('✓ Resume saved successfully!');
      setTimeout(() => setSaveMessage(''), 3000);
    } catch (error) {
      setSaveMessage('✗ Failed to save resume');
      console.error('Error saving resume:', error);
    } finally {
      setLoading(false);
    }
  };

  const addExperience = () => {
    addItem('experience', {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: '',
      achievements: []
    });
  };

  const addEducation = () => {
    addItem('education', {
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: '',
      achievements: []
    });
  };

  const addSkill = () => {
    addItem('skills', { name: '', level: 'intermediate' });
  };

  const addProject = () => {
    addItem('projects', {
      name: '',
      description: '',
      technologies: [],
      link: ''
    });
  };

  const addCertification = () => {
    addItem('certifications', {
      name: '',
      issuer: '',
      date: '',
      link: ''
    });
  };

  const addLanguage = () => {
    addItem('languages', {
      name: '',
      proficiency: 'Intermediate'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
      {saveMessage && (
        <div className={`mb-4 p-3 rounded ${
          saveMessage.includes('✓') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {saveMessage}
        </div>
      )}

      {/* Personal Information */}
      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
            <input
              type="text"
              value={resumeData.personalInfo.firstName}
              onChange={(e) => handleInputChange('personalInfo', 'firstName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
            <input
              type="text"
              value={resumeData.personalInfo.lastName}
              onChange={(e) => handleInputChange('personalInfo', 'lastName', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <input
              type="email"
              value={resumeData.personalInfo.email}
              onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              value={resumeData.personalInfo.phone}
              onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              value={resumeData.personalInfo.location}
              onChange={(e) => handleInputChange('personalInfo', 'location', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
            <input
              type="url"
              value={resumeData.personalInfo.linkedIn}
              onChange={(e) => handleInputChange('personalInfo', 'linkedIn', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio</label>
            <input
              type="url"
              value={resumeData.personalInfo.portfolio}
              onChange={(e) => handleInputChange('personalInfo', 'portfolio', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
          <textarea
            value={resumeData.personalInfo.summary}
            onChange={(e) => handleInputChange('personalInfo', 'summary', e.target.value)}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="A brief overview of your professional background and skills..."
          />
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800 border-b pb-2 flex-1">Professional Experience</h2>
          <button
            onClick={addExperience}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            + Add Experience
          </button>
        </div>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-md mb-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-800">Experience {index + 1}</h3>
              <button
                onClick={() => removeItem('experience', index)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => handleArrayChange('experience', index, 'company', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                <input
                  type="text"
                  value={exp.position}
                  onChange={(e) => handleArrayChange('experience', index, 'position', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <input
                  type="text"
                  value={exp.startDate}
                  onChange={(e) => handleArrayChange('experience', index, 'startDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., Jan 2020"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                <input
                  type="text"
                  value={exp.endDate}
                  onChange={(e) => handleArrayChange('experience', index, 'endDate', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="e.g., Dec 2023 or Present"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={exp.description}
                onChange={(e) => handleArrayChange('experience', index, 'description', e.target.value)}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800 border-b pb-2 flex-1">Education</h2>
          <button
            onClick={addEducation}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            + Add Education
          </button>
        </div>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-md mb-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-800">Education {index + 1}</h3>
              <button
                onClick={() => removeItem('education', index)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => handleArrayChange('education', index, 'institution', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => handleArrayChange('education', index, 'degree', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Field of Study</label>
                <input
                  type="text"
                  value={edu.field}
                  onChange={(e) => handleArrayChange('education', index, 'field', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
                <input
                  type="text"
                  value={edu.gpa}
                  onChange={(e) => handleArrayChange('education', index, 'gpa', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800 border-b pb-2 flex-1">Skills</h2>
          <button
            onClick={addSkill}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            + Add Skill
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-md flex items-center gap-2">
              <input
                type="text"
                value={skill.name}
                onChange={(e) => handleArrayChange('skills', index, 'name', e.target.value)}
                className="flex-1 px-2 py-1 border border-gray-300 rounded-md"
                placeholder="Skill name"
              />
              <select
                value={skill.level}
                onChange={(e) => handleArrayChange('skills', index, 'level', e.target.value)}
                className="px-2 py-1 border border-gray-300 rounded-md"
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
              <button
                onClick={() => removeItem('skills', index)}
                className="text-red-600 hover:text-red-800"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800 border-b pb-2 flex-1">Projects</h2>
          <button
            onClick={addProject}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            + Add Project
          </button>
        </div>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-md mb-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-gray-800">Project {index + 1}</h3>
              <button
                onClick={() => removeItem('projects', index)}
                className="text-red-600 hover:text-red-800"
              >
                Remove
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                <input
                  type="text"
                  value={project.name}
                  onChange={(e) => handleArrayChange('projects', index, 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Link</label>
                <input
                  type="url"
                  value={project.link}
                  onChange={(e) => handleArrayChange('projects', index, 'link', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={project.description}
                  onChange={(e) => handleArrayChange('projects', index, 'description', e.target.value)}
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={saveResume}
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition font-semibold"
        >
          💾 Save Resume
        </button>
      </div>
    </div>
  );
}

export default ResumeForm;

