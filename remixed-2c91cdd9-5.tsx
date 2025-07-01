import { useState, useEffect } from 'react';
import { Send, Copy, Check, Mail, Sparkles, MessageSquare, User, ExternalLink, ArrowRight, LogOut, BarChart3, FileText, Star, Search } from 'lucide-react';
import { Analytics } from "@vercel/analytics/next"
const TRANSLATIONS = {
  "en-US": {
    "emailWritingAssistant": "Email Writing Assistant",
    "transformThoughtsDescription": "Transform your thoughts into polished, professional emails with AI assistance",
    "yourThoughts": "Your Thoughts",
    "thoughtsPlaceholder": "Write what you want to communicate... Don't worry about grammar or structure - just get your ideas down.",
    "tipKeyboardShortcut": "💡 Tip: Press Cmd/Ctrl + Enter to generate your email",
    "emailTone": "Email Tone",
    "professionalTone": "Professional",
    "professionalDescription": "Clear and business-appropriate",
    "warmTone": "Warm",
    "warmDescription": "Friendly and approachable",
    "conciseTone": "Concise",
    "conciseDescription": "Brief and to the point",
    "formalTone": "Formal",
    "formalDescription": "Traditional and respectful",
    "casualTone": "Casual",
    "casualDescription": "Relaxed and conversational",
    "persuasiveTone": "Persuasive",
    "persuasiveDescription": "Compelling and convincing",
    "contextOptional": "Context (Optional)",
    "hide": "Hide",
    "show": "Show",
    "contextDescription": "Paste the email you're responding to for better context",
    "contextPlaceholder": "Paste the original email here...",
    "craftingEmail": "Crafting your email...",
    "generateEmail": "Generate Email",
    "generatedEmail": "Generated Email",
    "copied": "Copied!",
    "copy": "Copy",
    "sendEmail": "Send Email",
    "sendVia": "Send via",
    "gmail": "Gmail",
    "outlook": "Outlook",
    "yahooMail": "Yahoo Mail",
    "defaultEmail": "Default Email App",
    "to": "To",
    "subject": "Subject",
    "recipientPlaceholder": "recipient@example.com",
    "subjectPlaceholder": "Enter email subject",
    "emailWillAppearHere": "Your polished email will appear here",
    "getStartedPrompt": "Enter your thoughts and select a tone to get started",
    "proTips": "✨ Pro Tips",
    "tipBeSpecific": "• Be specific about what you want to achieve",
    "tipIncludeDetails": "• Include key details even if roughly written",
    "tipTryTones": "• Try different tones to see what works best",
    "tipAddContext": "• Add context for more personalized responses",
    "login": "Login",
    "register": "Register",
    "email": "Email",
    "password": "Password",
    "fullName": "Full Name",
    "loginToAccount": "Login to your account",
    "createAccount": "Create your account",
    "alreadyHaveAccount": "Already have an account?",
    "dontHaveAccount": "Don't have an account?",
    "logout": "Logout",
    "usageStats": "Usage Statistics",
    "emailsThisMonth": "Emails this month",
    "monthlyLimit": "Monthly limit",
    "totalEmails": "Total emails generated",
    "subscriptionType": "Subscription",
    "upgrade": "Upgrade Plan",
    "unlimited": "Unlimited",
    "history": "History",
    "templates": "Templates",
    "dashboard": "Dashboard",
    "preBuiltTemplates": "Pre-built Templates",
    "templateCategories": "Template Categories",
    "all": "All",
    "sales": "Sales",
    "support": "Support",
    "followUp": "Follow-up",
    "networking": "Networking",
    "business": "Business",
    "personal": "Personal",
    "apology": "Apology",
    "introduction": "Introduction",
    "useTemplate": "Use Template",
    "preview": "Preview",
    "searchTemplates": "Search templates...",
    "popularTemplates": "Popular Templates",
    "recentlyUsed": "Recently Used",
    "saveAsTemplate": "Save as Template",
    "templateName": "Template Name",
    "templateCategory": "Template Category",
    "saveTemplate": "Save Template",
    "customTemplates": "My Templates",
    "chooseTemplate": "Choose Template"
  },
  /* LOCALE_PLACEHOLDER_START */
  "es-ES": {
    "emailWritingAssistant": "Asistente de Redacción de Correos",
    "transformThoughtsDescription": "Transforma tus ideas en correos electrónicos pulidos y profesionales con asistencia de IA",
    "yourThoughts": "Tus Ideas",
    "thoughtsPlaceholder": "Escribe lo que quieres comunicar... No te preocupes por la gramática o estructura - solo plasma tus ideas.",
    "tipKeyboardShortcut": "💡 Consejo: Presiona Cmd/Ctrl + Enter para generar tu correo",
    "emailTone": "Tono del Correo",
    "professionalTone": "Profesional",
    "professionalDescription": "Claro y apropiado para negocios",
    "warmTone": "Cálido",
    "warmDescription": "Amigable y accesible",
    "conciseTone": "Conciso",
    "conciseDescription": "Breve y directo",
    "formalTone": "Formal",
    "formalDescription": "Tradicional y respetuoso",
    "casualTone": "Casual",
    "casualDescription": "Relajado y conversacional",
    "persuasiveTone": "Persuasivo",
    "persuasiveDescription": "Convincente y persuasivo",
    "contextOptional": "Contexto (Opcional)",
    "hide": "Ocultar",
    "show": "Mostrar",
    "contextDescription": "Pega el correo al que estás respondiendo para mejor contexto",
    "contextPlaceholder": "Pega el correo original aquí...",
    "craftingEmail": "Creando tu correo...",
    "generateEmail": "Generar Correo",
    "generatedEmail": "Correo Generado",
    "copied": "¡Copiado!",
    "copy": "Copiar",
    "sendEmail": "Enviar Correo",
    "sendVia": "Enviar vía",
    "gmail": "Gmail",
    "outlook": "Outlook",
    "yahooMail": "Yahoo Mail",
    "defaultEmail": "Aplicación de Correo",
    "to": "Para",
    "subject": "Asunto",
    "recipientPlaceholder": "destinatario@ejemplo.com",
    "subjectPlaceholder": "Ingresa el asunto del correo",
    "emailWillAppearHere": "Tu correo pulido aparecerá aquí",
    "getStartedPrompt": "Ingresa tus ideas y selecciona un tono para comenzar",
    "proTips": "✨ Consejos Pro",
    "tipBeSpecific": "• Sé específico sobre lo que quieres lograr",
    "tipIncludeDetails": "• Incluye detalles clave aunque estén escritos de forma básica",
    "tipTryTones": "• Prueba diferentes tonos para ver cuál funciona mejor",
    "tipAddContext": "• Agrega contexto para respuestas más personalizadas",
    "login": "Iniciar Sesión",
    "register": "Registrarse",
    "email": "Correo Electrónico",
    "password": "Contraseña",
    "fullName": "Nombre Completo",
    "loginToAccount": "Inicia sesión en tu cuenta",
    "createAccount": "Crea tu cuenta",
    "alreadyHaveAccount": "¿Ya tienes una cuenta?",
    "dontHaveAccount": "¿No tienes una cuenta?",
    "logout": "Cerrar Sesión",
    "usageStats": "Estadísticas de Uso",
    "emailsThisMonth": "Correos este mes",
    "monthlyLimit": "Límite mensual",
    "totalEmails": "Total de correos generados",
    "subscriptionType": "Suscripción",
    "upgrade": "Actualizar Plan",
    "unlimited": "Ilimitado",
    "history": "Historial",
    "templates": "Plantillas",
    "dashboard": "Panel de Control",
    "preBuiltTemplates": "Plantillas Predefinidas",
    "templateCategories": "Categorías de Plantillas",
    "all": "Todas",
    "sales": "Ventas",
    "support": "Soporte",
    "followUp": "Seguimiento",
    "networking": "Networking",
    "business": "Negocios",
    "personal": "Personal",
    "apology": "Disculpa",
    "introduction": "Presentación",
    "useTemplate": "Usar Plantilla",
    "preview": "Vista Previa",
    "searchTemplates": "Buscar plantillas...",
    "popularTemplates": "Plantillas Populares",
    "recentlyUsed": "Usadas Recientemente",
    "saveAsTemplate": "Guardar como Plantilla",
    "templateName": "Nombre de Plantilla",
    "templateCategory": "Categoría de Plantilla",
    "saveTemplate": "Guardar Plantilla",
    "customTemplates": "Mis Plantillas",
    "chooseTemplate": "Elegir Plantilla"
  }
  /* LOCALE_PLACEHOLDER_END */
};

const API_BASE_URL = 'http://localhost:8000';

// API service class
class ApiService {
  constructor() {
    this.token = localStorage.getItem('authToken');
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('authToken', token);
  }

  removeToken() {
    this.token = null;
    localStorage.removeItem('authToken');
  }

  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ detail: 'Unknown error' }));
      throw new Error(error.detail || 'Request failed');
    }

    return response.json();
  }

  // Auth endpoints
  async login(email, password) {
    const response = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    this.setToken(response.access_token);
    return response;
  }

  async register(email, password, fullName) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, full_name: fullName }),
    });
  }

  async getCurrentUser() {
    return this.request('/auth/me');
  }

  // Email endpoints
  async generateEmail(rawThoughts, tone, context = '') {
    return this.request('/emails/generate', {
      method: 'POST',
      body: JSON.stringify({
        raw_thoughts: rawThoughts,
        tone,
        context,
      }),
    });
  }

  async getEmailHistory(skip = 0, limit = 10) {
    return this.request(`/emails/history?skip=${skip}&limit=${limit}`);
  }

  // Usage stats
  async getUsageStats() {
    return this.request('/usage/stats');
  }

  // Templates
  async getTemplates(category = null) {
    const params = category ? `?category=${category}` : '';
    return this.request(`/templates${params}`);
  }

  async getPrebuiltTemplates(category = null) {
    const params = category ? `?category=${category}` : '';
    return this.request(`/templates/prebuilt${params}`);
  }

  async createTemplate(name, content, tone, category = null) {
    return this.request('/templates', {
      method: 'POST',
      body: JSON.stringify({ name, content, tone, category }),
    });
  }

  async useTemplate(templateData, customizations = {}, context = '') {
    return this.request('/templates/use', {
      method: 'POST',
      body: JSON.stringify({
        content: templateData.content,
        tone: templateData.tone,
        customizations,
        context,
      }),
    });
  }

  async deleteTemplate(templateId) {
    return this.request(`/templates/${templateId}`, {
      method: 'DELETE',
    });
  }

  async getTemplateCategories() {
    return this.request('/templates/categories');
  }
}

const appLocale = '{{APP_LOCALE}}';
const browserLocale = navigator.languages?.[0] || navigator.language || 'en-US';
const findMatchingLocale = (locale) => {
  if (TRANSLATIONS[locale]) return locale;
  const lang = locale.split('-')[0];
  const match = Object.keys(TRANSLATIONS).find(key => key.startsWith(lang + '-'));
  return match || 'en-US';
};
const locale = (appLocale !== '{{APP_LOCALE}}') ? findMatchingLocale(appLocale) : findMatchingLocale(browserLocale);
const t = (key) => TRANSLATIONS[locale]?.[key] || TRANSLATIONS['en-US'][key] || key;

// Pre-built templates data
const PRE_BUILT_TEMPLATES = {
  sales: [
    {
      id: 'sales-1',
      name: 'Cold Outreach',
      content: 'Hi [Name],\n\nI hope this email finds you well. I came across [Company] and was impressed by [specific detail about their company].\n\nI wanted to reach out because [reason for contact]. At [Your Company], we help companies like yours [value proposition].\n\nWould you be open to a brief 15-minute call this week to discuss how we might be able to help [Company] [specific benefit]?\n\nBest regards,\n[Your Name]',
      tone: 'professional',
      category: 'sales',
      description: 'Perfect for reaching out to potential clients'
    },
    {
      id: 'sales-2',
      name: 'Follow-up After Meeting',
      content: 'Hi [Name],\n\nThank you for taking the time to meet with me [when]. I really enjoyed our conversation about [topic discussed].\n\nAs discussed, I\'m attaching [materials mentioned]. I believe this could really help [Company] achieve [specific goal mentioned].\n\nNext steps:\n• [Action item 1]\n• [Action item 2]\n\nI\'ll follow up again [timeframe] to check on progress. Please let me know if you have any questions in the meantime.\n\nBest regards,\n[Your Name]',
      tone: 'warm',
      category: 'sales',
      description: 'Great for following up after sales meetings'
    }
  ],
  support: [
    {
      id: 'support-1',
      name: 'Issue Resolution',
      content: 'Dear [Customer Name],\n\nThank you for contacting us about [issue description]. I sincerely apologize for any inconvenience this has caused.\n\nI\'ve investigated your issue and here\'s what I found:\n[Explanation of the issue]\n\nTo resolve this, I\'ve [action taken]. You should see [expected result] within [timeframe].\n\nIf you continue to experience any issues, please don\'t hesitate to reach out. We\'re here to help!\n\nBest regards,\n[Your Name]\nCustomer Support Team',
      tone: 'professional',
      category: 'support',
      description: 'For resolving customer issues professionally'
    },
    {
      id: 'support-2',
      name: 'Feature Request Response',
      content: 'Hi [Customer Name],\n\nThank you for your feature request regarding [feature description]. We really appreciate customers like you who help us improve our product.\n\nI\'ve forwarded your suggestion to our product team for review. While I can\'t guarantee if or when this feature will be implemented, your feedback is valuable in shaping our roadmap.\n\nIn the meantime, here are some workarounds that might help:\n• [Workaround 1]\n• [Workaround 2]\n\nWe\'ll keep you updated on any developments. Thank you for being a valued customer!\n\nBest regards,\n[Your Name]',
      tone: 'warm',
      category: 'support',
      description: 'Perfect response to customer feature requests'
    }
  ],
  followUp: [
    {
      id: 'followup-1',
      name: 'Gentle Reminder',
      content: 'Hi [Name],\n\nI hope you\'re doing well. I wanted to follow up on [previous topic/request] from our conversation [timeframe].\n\nI understand you\'re busy, but I wanted to make sure this didn\'t slip through the cracks. [Briefly restate the request or next step].\n\nIf now isn\'t a good time, please let me know when might work better for you.\n\nThanks for your time!\n\nBest regards,\n[Your Name]',
      tone: 'warm',
      category: 'followUp',
      description: 'Gentle follow-up without being pushy'
    }
  ],
  networking: [
    {
      id: 'network-1',
      name: 'LinkedIn Connection',
      content: 'Hi [Name],\n\nI came across your profile and was impressed by your work at [Company] in [field/role]. Your experience with [specific skill/project] particularly caught my attention.\n\nI\'m [your role] at [your company] and work on similar challenges in [area]. I\'d love to connect and perhaps share insights about [relevant topic].\n\nLooking forward to connecting!\n\nBest regards,\n[Your Name]',
      tone: 'professional',
      category: 'networking',
      description: 'Perfect for professional networking connections'
    }
  ],
  business: [
    {
      id: 'business-1',
      name: 'Meeting Request',
      content: 'Hi [Name],\n\nI hope this email finds you well. I\'d like to schedule a meeting to discuss [topic/project].\n\nProposed agenda:\n• [Item 1]\n• [Item 2]\n• [Item 3]\n\nWould [date/time] work for you? The meeting should take approximately [duration]. We can meet [location/platform].\n\nPlease let me know if you need to reschedule or have any questions.\n\nBest regards,\n[Your Name]',
      tone: 'professional',
      category: 'business',
      description: 'Professional meeting request template'
    }
  ],
  apology: [
    {
      id: 'apology-1',
      name: 'Professional Apology',
      content: 'Dear [Name],\n\nI want to sincerely apologize for [specific issue/mistake]. I take full responsibility for this oversight and understand how it may have affected [impact].\n\nHere\'s what happened: [brief explanation without excuses]\n\nTo make this right, I have:\n• [Action taken 1]\n• [Action taken 2]\n\nMoving forward, I\'ve implemented [preventive measures] to ensure this doesn\'t happen again.\n\nThank you for your patience and understanding.\n\nSincerely,\n[Your Name]',
      tone: 'formal',
      category: 'apology',
      description: 'Sincere and professional apology template'
    }
  ]
};

export default function EmailWriterApp() {
  const [rawThoughts, setRawThoughts] = useState('');
  const [tone, setTone] = useState('professional');
  const [contextEmail, setContextEmail] = useState('');
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showContext, setShowContext] = useState(false);
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [showTemplates, setShowTemplates] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [customTemplates, setCustomTemplates] = useState([]);
  const [prebuiltTemplates, setPrebuiltTemplates] = useState([]);
  const [showSaveTemplate, setShowSaveTemplate] = useState(false);
  const [templateName, setTemplateName] = useState('');
  const [templateCategory, setTemplateCategory] = useState('business');
  const [openAIApiKey, setOpenAIApiKey] = useState('');
  const [modelProvider, setModelProvider] = useState('openai-gpt-4o');
  const [senderName, setSenderName] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [emailLength, setEmailLength] = useState('medium');
  const [language, setLanguage] = useState('en');
  const [replyMode, setReplyMode] = useState(false);
  const [replyToEmail, setReplyToEmail] = useState('');

  const tones = [
    { value: 'professional', label: t('professionalTone'), description: t('professionalDescription') },
    { value: 'warm', label: t('warmTone'), description: t('warmDescription') },
    { value: 'concise', label: t('conciseTone'), description: t('conciseDescription') },
    { value: 'formal', label: t('formalTone'), description: t('formalDescription') },
    { value: 'casual', label: t('casualTone'), description: t('casualDescription') },
    { value: 'persuasive', label: t('persuasiveTone'), description: t('persuasiveDescription') }
  ];

  const categories = [
    { value: 'all', label: t('all') },
    { value: 'sales', label: t('sales') },
    { value: 'support', label: t('support') },
    { value: 'followUp', label: t('followUp') },
    { value: 'networking', label: t('networking') },
    { value: 'business', label: t('business') },
    { value: 'apology', label: t('apology') }
  ];

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
    { value: 'vi', label: 'Vietnamese' },
    { value: 'zh', label: 'Chinese' },
    { value: 'ja', label: 'Japanese' },
    { value: 'ko', label: 'Korean' },
    { value: 'hi', label: 'Hindi' },
    { value: 'ar', label: 'Arabic' },
  ];

  const emailLengthOptions = [
    { value: 'short', label: 'Short' },
    { value: 'medium', label: 'Medium' },
    { value: 'long', label: 'Long' },
  ];

  // Get filtered templates
  const getFilteredTemplates = () => {
    let allTemplates = [];
    
    if (selectedCategory === 'all') {
      Object.values(PRE_BUILT_TEMPLATES).forEach(categoryTemplates => {
        allTemplates.push(...categoryTemplates);
      });
    } else {
      allTemplates = PRE_BUILT_TEMPLATES[selectedCategory] || [];
    }

    if (searchTerm) {
      allTemplates = allTemplates.filter(template =>
        template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return allTemplates;
  };

  const useTemplate = (template) => {
    setRawThoughts(template.content);
    setTone(template.tone);
    setSelectedTemplate(template);
    setShowTemplates(false);
  };

  const generateEmail = async () => {
    if (!rawThoughts.trim()) return;
    setIsLoading(true);
    try {
      let prompt = `You are an expert email writer. Write a ${emailLength} email from ${senderName || 'the sender'} to ${receiverName || 'the recipient'} with a ${tone} tone.`;
      if (replyMode && replyToEmail.trim()) {
        prompt += `\n\nYou are replying to the following email:\n"${replyToEmail}"\n\n`;
      }
      prompt += `\n\nRaw thoughts: "${rawThoughts}"`;
      if (contextEmail.trim()) {
        prompt += `\n\nContext: ${contextEmail}`;
      }
      prompt += `\n\nInstructions:\n- Write a complete, professional email body\n- Use a ${tone} tone throughout\n- Make it clear, engaging, and well-structured\n- Ensure proper email etiquette\n- Do not include a subject line\n- Write the email in ${languageOptions.find(l => l.value === language)?.label || 'English'}\n\nRespond with ONLY the email body content. Do not include any explanations or additional text outside of the email.`;
      const response = await window.claude.complete(prompt, openAIApiKey, modelProvider);
      setGeneratedEmail(response.trim());
    } catch (error) {
      console.error('Error generating email:', error);
      setGeneratedEmail('Sorry, there was an error generating your email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const sendEmail = (provider) => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(generatedEmail);
    const encodedRecipient = encodeURIComponent(recipient);
    
    let url = '';
    
    switch (provider) {
      case 'gmail':
        url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedRecipient}&su=${encodedSubject}&body=${encodedBody}`;
        break;
      case 'outlook':
        url = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodedRecipient}&subject=${encodedSubject}&body=${encodedBody}`;
        break;
      case 'yahoo':
        url = `https://compose.mail.yahoo.com/?to=${encodedRecipient}&subject=${encodedSubject}&body=${encodedBody}`;
        break;
      case 'default':
        url = `mailto:${encodedRecipient}?subject=${encodedSubject}&body=${encodedBody}`;
        break;
      default:
        return;
    }
    
    window.open(url, '_blank');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      generateEmail();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-blue-100 to-pink-100">
      {/* OpenAI API Key Input and Model Selector */}
      <div className="w-full flex flex-col items-center py-4 bg-gradient-to-r from-white/80 via-blue-50 to-white/80 border-b border-slate-200 mb-4 gap-2 shadow-md">
        <div className="flex gap-2 w-full max-w-2xl">
          <input
            type="password"
            className="flex-1 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your OpenAI/Gemini/Anthropic API key (sk-... or ...)"
            value={openAIApiKey}
            onChange={e => setOpenAIApiKey(e.target.value)}
          />
          <select
            className="p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={modelProvider}
            onChange={e => setModelProvider(e.target.value)}
          >
            <option value="openai-gpt-4o">OpenAI GPT-4o</option>
            <option value="openai-gpt-4-mini">OpenAI GPT-4o Mini</option>
            <option value="gemini-pro">Gemini Pro</option>
            <option value="anthropic-claude-3">Anthropic Claude 3</option>
          </select>
        </div>
      </div>
      {/* Interactive Email Form Card */}
      <div className="max-w-2xl mx-auto mt-8 mb-12 p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-white via-blue-50 to-indigo-100 border border-blue-100 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            className="p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Sender Name"
            value={senderName}
            onChange={e => setSenderName(e.target.value)}
          />
          <input
            type="text"
            className="p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Receiver Name"
            value={receiverName}
            onChange={e => setReceiverName(e.target.value)}
          />
          <select
            className="p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={emailLength}
            onChange={e => setEmailLength(e.target.value)}
          >
            {emailLengthOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <select
            className="p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            value={language}
            onChange={e => setLanguage(e.target.value)}
          >
            {languageOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={replyMode}
              onChange={e => setReplyMode(e.target.checked)}
              className="accent-blue-600 w-5 h-5"
            />
            <span className="text-slate-700 font-medium">Reply to Email</span>
          </label>
          {replyMode && (
            <textarea
              className="flex-1 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Paste the original email you are replying to..."
              value={replyToEmail}
              onChange={e => setReplyToEmail(e.target.value)}
              rows={2}
            />
          )}
        </div>
      </div>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
              {t('emailWritingAssistant')}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('transformThoughtsDescription')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Input Section */}
          <div className="space-y-6">
            {/* Templates Section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FileText className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-800">{t('preBuiltTemplates')}</h2>
                </div>
                <button
                  onClick={() => setShowTemplates(!showTemplates)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-100 hover:bg-purple-200 rounded-lg transition-colors text-purple-700 font-medium"
                >
                  <FileText className="w-4 h-4" />
                  {showTemplates ? t('hide') : t('chooseTemplate')}
                </button>
              </div>

              {showTemplates && (
                <div className="space-y-4">
                  {/* Search and Filter */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder={t('searchTemplates')}
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm text-slate-700 placeholder-slate-400"
                      />
                    </div>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm text-slate-700"
                    >
                      {categories.map(category => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Templates Grid */}
                  <div className="max-h-80 overflow-y-auto space-y-3">
                    {getFilteredTemplates().map((template) => (
                      <div
                        key={template.id}
                        className="p-4 border border-slate-200 rounded-lg hover:border-purple-300 hover:bg-purple-50/50 transition-all duration-200 cursor-pointer"
                        onClick={() => useTemplate(template)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-medium text-slate-800">{template.name}</h4>
                              <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                                {template.category}
                              </span>
                              <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                                {template.tone}
                              </span>
                            </div>
                            <p className="text-sm text-slate-600 mb-2">{template.description}</p>
                            <p className="text-xs text-slate-500 line-clamp-2">
                              {template.content.substring(0, 120)}...
                            </p>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              useTemplate(template);
                            }}
                            className="ml-4 px-3 py-1 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors"
                          >
                            {t('useTemplate')}
                          </button>
                        </div>
                      </div>
                    ))}
                    
                    {getFilteredTemplates().length === 0 && (
                      <div className="text-center py-8 text-slate-500">
                        No templates found matching your criteria.
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Your Thoughts Section */}
            {/* Your Thoughts Section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-800">{t('yourThoughts')}</h2>
                {selectedTemplate && (
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                    Using: {selectedTemplate.name}
                  </span>
                )}
              </div>
              
              <textarea
                value={rawThoughts}
                onChange={(e) => setRawThoughts(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder={t('thoughtsPlaceholder')}
                className="w-full h-40 p-4 border border-slate-200 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm text-slate-700 placeholder-slate-400"
              />
              
              <div className="mt-4 text-sm text-slate-500">
                {t('tipKeyboardShortcut')}
              </div>
            </div>

            {/* Tone Selection */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-800">{t('emailTone')}</h2>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {tones.map((toneOption) => (
                  <button
                    key={toneOption.value}
                    onClick={() => setTone(toneOption.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                      tone === toneOption.value
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-slate-200 bg-white/50 hover:border-slate-300 hover:bg-white/70'
                    }`}
                  >
                    <div className="font-medium text-slate-800">{toneOption.label}</div>
                    <div className="text-sm text-slate-600 mt-1">{toneOption.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Context Email Section */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                    <User className="w-5 h-5 text-slate-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-800">{t('contextOptional')}</h2>
                </div>
                <button
                  onClick={() => setShowContext(!showContext)}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  {showContext ? t('hide') : t('show')}
                </button>
              </div>
              
              {showContext && (
                <>
                  <p className="text-slate-600 mb-4">
                    {t('contextDescription')}
                  </p>
                  <textarea
                    value={contextEmail}
                    onChange={(e) => setContextEmail(e.target.value)}
                    placeholder={t('contextPlaceholder')}
                    className="w-full h-32 p-4 border border-slate-200 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm text-slate-700 placeholder-slate-400"
                  />
                </>
              )}
            </div>

            {/* Generate Button */}
            <button
              onClick={generateEmail}
              disabled={isLoading || !rawThoughts.trim()}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  {t('craftingEmail')}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {t('generateEmail')}
                </>
              )}
            </button>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 min-h-96">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-800">{t('generatedEmail')}</h2>
                </div>
                
                {generatedEmail && (
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-slate-700 font-medium"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-green-600" />
                        {t('copied')}
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        {t('copy')}
                      </>
                    )}
                  </button>
                )}
              </div>
              
              {generatedEmail ? (
                <div className="space-y-6">
                  {/* Email Details Form */}
                  <div className="bg-slate-50/50 rounded-xl p-4 border border-slate-200">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          {t('to')}
                        </label>
                        <input
                          type="email"
                          value={recipient}
                          onChange={(e) => setRecipient(e.target.value)}
                          placeholder={t('recipientPlaceholder')}
                          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-700"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          {t('subject')}
                        </label>
                        <input
                          type="text"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder={t('subjectPlaceholder')}
                          className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-700"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Generated Email Display */}
                  <div className="bg-white/80 rounded-xl p-6 border border-slate-200">
                    <pre className="whitespace-pre-wrap font-sans text-slate-700 leading-relaxed">
                      {generatedEmail}
                    </pre>
                  </div>

                  {/* Send Options */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200">
                    <p className="text-sm font-medium text-slate-700 mb-3">{t('sendVia')}</p>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => sendEmail('gmail')}
                        disabled={!recipient || !subject}
                        className="flex items-center justify-center gap-2 p-3 bg-white hover:bg-red-50 border border-red-200 hover:border-red-300 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium text-slate-700"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t('gmail')}
                      </button>
                      <button
                        onClick={() => sendEmail('outlook')}
                        disabled={!recipient || !subject}
                        className="flex items-center justify-center gap-2 p-3 bg-white hover:bg-blue-50 border border-blue-200 hover:border-blue-300 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium text-slate-700"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t('outlook')}
                      </button>
                      <button
                        onClick={() => sendEmail('yahoo')}
                        disabled={!recipient || !subject}
                        className="flex items-center justify-center gap-2 p-3 bg-white hover:bg-purple-50 border border-purple-200 hover:border-purple-300 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium text-slate-700"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t('yahooMail')}
                      </button>
                      <button
                        onClick={() => sendEmail('default')}
                        disabled={!recipient || !subject}
                        className="flex items-center justify-center gap-2 p-3 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium text-slate-700"
                      >
                        <Mail className="w-4 h-4" />
                        {t('defaultEmail')}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-slate-400">
                  <Mail className="w-16 h-16 mb-4 opacity-50" />
                  <p className="text-lg">{t('emailWillAppearHere')}</p>
                  <p className="text-sm mt-2">{t('getStartedPrompt')}</p>
                </div>
              )}
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-semibold text-slate-800 mb-3">{t('proTips')}</h3>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>{t('tipBeSpecific')}</li>
                <li>{t('tipIncludeDetails')}</li>
                <li>{t('tipTryTones')}</li>
                <li>{t('tipAddContext')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}