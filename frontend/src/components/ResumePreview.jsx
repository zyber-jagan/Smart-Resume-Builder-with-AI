import { useRef } from 'react';
import axios from 'axios';

function ResumePreview({ resumeData, setLoading }) {
  const previewRef = useRef(null);

  const generatePDF = async () => {
    setLoading(true);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await axios.post(
        `${apiUrl}/api/generate-pdf`,
        { resumeData },
        { responseType: 'blob' }
      );
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'resume.pdf');
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please make sure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  const { personalInfo, experience, education, skills, projects, certifications, languages } = resumeData;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Action Buttons */}
      <div className="no-print mb-4 flex justify-end gap-2">
        <button
          onClick={generatePDF}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          📄 Export as PDF
        </button>
        <button
          onClick={() => window.print()}
          className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
        >
          🖨️ Print
        </button>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-section, .print-section * {
            visibility: visible;
          }
          .print-section {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* Resume Preview */}
      <div ref={previewRef} className="print-section bg-white p-8 shadow-lg print:shadow-none">
        {/* Header */}
        <div className="text-center border-b-2 border-gray-800 pb-4 mb-6 print:border-gray-900">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <div className="text-sm text-gray-700 space-x-3">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>| {personalInfo.phone}</span>}
            {personalInfo.location && <span>| {personalInfo.location}</span>}
            {personalInfo.linkedIn && <span>| LinkedIn: {personalInfo.linkedIn}</span>}
            {personalInfo.portfolio && <span>| {personalInfo.portfolio}</span>}
          </div>
        </div>

        {/* Professional Summary */}
        {personalInfo.summary && (
          <div className="mb-6 print:mb-4">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-800 pb-1 mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience && experience.length > 0 && (
          <div className="mb-6 print:mb-4">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-800 pb-1 mb-3">
              PROFESSIONAL EXPERIENCE
            </h2>
            {experience.map((exp, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-base text-gray-900">{exp.position}</h3>
                    <p className="text-sm text-gray-700 italic">{exp.company}</p>
                  </div>
                  <p className="text-sm text-gray-700 italic">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </p>
                </div>
                {exp.description && (
                  <p className="text-sm text-gray-700 leading-relaxed">{exp.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education && education.length > 0 && (
          <div className="mb-6 print:mb-4">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-800 pb-1 mb-3">
              EDUCATION
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-bold text-base text-gray-900">{edu.degree} in {edu.field}</h3>
                    <p className="text-sm text-gray-700 italic">{edu.institution}</p>
                  </div>
                  <p className="text-sm text-gray-700 italic">
                    {edu.startDate} - {edu.endDate}
                  </p>
                </div>
                {edu.gpa && (
                  <p className="text-sm text-gray-700">GPA: {edu.gpa}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {skills && skills.length > 0 && (
          <div className="mb-6 print:mb-4">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-800 pb-1 mb-3">
              SKILLS
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm"
                >
                  {skill.name} ({skill.level})
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects && projects.length > 0 && (
          <div className="mb-6 print:mb-4">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-800 pb-1 mb-3">
              PROJECTS
            </h2>
            {projects.map((project, index) => (
              <div key={index} className="mb-3 last:mb-0">
                <h3 className="font-bold text-base text-gray-900">{project.name}</h3>
                {project.description && (
                  <p className="text-sm text-gray-700 leading-relaxed">{project.description}</p>
                )}
                {project.link && (
                  <p className="text-sm text-blue-600">Link: {project.link}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {certifications && certifications.length > 0 && (
          <div className="mb-6 print:mb-4">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-800 pb-1 mb-3">
              CERTIFICATIONS
            </h2>
            {certifications.map((cert, index) => (
              <div key={index} className="mb-2 last:mb-0">
                <h3 className="font-bold text-base text-gray-900">{cert.name}</h3>
                <p className="text-sm text-gray-700 italic">{cert.issuer} - {cert.date}</p>
                {cert.link && (
                  <p className="text-sm text-blue-600">{cert.link}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Languages */}
        {languages && languages.length > 0 && (
          <div className="mb-6 print:mb-4">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-800 pb-1 mb-3">
              LANGUAGES
            </h2>
            <ul className="list-disc list-inside">
              {languages.map((lang, index) => (
                <li key={index} className="text-sm text-gray-700">
                  {lang.name} - {lang.proficiency}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumePreview;

