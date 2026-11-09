// Central config: edit everything here. Replace placeholders marked "REPLACE".
export const site = {
  name: 'Sai Venkat',
  title: 'Digital Marketing Strategist | Brand Growth | Social Media Marketing',
  email: 'saivenkat09565@gmail.com',
  phone: '+91 93902 38537',
  location: 'West Godavari, Andhra Pradesh, India',
  linkedin: 'https://www.linkedin.com/in/REPLACE', // REPLACE
  instagram: 'https://www.instagram.com/REPLACE', // REPLACE
  resume: '/Sai_Venkat_Resume.pdf',
  portrait: '/sai-venkat.jpg',
  formEndpoint: '', // Optional: paste a Formspree/Getform URL. Empty = opens your email app.
}
export const nav = ['Home', 'About', 'Expertise', 'Projects', 'Experience', 'Contact']
export const highlights = ['Founder of Venova Digitals', 'Multi-industry client experience', 'Strategy-led digital marketing approach']
export const expertise = [
  { t: 'Digital Marketing Strategy', d: 'Turning business goals and audience insight into a clear, prioritised plan across channels.' },
  { t: 'Social Media Marketing', d: 'Content calendars and account management for Instagram, Facebook, LinkedIn and YouTube.' },
  { t: 'Brand Development & Positioning', d: 'Defining how a brand looks, sounds and stands apart from competitors.' },
  { t: 'Performance Marketing', d: 'Paid campaigns planned around awareness and lead goals, then monitored and refined.' },
  { t: 'Meta Ads & Google Ads', d: 'Planning and setting up campaigns on Meta Ads Manager and Google Ads.' },
  { t: 'Content Strategy', d: 'Deciding what to say, where, and how often, so content has a purpose.' },
  { t: 'Creative Campaign Planning', d: 'Concepts for promotions, reels and launches built around a single message.' },
  { t: 'Lead Generation', d: 'Campaigns and content designed to bring in enquiries, not just views.' },
  { t: 'Marketing Research', d: 'Competitor, audience and market research to ground every decision.' },
  { t: 'Client & Project Management', d: 'Clear communication, requirement gathering and delivery across multiple accounts.' },
]
export type Project = { id: string; name: string; industry: string; services: string[]; summary: string; image?: string }
// To add visuals: drop files in /public/projects and set image: '/projects/xyz.jpg'
export const projects: Project[] = [
  { id: 'sag', name: 'SAG Drone Technologies', industry: 'Agriculture Technology', services: ['Digital marketing strategy', 'Social media management', 'Product marketing', 'Promotional campaigns', 'Drone product content', 'Training program promotions'], summary: 'Developed digital marketing and promotional strategies for an agriculture drone technology company, focusing on product awareness, training promotions and brand communication.' },
  { id: 'korlance', name: 'Korlance', industry: 'IT Education & Training', services: ['Social media marketing', 'Content planning', 'Creative campaigns', 'Promotional reels', 'Brand communication'], summary: 'Social media marketing, content planning and promotional reels for an IT education and training brand.' },
  { id: 'mighty', name: 'Mighty Events', industry: 'Event Management', services: ['Social media marketing', 'Event promotion', 'Creative content', 'Reels and promotional campaigns'], summary: 'Social media marketing and event promotion through creative content and reels for an event management business.' },
  { id: 'chaitra', name: 'Chaitra Collections', industry: 'Fashion & Retail', services: ['Social media management', 'Promotional content', 'Brand communication', 'Content planning'], summary: 'Social media management, promotional content and content planning for a fashion and retail brand.' },
  { id: 'krishi', name: 'Krishi Abhi Drones LLP', industry: 'Agriculture Technology', services: ['Digital marketing', 'Website development coordination', 'Promotional content', 'Brand visibility'], summary: 'Digital marketing, promotional content and website development coordination to build brand visibility.' },
  { id: 'star', name: 'Star Agri Drones', industry: 'Agriculture Technology', services: ['Promotional campaigns', 'Digital brand communication', 'Marketing content'], summary: 'Promotional campaigns and marketing content to communicate the brand digitally.' },
]
export const metrics = [
  { v: 50, s: 'K+', l: 'Organic reach in 30 days', a: true },
  { v: 1, s: 'K+', l: 'Instagram followers for Venova Digitals', a: true },
  { v: 6, s: '+', l: 'Client brands across different industries', a: true },
  { v: 2025, s: '', l: 'Started my professional journey with Venova Digitals', a: false },
]
export const responsibilities = ['Developing digital marketing strategies', 'Managing multiple client accounts', 'Planning social media campaigns', 'Coordinating content creation', 'Planning paid advertising campaigns', 'Managing client relationships', 'Monitoring campaign performance']
export const tools = ['Canva', 'Meta Ads Manager', 'Google Ads', 'CapCut', 'Instagram', 'Facebook', 'LinkedIn', 'YouTube']
export const education = [
  { t: 'Bachelor of Technology (B.Tech)', d: 'Electronics & Communication Engineering', w: 'Vishnu Institute of Technology, Bhimavaram', y: '2021 – 2025' },
  { t: 'Diploma in Agriculture', d: '', w: '', y: '2023' },
]
