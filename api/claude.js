export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { prompt, apiKey, modelProvider } = req.body;
  if (!apiKey) {
    res.status(400).json({ error: 'No API key provided. Please enter your key above.' });
    return;
  }
  if (!modelProvider) {
    res.status(400).json({ error: 'No model/provider selected.' });
    return;
  }

  try {
    let response, data, email;
    if (modelProvider === 'openai-gpt-4o') {
      // OpenAI GPT-4o
      response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 500
        })
      });
      data = await response.json();
      email = data.choices?.[0]?.message?.content;
    } else if (modelProvider === 'openai-gpt-4-mini') {
      // OpenAI GPT-4o Mini (or similar)
      response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 500
        })
      });
      data = await response.json();
      email = data.choices?.[0]?.message?.content;
    } else if (modelProvider === 'gemini-pro') {
      // Gemini Pro
      response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + apiKey, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });
      data = await response.json();
      email = data.candidates?.[0]?.content?.parts?.[0]?.text;
    } else if (modelProvider === 'anthropic-claude-3') {
      // Anthropic Claude 3
      response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'claude-3-opus-20240229',
          max_tokens: 500,
          messages: [{ role: 'user', content: prompt }]
        })
      });
      data = await response.json();
      email = data.content?.[0]?.text;
    } else {
      res.status(400).json({ error: 'Unknown model/provider selected.' });
      return;
    }

    if (!response.ok) {
      res.status(response.status).json({ error: data.error?.message || 'Error from model provider.' });
      return;
    }

    res.status(200).json({ email: email || 'Error generating email.' });
  } catch (error) {
    res.status(500).json({ error: 'Error generating email.' });
  }
} 