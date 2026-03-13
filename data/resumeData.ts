
import { ResumeData } from '../types';

export const resumeData: ResumeData = {
  name: "Jinduo Li",
  title: "Senior CS Student & Full Stack AI Developer",
  location: "Tempe, Arizona",
  email: "jinduoli@asu.edu",
  phone: "(908) 842-3168",
  profileImage: "images/IMG_5103.jpg",
  summary: "I'm a senior CS student at Arizona State University, experienced in building scalable, cloud-based web applications and microservices using Python, Node.js, React, and .NET Core. skilled in leveraging modern tools such as Chroma DB, Lang Chain, Docker, Kubernetes, GCP for building scalable applications, specializing in large language models (LLMs), machine learning, and cloud technologies.Experienced with DevOps, CI/CD pipelines, and performance optimization, delivering reliable, user focused software solutions.",
  socials: {
    github: "https://github.com/jinduo-li",
    linkedin: "https://www.linkedin.com/in/jinduo-li"
  },
  education: {
    school: "Arizona State University",
    degree: "BS Computer Science",
    location: "Tempe, AZ",
    graduation: "May 2026",
    coursework: ["Operating System", "Computer Organization & Assembly", "Distributed Systems", "Software Engineering", "ML", "AI", "Probability", "Algorithm", "Hardware design and computer Architecture"]
  },
  skills: {
    programming: ["JavaScript", "TypeScript", "Python (Flask, Django, FastAPI)", "Node.js", "Express.js", ".NET Core", "ASP.NET Core", "C#", "HTML5", "CSS3"],
    frontend: ["React.js", "Redux", "Next.js", "React Router", "Bootstrap", "Tailwind CSS"],
    backend: ["C#",".NET","Python", "WebSockets", "Microservices architecture", "JWT", "OAuth2", "Secure API Gateways", "Event-Driven Architecture (Kafka, Azure Event Hub)", "API versioning", "unit & integration testing"],
    ai: ["TensorFlow", "PyTorch", "Keras", "scikit-learn", "NLP & text analytics (OpenAI GPT Hugging Face, AWS)", "data preprocessing", "feature engineering", "predictive analytics", "recommendation systems", "model deployment & API integration"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Cassandra", "Redis", "Snowflake"],
    tools: ["GCP", "AWS", "Azure"],
    devops: ["Docker", "Docker Compose", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "GitLab CI/CD", "Postman", "Swagger", "Prometheus", "Grafana"]
  },
  experience: [
    {
      company: "Atoms Tech",
      role: "Robotics and Systems Engineering",
      period: "Jan 2026 - Present",
      location: "Remote",
      technologies: [],
      highlights: [
        "Designed and implemented an integrated robotics system combining real-time computer vision, AI inference, and robotic arm control using NVIDIA Jetson AGX.",
        "Developed real-time object detection pipelines using OpenCV and YOLO to detect, label, and track objects in a physical workspace.",
        "Integrated camera and robotic hardware with embedded software to enable hardware-driven decision making.",
        "Applied systems engineering practices using the ATOMS platform to define requirements, model system architecture, and validate end-to-end functionality."
      ]
    },
    {
      company: "Atoms Tech",
      role: "Full Stack Engineer & Web developer",
      period: "Aug 2025 - Dec 2025",
      location: "Remote",
      technologies: [],
      highlights: [
        "Developed and deployed Fast API endpoints for large language model (LLM) integration, enabling advanced natural language processing features in production applications",
        "Gathered and analyzed front-end requirements using Node.js, transferred them into robust Python backend solutions to improve data flow and system functionality.",
        "Collaborated with cross-functional teams to deliver full-stack solutions, integrating Supabase",
        "Helped remove the restriction to be able to upload for more file types. And created MCP structure for feeding prompt and getting the analysis result",
        "Worked on removing third party logic and use our analysis tools"
      ]
    }
  ],
  projects: [
    {
      id: "3",
      title: "Sweet Ninja (AI Studio)",
      description: "An AI-powered interactive experience developed using Google AI Studio featuring advanced prompt engineering. It leverages the Gemini API for complex character reasoning and interaction.",
      technologies: ["Google AI Studio", "Gemini API", "Prompt Engineering", "Vercel"],
      demoUrl: "https://sweet-ninja.vercel.app/",
      impact: "Demonstrated sophisticated character grounding and multimodal interaction capabilities within a gamified AI framework.",
      imageUrl: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "1",
      title: "Smart Search AI-Powered Semiconductor Products Recommend System",
      description: "A full-stack, AI driven recommendation system using a Retrieval Augmented Generation (RAG) architecture to provide users with tailored semiconductor product suggestions based on natural language queries.",
      technologies: ["Chroma DB", "Lang Chain", "Docker", "Kubernetes", "GCP"],
      impact: "Implemented semantic search and automated data pipelines to merge real-time product data with static datasets for efficient similarity search.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      details: [
        "Engineered an automated data pipeline that scrapes real time product data from manufacturer websites using requests, merging it with static CSV datasets, and logs daily updates.",
        "Implemented a semantic search backend by creating vector embeddings of product data with Hugging Face models and storing them in a Chroma DB vector store for efficient similarity search.",
        "Containerized using Docker engine and Mini Kube, and Kubectl ensuring the modular deployment. Deployed on Google CloudPlatform for monitoring reliability",
        "Engineered an AI-powered product recommendation engine using Python microservices, React frontend, and ML models, delivering personalized shopping suggestions."
      ]
    },
    {
      id: "2",
      title: "ML-Based Performance & Efficiency Prediction Project",
      description: "An end to end data driven performance analysis pipeline, running large scale experiments across multiple system configurations to collect efficiency metrics.",
      technologies: ["Python", "Machine Learning", "Systems", "CAD toolchain"],
      impact: "Trained ML models to predict performance and efficiency metrics, reducing the need for expensive full run evaluations.",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      details: [
        "Automated experiment sweeps by varying key parameters, generating 70+ data points and consolidating results into a structured dataset.",
        "Trained and evaluated machine learning models to predict performance and efficiency metrics, reducing the need for expensive full run evaluations.",
        "Analyzed tradeoffs between configuration choices and system level outcomes, drawing insights into performance, power, and resource utilization behavior."
      ]
    }
  ]
};
