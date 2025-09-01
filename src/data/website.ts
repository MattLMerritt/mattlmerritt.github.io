import { WebsiteData } from '@/types';

export const websiteData: WebsiteData = {
  personalInfo: {
    name: "Matthew Merritt",
    profession: "Software Engineer @ Visa",
    city: "Austin, TX",
    email: "merrittlmatt@gmail.com",
    profileImageUrl: "/matthew-profile.jpg",
    profileImageAlt: "Matthew Merritt",
  },
  experiences: [
    {
      id: "exp1",
      title: "Software Developer",
      company: "Visa",
      period: "June 2024 – Present",
      details: [
        "Took the initiative to design and engineer 'VADP in a box,' a comprehensive Docker-based solution for Visa's decisions platform, a system of distributed micro services, (including Kafka, Redis, etc.) that enables rapid, stable local development for 30+ developers. After presenting the solution, it was greenlit by senior leadership and now serves as the primary showcase tool, driving a strategic new platform feature.",
        "Spearheaded a zero-downtime configuration framework, working closely with multiple service teams to design key APIs and integrate Kafka and Redis, enabling real-time deployment of business rules into live transaction handling workflows.",
        "Selected as a key engineer for the platform's strategic expansion to AWS, responsible for developing critical features to achieve on-premise parity for an Account to Account business function. Currently engineering foundational support in the decision service for a newly acquired ML scoring service, setting the stage for its full integration.",
        "Enhanced platform stability and security by pioneering its first performance testing framework, establishing comprehensive observability (monitoring/alerting with Grafana/Prometheus) in a new development environment, and engineering configurable TLS certificate management for database connections."
      ],
      skills: ["Software Infrastructure", "Software Design", "Engineering", "AWS", "Kafka", "Redis", "Docker", "Kubernetes", "Java", "Grafana", "Prometheus"]
    },
    {
      id: "exp2",
      title: "SWE Intern, Search Infrastructure",
      company: "Google",
      period: "May 2023 – August 2023",
      details: [
        "Successfully migrated backend APIs for Google Search’s shopping features, impacting 24 million daily users, to modern C++ frameworks, and modernized serving paths.",
        "Drove multiple stages of the development process, including authoring design documents, participating in design reviews, implementing features, and supporting internal launches."
      ],
      skills: ["Technical Documentation", "Infrastructure", "Systems Design", "C++"]
    },
    {
      id: "exp3",
      title: "Technical Intern",
      company: "Pacific Northwest National Laboratory",
      period: "August 2022 – April 2023",
      details: [
        "Designed, documented, and developed a comprehensive data management system, including a secure server-side REST API (Java) and associated client-side library (JavaScript), for research simulation data."
      ],
      skills: ["REST APIs", "Design Systems", "API Testing", "API Development", "Java", "JavaScript"]
    },
    {
      id: "exp4",
      title: "STEP Intern, Cloud Infrastructure",
      company: "Google",
      period: "May 2022 – August 2022",
      details: [
        "Built a highly requested internal C++ debugging tool for Google’s Pub/Sub distributed message delivery service, engineering code to handle concurrency and callbacks across distributed systems."
      ],
      skills: ["Distributed Systems", "Google Cloud", "Concurrent Programming", "C++"]
    },
    {
      id: "exp5",
      title: "STEP Intern, Core Infrastructure",
      company: "Google",
      period: "May 2021 – August 2021",
      details: [
        "Implemented a C++ library and command-line tool to adjust resource allocations for internal Google key/value serving infrastructure, safely deallocating over 10 TB of RAM on its first run and interfacing with monitoring systems handling over 35 million keys per second."
      ],
      skills: ["Mathematical Modeling", "Git", "Multithreading", "Infrastructure", "C++"]
    },
  ],
  skills: [
    { id: "skill1", name: "Java" },
    { id: "skill2", name: "Golang" },
    { id: "skill3", name: "Python" },
    { id: "skill4", name: "JavaScript" },
    { id: "skill5", name: "SQL" },
    { id: "skill6", name: "Unix(Bash)" },
    { id: "skill7", name: "C++" },
    { id: "skill8", name: "Redis" },
    { id: "skill9", name: "Kafka" },
    { id: "skill10", name: "Hazelcast" },
    { id: "skill11", name: "Neo4j" },
    { id: "skill12", name: "Postgress" },
    { id: "skill13", name: "MongoDB" },
    { id: "skill14", name: "Docker" },
    { id: "skill15", name: "Kubernetes" },
    { id: "skill16", name: "Linux" },
    { id: "skill17", name: "Jenkins" },
    { id: "skill18", name: "Postman" },
    { id: "skill19", name: "Swagger" },
    { id: "skill20", name: "Git/Bitbucket" },
    { id: "skill21", name: "Jira" },
    { id: "skill22", name: "Cline" },
    { id: "skill23", name: "Aider" },
    { id: "skill24", name: "Ansible" },
  ],
  projects: [
    {
      id: "proj1",
      slug: "visa-advanced-decisioning-platform",
      title: "Visa Advanced Decisioning Platform (VADP) in a Box",
      description: "Enhanced local development environment for 30+ engineers, streamlining the development workflow for Visa's decisioning platform with containerized services and automated setup.",
      imageUrl: "https://placehold.co/600x400/1e40af/ffffff?text=VADP",
      imageAlt: "VADP Platform",
      projectUrl: "/projects/visa-advanced-decisioning-platform",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["Java", "Docker", "Kubernetes", "AWS", "Kafka", "Redis"],
      timeline: "6 months",
      role: "Lead Software Engineer",
      overview: [
        "Engineered a comprehensive local development solution that simplified complex microservices architecture for Visa's Advanced Decisioning Platform.",
        "The platform enables developers to quickly spin up the entire VADP ecosystem locally, reducing setup time from days to hours.",
        "Implemented automated testing, deployment pipelines, and monitoring to ensure development environment parity with production."
      ],
      features: [
        "Containerized microservices architecture",
        "One-click local environment setup",
        "Automated database seeding and migration",
        "Developer documentation and onboarding guides"
      ],
      challenges: [
        {
          title: "Complex Service Dependencies",
          description: "Solved intricate service dependency issues by implementing a smart startup orchestration system that ensures services boot in the correct order with health checks."
        },
        {
          title: "Performance Optimization",
          description: "Optimized container resource allocation and implemented efficient caching strategies, reducing local environment startup time by 60%."
        }
      ]
    },
    {
      id: "proj2",
      slug: "zero-downtime-config-framework",
      title: "Zero-Downtime Configuration Framework",
      description: "Real-time business rule deployment system using Kafka and Redis, enabling dynamic configuration changes without service restarts or downtime.",
      imageUrl: "https://placehold.co/600x400/dc2626/ffffff?text=Config+Framework",
      imageAlt: "Configuration Framework",
      projectUrl: "/projects/zero-downtime-config-framework",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["Java", "Kafka", "Redis", "Golang", "Docker"],
      timeline: "4 months",
      role: "Software Engineer",
      overview: [
        "Developed a revolutionary configuration management system that allows real-time updates to business rules and application settings without requiring service restarts.",
        "The framework uses event-driven architecture with Kafka for reliable message delivery and Redis for fast configuration caching.",
        "Successfully deployed across multiple Visa services, enabling rapid business rule changes and A/B testing capabilities."
      ],
      features: [
        "Real-time configuration updates",
        "Event-driven architecture with Kafka",
        "Redis-based caching for low latency",
        "Audit logging and change tracking",
        "Multi-environment support"
      ],
      challenges: [
        {
          title: "Consistency Guarantees",
          description: "Implemented distributed consensus mechanisms to ensure configuration consistency across all service instances during updates."
        },
        {
          title: "Backward Compatibility",
          description: "Designed a sophisticated versioning system that maintains backward compatibility while allowing services to migrate to new configurations at their own pace."
        }
      ]
    },
    {
      id: "proj3",
      slug: "google-search-shopping-migration",
      title: "Google Search Shopping API Migration",
      description: "Successfully migrated backend APIs for Google Search's shopping features, impacting 24M daily users while modernizing the serving architecture using latest Search Frameworks.",
      imageUrl: "https://placehold.co/600x400/1a73e8/ffffff?text=Google+Search",
      imageAlt: "Google Search Migration",
      projectUrl: "/projects/google-search-shopping-migration",
      liveUrl: "#",
      githubUrl: "#",
      technologies: ["C++", "Python", "Protocol Buffers"],
      timeline: "3 months",
      role: "Software Engineering Intern",
      overview: [
        "Led the migration of critical backend APIs serving Google Search's shopping features to a modern, scalable architecture.",
        "The project involved refactoring legacy code, updating data pipelines, and ensuring zero-downtime deployment for millions of daily users.",
        "Collaborated with senior engineers to design and implement comprehensive testing strategies and rollback mechanisms."
      ],
      features: [
        "Migrated legacy APIs to modern frameworks",
        "Improved system performance and scalability",
        "Comprehensive testing and monitoring",
        "Enhanced error handling and recovery",
        "Detailed migration documentation"
      ],
      challenges: [
        {
          title: "Scale and Reliability",
          description: "Ensured the migration maintained 99.99% uptime while serving 24M daily users, implementing sophisticated traffic splitting and monitoring."
        },
        {
          title: "Legacy System Integration",
          description: "Successfully bridged old and new systems during the transition period, maintaining data consistency and API compatibility."
        }
      ]
    },
  ],
  contactLinks: [
    { id: "github", name: "GitHub", url: "https://github.com/MattLMerritt" },
    { id: "linkedin", name: "LinkedIn", url: "https://www.linkedin.com/in/matthew-merritt/" },
    { id: "email", name: "Email", url: "mailto:merritlmatt@gmail.com" },
  ],
  education: [
    {
      id: "edu1",
      degree: "Bachelor of Science in Computer Science",
      institution: "Rensselaer Polytechnic Institute",
      period: "August 2020 – May 2024",
      gpa: "3.71",
      honors: ["RPI’s Founders Award of Excellence", "Deans Honor list"]
    }
  ],
};
