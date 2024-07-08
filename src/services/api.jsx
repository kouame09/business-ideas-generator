import axios from 'axios';

const API_KEY = 'Mettre la clé ici';
const API_URL = 'https://api.openai.com/v1/chat/completions';

export const generateIdeas = async (formData) => {
  const { projectName, description, budget, country } = formData;

  const prompt = `Générez 3 idées de business pour un projet nommé "${projectName}" avec la description suivante : "${description}". Le budget est de ${budget} et le pays cible est ${country}. Présentez chaque idée sur une nouvelle ligne.`;

  try {
    const response = await axios.post(
      API_URL,
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        max_tokens: 500,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
      }
    );

    const ideas = response.data.choices[0].message.content.split('\n').filter(idea => idea.trim() !== '');
    return ideas;
  } catch (error) {
    console.error('Error calling ChatGPT API:', error);
    throw error;
  }
};