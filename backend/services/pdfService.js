const puppeteer = require('puppeteer');

async function generatePDF(resumeData) {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    // Generate HTML for the resume
    const html = generateResumeHTML(resumeData);
    
    await page.setContent(html, { waitUntil: 'networkidle0' });
    
    // Generate PDF
    const pdfBuffer = await page.pdf({
      format: 'Letter',
      printBackground: true,
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in'
      }
    });
    
    return pdfBuffer;
  } catch (error) {
    console.error('PDF generation error:', error);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

function generateResumeHTML(resumeData) {
  const { personalInfo, experience, education, skills, projects, certifications, languages } = resumeData;
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Calibri', 'Arial', sans-serif;
      font-size: 11pt;
      line-height: 1.5;
      color: #333;
      padding: 20px;
    }
    
    .header {
      text-align: center;
      border-bottom: 2px solid #2c3e50;
      padding-bottom: 15px;
      margin-bottom: 20px;
    }
    
    .header h1 {
      font-size: 24pt;
      color: #2c3e50;
      margin-bottom: 8px;
    }
    
    .contact-info {
      font-size: 10pt;
      color: #555;
    }
    
    .contact-info span {
      margin: 0 8px;
    }
    
    .section {
      margin-bottom: 20px;
    }
    
    .section-title {
      font-size: 14pt;
      font-weight: bold;
      color: #2c3e50;
      border-bottom: 1px solid #2c3e50;
      margin-bottom: 10px;
      padding-bottom: 3px;
    }
    
    .summary {
      text-align: justify;
      margin-bottom: 15px;
    }
    
    .item {
      margin-bottom: 15px;
    }
    
    .item-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 5px;
    }
    
    .item-title {
      font-weight: bold;
      font-size: 12pt;
    }
    
    .item-meta {
      font-size: 10pt;
      color: #666;
      font-style: italic;
    }
    
    .item-description {
      margin-top: 5px;
      font-size: 10pt;
    }
    
    ul {
      margin-left: 20px;
    }
    
    li {
      margin-bottom: 3px;
    }
    
    .skills-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    
    .skill-item {
      background: #ecf0f1;
      padding: 4px 12px;
      border-radius: 4px;
      font-size: 10pt;
    }
    
    .print-break {
      page-break-before: always;
    }
  </style>
</head>
<body>
  <!-- Header -->
  <div class="header">
    <h1>${personalInfo?.firstName || ''} ${personalInfo?.lastName || ''}</h1>
    <div class="contact-info">
      ${personalInfo?.email ? `<span>${personalInfo.email}</span>` : ''}
      ${personalInfo?.phone ? `<span>${personalInfo.phone}</span>` : ''}
      ${personalInfo?.location ? `<span>${personalInfo.location}</span>` : ''}
      ${personalInfo?.linkedIn ? `<span>LinkedIn: ${personalInfo.linkedIn}</span>` : ''}
      ${personalInfo?.portfolio ? `<span>${personalInfo.portfolio}</span>` : ''}
    </div>
  </div>
  
  <!-- Professional Summary -->
  ${personalInfo?.summary ? `
  <div class="section">
    <div class="section-title">PROFESSIONAL SUMMARY</div>
    <div class="summary">${personalInfo.summary}</div>
  </div>
  ` : ''}
  
  <!-- Experience -->
  ${experience && experience.length > 0 ? `
  <div class="section">
    <div class="section-title">PROFESSIONAL EXPERIENCE</div>
    ${experience.map(exp => `
      <div class="item">
        <div class="item-header">
          <div>
            <div class="item-title">${exp.position || ''}</div>
            <div class="item-meta">${exp.company || ''}</div>
          </div>
          <div class="item-meta">${exp.startDate || ''} - ${exp.endDate || 'Present'}</div>
        </div>
        ${exp.description ? `<div class="item-description">${exp.description}</div>` : ''}
        ${exp.achievements && exp.achievements.length > 0 ? `
          <ul>
            ${exp.achievements.map(ach => `<li>${ach}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    `).join('')}
  </div>
  ` : ''}
  
  <!-- Education -->
  ${education && education.length > 0 ? `
  <div class="section">
    <div class="section-title">EDUCATION</div>
    ${education.map(edu => `
      <div class="item">
        <div class="item-header">
          <div>
            <div class="item-title">${edu.degree || ''} in ${edu.field || ''}</div>
            <div class="item-meta">${edu.institution || ''}</div>
          </div>
          <div class="item-meta">${edu.startDate || ''} - ${edu.endDate || ''}</div>
        </div>
        ${edu.gpa ? `<div class="item-description">GPA: ${edu.gpa}</div>` : ''}
        ${edu.achievements && edu.achievements.length > 0 ? `
          <ul>
            ${edu.achievements.map(ach => `<li>${ach}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    `).join('')}
  </div>
  ` : ''}
  
  <!-- Skills -->
  ${skills && skills.length > 0 ? `
  <div class="section">
    <div class="section-title">SKILLS</div>
    <div class="skills-list">
      ${skills.map(skill => `<span class="skill-item">${skill.name || ''} (${skill.level || ''})</span>`).join('')}
    </div>
  </div>
  ` : ''}
  
  <!-- Projects -->
  ${projects && projects.length > 0 ? `
  <div class="section">
    <div class="section-title">PROJECTS</div>
    ${projects.map(project => `
      <div class="item">
        <div class="item-title">${project.name || ''}</div>
        ${project.technologies && project.technologies.length > 0 ? `
          <div class="item-meta">Technologies: ${project.technologies.join(', ')}</div>
        ` : ''}
        ${project.description ? `<div class="item-description">${project.description}</div>` : ''}
        ${project.link ? `<div class="item-description">Link: ${project.link}</div>` : ''}
      </div>
    `).join('')}
  </div>
  ` : ''}
  
  <!-- Certifications -->
  ${certifications && certifications.length > 0 ? `
  <div class="section">
    <div class="section-title">CERTIFICATIONS</div>
    ${certifications.map(cert => `
      <div class="item">
        <div class="item-title">${cert.name || ''}</div>
        <div class="item-meta">${cert.issuer || ''} - ${cert.date || ''}</div>
        ${cert.link ? `<div class="item-description">${cert.link}</div>` : ''}
      </div>
    `).join('')}
  </div>
  ` : ''}
  
  <!-- Languages -->
  ${languages && languages.length > 0 ? `
  <div class="section">
    <div class="section-title">LANGUAGES</div>
    <ul>
      ${languages.map(lang => `<li>${lang.name || ''} - ${lang.proficiency || ''}</li>`).join('')}
    </ul>
  </div>
  ` : ''}
</body>
</html>
  `;
}

module.exports = {
  generatePDF
};


