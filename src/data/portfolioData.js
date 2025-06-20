// Personal Information Configuration
// Update this file to customize your portfolio content

export const personalInfo = {
  name: "Vedant Thakkar",
  title: "Applied AI & MLOps Engineer",
  subtitle: "Innovating at the intersection of language and vision to enhance AI reliability, with proven experience in MLOps, scalable data pipelines, and a track record of optimizing model performance.",

  // About Me Section
  about: {
    paragraphs: [
      "My journey in Artificial Intelligence is driven by a passion for transforming complex data into actionable insights and building intelligent systems that make a tangible difference. With a Master's in AI, I delve into cutting-edge research, particularly in Natural Language Processing (NLP) and Generative AI, focusing on enhancing the trustworthiness and effectiveness of AI solutions.",
      "I thrive on bridging the gap between theoretical advancements and real-world challenges. My work involves developing robust AI pipelines, from mitigating hallucination in large language models to optimizing machine learning performance and designing scalable data architectures. I am committed to creating AI that is not only powerful but also reliable and ethically sound.",
      "Beyond the technical aspects, my experience spans strategic data analysis and full-stack application development, allowing me to approach problems with a holistic perspective. I am always seeking opportunities to collaborate on innovative projects that leverage AI to solve significant problems and contribute positively to society."
    ]
  },

  // CORRECTED: Education section structured as a list (array)
  education: [
    {
      university: "DePaul University, Chicago, IL",
      degree: "Master of Science in Artificial Intelligence",
      duration: "Sep 2023 – Jun 2025",
      description: "Led applied research at DePaul's AI Lab, focusing on generative safety and multimodal chart understanding. Key work involved developing a RAG pipeline that reduced AI hallucinations by 22% and improved data extraction from scientific charts by 15%.",
      researchFocus: "Hallucination Mitigation in LLMs & Advanced Semantic Search",
      courses: [
        "Advanced Machine Learning",
        "Deep Learning",
        "Natural Language Processing", 
        "Cognitive Science",
        "Recommender Systems",
        "Reinforcement Learning",
        "MLOps",
        "Image Processing"
      ]
    },
    {
      university: "Gujarat Technological University, India",
      degree: "Bachelor of Science in Computer Science",
      duration: "Jan 2018 – Jan 2022",
      description: "Completed a comprehensive computer science curriculum with a focus on software development and machine learning principles, laying the groundwork for advanced AI studies.",
      researchFocus: null,
      courses: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Web Engineering"
      ]
    }
  ],

  // Skills organized by category
  skills: {
    "Natural Language & Generative AI": [
      "Retrieval-Augmented Generation (RAG)",
      "Large Language Models (GPT, T5, BERT)",
      "Multimodal QA (LayoutLM)",
      "Fine-Tuning (LoRA)",
      "Vector Databases (FAISS)"
    ],
    "ML & Deep Learning": [
      "Predictive Modeling (XGBoost, CNNs)",
      "Recommender Systems",
      "Ensemble Methods",
      "Transformers",
      "Python (Scikit-learn, PyTorch, TensorFlow)"
    ],
    "Cloud & MLOps": [
      "CI/CD Pipelines",
      "Docker & Kubernetes",
      "AWS (S3, SageMaker, EC2)",
      "Google Cloud Platform (GCP)",
      "MLflow & Hydra"
    ],
    "Tools & Frameworks": [
      "GitHub & GitHub Actions",
      "Hugging Face",
      "LangChain",
      "Google's Agent Development Kit (ADK)",
      "FastAPI & Flask"
    ]
  },

  // Contact Information
  contact: {
    github: "https://github.com/Vedant-1012",
    linkedin: "https://www.linkedin.com/in/vedant-thakkar-ai/",
    email: "vedanttvs1012@gmail.com"
  }
};

// Projects Configuration
export const projects = [
  {
    id: 1,
    name: "Hallucination Mitigation Agentic Pipeline",
    description: "Developed a research framework using Google's Agent Development Kit (ADK) to compare RAG, CoT, and NLI-filtered agents in reducing AI chatbot hallucinations. The system provides a web interface to visualize agent reasoning and resources, demonstrating improved reliability in AI-generated responses for education and healthcare.",
    topics: ["Python", "Google ADK", "RAG", "CoT", "NLI", "LLMs", "Gradio", "Docker"],
    githubUrl: "https://github.com/Vedant-1012/Hallucination-Mitigation-Agentic-PipeLine",
    liveUrl: "https://dietitian-api-411547369.us-central1.run.app/dev-ui?app=RAG_agent",
    featured: true
  },
  {
    id: 2,
    name: "Multi-Agent Recommender System (MARS)",
    description: "Created an intelligent, multi-agent chatbot for personalized movie recommendations and factual information. It leverages a collaborative AI architecture with specialized agents, LLMs (Gemini models), and a custom vector database (FAISS) using semantically rich embeddings for accurate content-based search.",
    topics: ["Python", "Multi-Agent Systems", "LLMs", "Gemini", "FAISS", "Vector Databases", "Gradio","Goole's ADK","Docker","GCP Cloud Run"],
    githubUrl: "https://github.com/Vedant-1012/Multi-Agent-Recommender-System-MARS-",
    liveUrl: null,
    featured: true
  },
  {
    id: 3,
    name: "MS.Potts_NutriBot",
    description: "Developed a personalized AI nutrition assistant powered by Gemini, built with modern MLOps practices. This project focuses on providing tailored nutritional advice and information, demonstrating robust CI/CD pipelines and scalable deployment strategies.",
    topics: ["Python", "Gemini API", "MLOps", "FastAPI", "Gradio", "Docker", "GCP Cloud Run", "Vertex AI", "Mlflow","Hydra"],
    githubUrl: "https://github.com/Vedant-1012/MS.Potts_NutriBot",
    liveUrl: "https://ms-potts-frontend-1033579299449.us-central1.run.app/",
    featured: true
  },
  {
    id: 4,
    name: "Semiconductor Predictive Maintenance Solution",
    description: "Implemented a predictive maintenance solution for the semiconductor industry, focusing on data validation, database management, and robust data pipelines. The system ensures data quality and integrity for training and prediction, crucial for anticipating equipment failures.",
    topics: ["Python", "Data Validation", "Database Management", "Data Pipelines", "Predictive Maintenance"],
    githubUrl: "https://github.com/Vedant-1012/Semiconductor-Predictive-Maintenance-Solution",
    liveUrl: null,
    featured: true
  },
  {
    id: 5,
    name: "Multi-Model Movie Recommendations",
    description: "Developed a movie recommendation system that leverages multiple models to provide enhanced personalization. This project explores various recommendation techniques to improve accuracy and user satisfaction.",
    topics: ["Python", "Machine Learning", "Recommender Systems","Informatin Retrieval","Hybrid-NCF","BPR", "Data Analysis"],
    githubUrl: "https://github.com/Vedant-1012/Multi-Model-Movie-Recommendations",
    liveUrl: null,
    featured: true
  }
];