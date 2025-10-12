export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  tags: string[];
  imageUrl: string;
  link: string;
  githubLink: string;
  type: string;
  highlights: string[];
  timeline: string;
  role: string;
  teamSize: string;
  challenge: string;
  solution: string;
  process: {
    title: string;
    description: string;
    steps: string[];
  }[];
  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
    deployment: string[];
    tools: string[];
  };
 
  learnings: string[];
  screenshots: {
    url: string;
    alt: string;
    caption: string;
  }[];
  nextSteps: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "ai-volunteer-matching",
    title: "AI-Powered Volunteer Matching System",
    description:"This platform leverages machine learning to optimize how volunteers are assigned to roles, ensuring better fit, higher engagement, and improved efficiency. The system analyzes user profiles, skillsets, and availability using a TensorFlow-based model. Built with a modern web stack, the platform supports real-time insights and a seamless user experience.",
    shortDescription: "ML-powered platform for optimizing volunteer role assignments with TensorFlow and real-time analytics.",
    tags: ["React","Node.js","PostgreSQL","Machine Learning","Vercel"],
    imageUrl: "/Event-Management.PNG",
    link: "https://event-management-system-9qnx.vercel.app/",
    githubLink: "https://github.com/mu-subhan/Event-Management-System",
    type: "Full-Stack Application",
    highlights: ["ML Algorithm","TensorFlow","Real-time Analytics"],
    timeline: "1 months",
    role: "Frontend Developer & ML Engineer",
    teamSize: "Solo Project",
    challenge: "Traditional volunteer matching systems rely on manual processes and basic keyword matching, leading to poor volunteer-role fit, low engagement rates, and inefficient resource allocation. Organizations struggle to match volunteers with appropriate roles based on their skills, availability, and interests.",
    solution: "Developed an intelligent matching system that uses machine learning algorithms to analyze volunteer profiles, skills, availability, and preferences. The system employs collaborative filtering and content-based recommendations to suggest optimal role matches, significantly improving engagement and satisfaction.",
    process: [
      {
        title: "Research & Analysis",
        description: "Analyzed existing volunteer management systems and identified key pain points",
        steps: [
          "Conducted user interviews with volunteer coordinators",
          "Analyzed data from existing volunteer databases",
          "Identified key matching criteria and success metrics",
          "Researched ML approaches for recommendation systems"
        ]
      },
      {
        title: "Algorithm Development",
        description: "Designed and implemented the ML matching algorithm",
        steps: [
          "Preprocessed volunteer and role data using Python",
          "Implemented collaborative filtering with TensorFlow",
          "Created content-based recommendation engine",
          "Optimized algorithm performance and accuracy"
        ]
      },
      {
        title: "Frontend Development",
        description: "Built responsive user interface for volunteers and administrators",
        steps: [
          "Created React components for profile management",
          "Implemented real-time dashboard with analytics",
          "Designed intuitive matching interface",
          "Added responsive design for mobile compatibility"
        ]
      },
      {
        title: "Backend Integration",
        description: "Developed robust API and database architecture",
        steps: [
          "Built RESTful APIs with Node.js and Express",
          "Designed PostgreSQL database schema",
          "Integrated ML model with web application",
          "Implemented real-time data synchronization"
        ]
      }
    ],
    technologies: {
      frontend: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express", "TensorFlow.js"],
      database: ["PostgreSQL", "Redis"],
      deployment: ["Vercel"],
      tools: ["Git","Github", "ESLint"]
    },
  
    learnings: [
      "Machine learning integration in web applications requires careful consideration of performance and scalability",
      "User experience is crucial for ML-powered features - the algorithm must be transparent and trustworthy",
      "Real-time data processing presents unique challenges that require robust architecture",
      "Collaborative filtering works well for volunteer matching but needs domain-specific tuning"
    ],
    screenshots: [
      {
        url: "/Event-Management.PNG",
        alt: "AI Volunteer Matching Dashboard",
        caption: "Main dashboard showing volunteer matches and analytics"
      }
    ],
    nextSteps: [
      "Implement testing for different matching algorithms",
      "Add sentiment analysis for volunteer feedback",
      "Integrate with popular volunteer management platforms"
    ]
  },
  {
    id: "cloudly-storage",
    title: "Cloudly Storage",
    description: "Developed a cloud-based storage platform that allows users to securely upload, edit, delete, and share files in real-time. The system is designed with a distributed architecture for scalability and includes advanced security protocols to ensure data integrity and privacy.",
    shortDescription: "Cloud storage platform with real-time sync, distributed architecture, and enterprise-grade security.",
    tags: ["Next.js", "TypeScript", "Appwrite", "Redis"],
    imageUrl: "/Cloudly-store.PNG",
    link: "https://cloudly-store.vercel.app/",
    githubLink: "https://github.com/mu-subhan/Google-Drive-Clone",
    type: "Cloud Infrastructure",
    highlights: ["Distributed System", "Real-time Sync", "Enterprise Security"],
    timeline: "1 months",
    role: "Full-Stack Developer",
    teamSize: "Solo Project",
    challenge: "Existing cloud storage solutions often lack real-time collaboration features, have limited scalability, and don't provide adequate security controls for enterprise users. Users need a platform that combines the simplicity of consumer cloud storage with the robustness required for business use.",
    solution: "Built a comprehensive cloud storage platform using Appwrite for backend services and Redis for real-time synchronization. The platform features advanced file management, collaborative editing, and enterprise-grade security with role-based access controls.",
    process: [
      {
        title: "Architecture Design",
        description: "Designed scalable distributed system architecture",
        steps: [
          "Researched cloud storage best practices",
          "Designed microservices architecture",
          "Planned data replication and backup strategies",
          "Created security and access control models"
        ]
      },
      {
        title: "Backend Development",
        description: "Implemented core storage and synchronization services",
        steps: [
          "Set up Appwrite backend with custom functions",
          "Implemented file upload and management APIs",
          "Built real-time synchronization with Redis",
          "Created user authentication and authorization"
        ]
      },
      {
        title: "Frontend Development",
        description: "Built modern, responsive user interface",
        steps: [
          "Developed Next.js application with TypeScript",
          "Created file management interface with drag-and-drop",
          "Implemented real-time collaboration features",
          "Added responsive design for all devices"
        ]
      },
      {
        title: "Security & Testing",
        description: "Implemented security measures and comprehensive testing",
        steps: [
          "Added encryption for file storage and transfer",
          "Implemented role-based access controls",
          "Created automated test suite",
          "Performed security audits and penetration testing"
        ]
      }
    ],
    technologies: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Appwrite", "Node.js", "Redis"],
      database: ["MongoDB", "Appwrite Database"],
      deployment: ["Vercel", "Render"],
      tools: ["Git","GitHub", "ESLint"]
    },
   
    learnings: [
      "Distributed systems require careful consideration of consistency vs availability trade-offs",
      "Real-time synchronization is complex and requires robust conflict resolution strategies",
      "User experience in file management applications is heavily influenced by performance",
      "Security in cloud applications requires defense in depth approach"
    ],
    screenshots: [
      {
        url: "/Cloudly-store.PNG",
        alt: "Cloudly Storage Interface",
        caption: "Main file management interface with real-time collaboration"
      }
    ],
    nextSteps: [
      "Implement advanced file versioning and history",
      "Add AI-powered file organization and search",
      "Integrate with third-party cloud storage providers"
    ]
  },
  {
    id:"Library-Management-System",
    title: "Library Management System",
    description: "A comprehensive library management system that streamlines book inventory, member management, and borrowing processes. The system features a user-friendly interface, real-time search capabilities, and automated notifications for due dates and overdue books.", 
    shortDescription: "Streamlined library management with real-time search, inventory tracking, and automated notifications.",
    tags: ["Nextjs", "Node.js", "PostgreSQL","Express", "Vercel","upstash"],
    imageUrl: "/lms2.PNG",
    link: "https://university-library-puce-three.vercel.app/",
    githubLink: "https://github.com/mu-subhan/University-Library-Management-System",
    type: "Full-Stack Application",
    highlights: ["Inventory Tracking", "Real-time Search", "Automated Notifications"],
    timeline: "1 month",
    role: "Full-Stack Developer",
    teamSize: "Solo Project",
    challenge: "Traditional library management systems often rely on manual processes and outdated software, leading to inefficiencies in book tracking, member management, and borrowing processes. Libraries need a modern solution that enhances user experience and operational efficiency.",
    solution: "Developed a web-based library management system using Next.js for the frontend and Node.js with Express for the backend. The system includes features such as real-time book search, inventory tracking, member management, and automated email notifications for due dates and overdue books.",
    process: [
      {
        title: "Requirement Gathering",
        description: "Identified key features and user needs",
        steps: [
          "Conducted interviews with librarians and staff",
          "Analyzed existing library management systems",
          "Defined user roles and permissions",
          "Created feature list and project roadmap"
        ]
      }
      ,{
        title: "Frontend Development",
        description: "Built responsive user interface",
        steps: [
          "Developed Next.js application with TypeScript",
          "Created user interface with responsive design",
          "Implemented real-time search functionality",
          "Integrated with backend API for data retrieval"
        ]
      },
      {
        title: "Backend Development",
        description: "Implemented server-side logic and database integration",
        steps: [
          "Developed RESTful API with Node.js and Express",
          "Integrated PostgreSQL database for data storage",
          "Implemented user authentication and authorization",
          "Created automated tests for API endpoints"
        ]
      },
      {
        title: "Deployment & Testing",
        description: "Deployed application and conducted user testing",
        steps: [
          "Deployed application on Vercel",
          "Conducted user testing with librarians",
        ]
      },
    ],
    technologies: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express", "PostgreSQL"],
      database: ["PostgreSQL", "Upstash"],
      tools: ["Git","GitHub", "ESLint"],
      deployment: ["Vercel"]
    },
    learnings: [
      "User experience is crucial in library management systems to ensure ease of use for both staff and members",
      "Automating repetitive tasks can significantly improve efficiency and reduce errors",
      "Thorough testing is essential to identify and fix issues before deployment"
    ],
    screenshots: [
       {
    url: "/lms1.PNG",
    alt: "Login Page",
    caption: "Login page for library staff and members"
  },
  {
    url: "/lms2.PNG",
    alt: "Book Details",
    caption: "Showing Books and its details"
  },
  {
    url: "/lms3.PNG",
    alt: "Book List",
    caption: "List of All books in the library"
  }
    ],
    nextSteps: [
      "Implement mobile application for on-the-go access",
      "Add advanced reporting and analytics features",
      "Integrate with external book databases for easy cataloging"
    ]
  }
];
