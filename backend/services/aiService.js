const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function getAISuggestions(resumeData) {
  try {
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'your_openai_api_key_here') {
      throw new Error('OpenAI API key not configured. Please add it to .env file.');
    }

    // Prepare prompt for AI suggestions
    const prompt = `Analyze the following resume and provide 5-7 specific, actionable suggestions for improvement. Focus on:
1. Overall structure and formatting
2. Content quality and impact
3. Keywords and ATS optimization
4. Skill presentation
5. Achievements and quantifiable results
6. Professional summary/objective
7. Any missing but recommended sections

Resume Data:
${JSON.stringify(resumeData, null, 2)}

Please provide a JSON array of suggestions, each with a title and a detailed description.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a professional career counselor and resume expert. Analyze resumes and provide specific, actionable advice to help job seekers create impactful resumes."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    const response = completion.choices[0].message.content;
    
    // Try to parse as JSON, fallback to formatted text
    try {
      const parsed = JSON.parse(response);
      return parsed;
    } catch {
      // If not JSON, format as array of suggestions
      return parseTextSuggestions(response);
    }
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Failed to get AI suggestions: ' + error.message);
  }
}

function parseTextSuggestions(text) {
  const suggestions = [];
  const lines = text.split('\n');
  
  let currentTitle = '';
  let currentDescription = '';
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line.match(/^\d+[\.\)]/) || line.match(/^[A-Z][^a-z]*$/)) {
      // This might be a title
      if (currentTitle && currentDescription) {
        suggestions.push({
          title: currentTitle,
          description: currentDescription.trim()
        });
      }
      currentTitle = line;
      currentDescription = '';
    } else if (line.length > 0) {
      currentDescription += line + ' ';
    }
  }
  
  if (currentTitle && currentDescription) {
    suggestions.push({
      title: currentTitle,
      description: currentDescription.trim()
    });
  }
  
  return suggestions.length > 0 ? suggestions : [
    {
      title: 'AI Analysis',
      description: text
    }
  ];
}

module.exports = {
  getAISuggestions
};

