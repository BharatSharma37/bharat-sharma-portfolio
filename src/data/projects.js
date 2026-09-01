export const projectsData = [
  {
    id: "airbnb-clone",
    number: "01",
    title: "Airbnb Clone",
    category: "FULL STACK · MERN / NODE · DATABASE",
    shortCategory: "Full-Stack Web App",
    description: "Developed a full-stack Airbnb Clone using MongoDB, Express.js, Node.js and EJS. Features include RESTful APIs, CRUD functionality, dynamic forms, server-side routing, and property listing management.",
    technologies: ["MongoDB", "Express.js", "Node.js", "EJS", "REST API", "CRUD"],
    projectUrl: "#",
    githubUrl: "https://github.com/BharatSharma37",
    hasInteractivePreview: false,
    visualType: "property-interface",
    previewDetails: {
      location: "Luxury Penthouse · Kyoto, Japan",
      price: "$240 / night",
      rating: "4.98 ★ (128 reviews)",
      features: ["Verified Host", "Dynamic Pricing Engine", "EJS Partials", "Mongoose Schema ODM"]
    },
    caseStudy: {
      overview: "A production-styled full-stack rental marketplace platform engineered with Node.js, Express, MongoDB, and EJS server-side rendering to facilitate seamless property discovery and listing management.",
      coreProblem: "Real-world rental platforms require secure data mutations, structured relational data modeling between properties, owners, and reviews, and responsive server-side view rendering.",
      solution: "Implemented an MVC (Model-View-Controller) architecture using Express router handlers, Mongoose schemas with data validation rules, and reusable EJS template partials.",
      architecture: [
        "Client Request → Express.js Router → Custom Middleware Chain",
        "Controller Logic → Mongoose ODM Queries → MongoDB Database",
        "Dynamic Model Response → EJS Template Engine → Compiled HTML to Client"
      ],
      keyFeatures: [
        "Full CRUD lifecycle for property creation, editing, deleting, and detailed views",
        "Dynamic form handling with pricing, image links, amenities, and location fields",
        "Nested review and rating system tied to individual property IDs",
        "Server-side validation and centralized Express error handling"
      ],
      technicalLearnings: [
        "Hands-on mastery of the full HTTP request-response cycle and REST standards",
        "Efficient schema modeling and population queries in MongoDB",
        "Structuring modular backend controllers and reusable view templates"
      ]
    }
  },
  {
    id: "ai-chatbot",
    number: "02",
    title: "AI-Powered Chatbot",
    category: "AI · REACT · GEMINI API",
    shortCategory: "AI Application",
    description: "Built an AI-powered chatbot using React.js and Gemini API with external API integration, React Hooks and dynamic AI-generated responses.",
    technologies: ["React.js", "Gemini API", "JavaScript", "API", "React Hooks"],
    projectUrl: "#",
    githubUrl: "https://github.com/BharatSharma37",
    hasInteractivePreview: true,
    visualType: "ai-interface",
    previewDetails: {
      model: "Google Gemini Flash / Pro",
      latency: "Real-time stream simulation",
      status: "Operational",
      features: ["Markdown Rendering", "Dynamic Token Feed", "State Persistence", "Adaptive Suggestions"]
    },
    caseStudy: {
      overview: "An intelligent conversational interface built with React that harnesses Google's Gemini API to deliver fast, informative, and context-aware responses to user queries.",
      coreProblem: "Connecting frontend user interfaces to generative AI models requires robust asynchronous state management, low-latency UI responsiveness, and graceful error handling.",
      solution: "Engineered a reactive React frontend utilizing custom hooks for state control, asynchronous API fetching pipelines for Gemini endpoints, and dynamic typing animation for natural conversation flow.",
      architecture: [
        "User Prompt Input → Sanitization & State Update → Gemini API Pipeline",
        "Asynchronous Response Parsing → Markdown Formatting & Code Syntax Highlighter",
        "Reactive Token Stream Simulation → Auto-scrolling Conversation View"
      ],
      keyFeatures: [
        "Real-time conversational interface with dynamic message histories",
        "Integration with Google Gemini API endpoints for natural language responses",
        "Smart starter prompts covering code explanation, web architecture, and algorithms",
        "Loading indicators, error boundaries, and quick-clear controls"
      ],
      technicalLearnings: [
        "Consuming modern LLM REST APIs and handling prompt contracts",
        "Managing asynchronous state synchronization and optimistic UI updates",
        "Designing intuitive micro-interactions for conversational interfaces"
      ]
    }
  },
  {
    id: "spotify-netflix-clones",
    number: "03",
    title: "Spotify & Netflix Clones",
    category: "FRONTEND · UI/UX",
    shortCategory: "Frontend & UI/UX Clones",
    description: "Designed responsive Spotify and Netflix frontend clones using HTML5, CSS3, Bootstrap and JavaScript. Focus: Responsive design, Modern UI/UX, Frontend development, Mobile responsiveness.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    projectUrl: "#",
    githubUrl: "https://github.com/BharatSharma37",
    hasInteractivePreview: false,
    visualType: "media-interface",
    previewDetails: {
      layouts: "Audio Player & Streaming Video Hero",
      grid: "Bootstrap & Custom Flexbox Layouts",
      responsiveness: "100% Mobile & Desktop Tested",
      features: ["Cinematic Hero Vignette", "Interactive Playback Controls", "Accordion FAQ", "Smooth Hover Rails"]
    },
    caseStudy: {
      overview: "High-fidelity frontend engineering projects replicating the user experience, audio controls, dark mode aesthetics, and cinematic layouts of Spotify and Netflix.",
      coreProblem: "Creating world-class entertainment interfaces requires precise visual hierarchy, responsive layout adaptation across varying screen resolutions, and seamless UI transitions.",
      solution: "Developed with semantic HTML5 markup, modern CSS3 variables for color fidelity, Bootstrap responsive grid utilities, and JavaScript event listeners for interactive widgets.",
      architecture: [
        "Spotify: Sticky Topbar + Sidebar Navigation + Scrollable Media Grids + Fixed Bottom Player",
        "Netflix: Vignette Billboard Hero + Horizontal Scrolling Movie Rails + Accordion FAQ System"
      ],
      keyFeatures: [
        "Spotify clone: Interactive playlist cards, hover play states, and sticky audio progress bar",
        "Netflix clone: Immersive hero trailer backdrop, category video rows, and collapsible FAQ",
        "Mobile-first design ensuring zero clipping and smooth touch interactions across all devices",
        "Performance-optimized image loading and CSS transition effects"
      ],
      technicalLearnings: [
        "Advanced CSS Flexbox and Grid alignment strategies for multi-panel dashboards",
        "Event delegation and DOM manipulation for interactive UI components",
        "Deepened appreciation for dark-mode contrast ratios and typography hierarchy"
      ]
    }
  }
];
