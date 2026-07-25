const DATA = [
  {
    id: 1,
    title: "AI Product Engineering",
    subtitle: "Week 1 of 12",
    description:
      "Design, Build & Deploy Enterprise Apps with AI-Assisted Workflows",
    themeColor: "#1a237e", // expo-cbt
    article: {
      thumbnail: "./images/cover-git.jpg",
      headline: "ExpoCBT Case Study",
      description:
        "Open-source CBT WebApp. Dept. of Computer Science & Engineering, OAU",
      keywords:
        "typescript python csharp postgres clause-ai open-source build-in-public",
      framework: "Software Development Life Cycle (SDLC)",
    },
    chapters: [
      { chapter: "Scope Definition", subChapters: false },
      { chapter: "Resource Planning", subChapters: false },
      { chapter: "Design" },
      { chapter: "Development" },
      { chapter: "Testing" },
      { chapter: "Deployment" },
      { chapter: "Maintenance", subChapters: false },
    ],
    topics: [
      {
        page: "1",
        topic: "Product Requirements Document (PRD)",
      },
      {
        page: "2",
        topic: "Software Requirements Specification (SRS)",
      },
      {
        page: "3",
        topic: "Entity Relationship Diagram (ERD) - Mermaid",
      },
      {
        page: "4",
        topic: "Design Systems, Mood Boards & Prototyping - Figma",
      },
      {
        page: "5",
        topic: "Develop Frontend/UI Components - React, Zustand",
      },
      {
        page: "7",
        topic: "Develop Backend APIs - Django, PostgreSQL",
      },
      // {
      //   page: "9",
      //   topic: "Integrate REST API, OpenAI GPT-4.1 nano",
      // },
      {
        page: "10",
        topic: "Automated Software Testing - RTL, pytest, Playwright",
      },
      {
        page: "12",
        topic: "CI/CD, DevOps - Docker, Azure App Services",
      },
      {
        page: "13",
        bonus: true,
        topic: "Agile Workflow (Kanban) - GitHub Projects",
      },
    ],
  },
  {
    id: 2,
    title: "ML Data Engineering",
    subtitle: "Week 1 of 6",
    description:
      "Analyze, Train & Deploy Data Models on Cloud Jupyter Notebooks",
    themeColor: "#20beff", // kaggle
    article: {
      thumbnail: "./images/cover-lake.jpg",
      headline: "Qverse Case Study",
      description:
        "Discover Web3 Apps. Community-led Projects by Bitcoin Verse Ecosystem.",
      keywords:
        "python numpy scikit-learn joblib clause-ai open-source build-in-public",
      framework: "Cross-Industry Standard Process for Data Mining (CRISP-DM)",
    },
    chapters: [
      { chapter: "Scope Definition", subChapters: false },
      { chapter: "Data Analysis" },
      { chapter: "Feature Engineering" },
      { chapter: "Modeling" },
      { chapter: "Evaluation", subChapters: false },
      { chapter: "Deployment", subChapters: false },
    ],
    topics: [
      {
        page: "1",
        topic: "Situation, Task, Action & Result (STAR)",
      },
      {
        page: "1",
        topic: "Exploratory Data Analysis (EDA)",
      },
      {
        page: "2",
        topic: "Data Cleaning & Augmentation, SMOTE",
      },
      {
        page: "2",
        topic: "Normalization, Feature Engineering",
      },
      {
        page: "3",
        topic: "Linear & Logistic Regression, Decision Trees",
      },
      {
        page: "4",
        topic: "Random Forest, K-Means Clustering",
      },
      {
        page: "5",
        topic: "Train, Test & Measure Data Model",
      },
      {
        page: "6",
        topic: "Deploy Data Model - Kaggle",
      },
      {
        page: "7",
        bonus: true,
        topic: "Deploy feature-based REST API - Django",
      },
    ],
  },
];
