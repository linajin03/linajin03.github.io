export const fileStructure = [
    {
      name: "my-projects",
      type: "folder",
      img: "/assets/folder.png",
      description: "A collection of my projects. Click on the folders to explore.",
      children: [
        {
          name: "Track-the-crowd",
          type: "folder",
          img: "/assets/folder.png",
          description: "My senior capstone project (CSC490, Interactive Experiences for Social Good). Collaborated with Toronto Transit Commision (TTC)’s New Technology & Innovation team to integrate a low-cost, high efficiency computer based system to reduce crowds during subway boarding times	",
          children: [
            {
              name: "arduino.png",
              type: "tech",
              img: "/assets/arduino.png",
              description: "Logo image file.",
              content: "base64 or URL path",
            },
            // {
            //   name: "project1.txt",
            //   type: "file",
            //   img: "/assets/document.png",
            //   description: "Blog post about project 1.",
            //   content: "Details about project 1",
            // },
            {
              name: "website",
              type: "link",
              img: "/assets/link.png",
              description: "Blog post about project 1.",
              content: "Details about project 1",
              url: "https://tycelm.github.io/track-the-crowd/"
            },
          ],
        },
        {
          name: "kor-feminism",
          type: "folder",
          img: "/assets/folder.png",
          description: "My senior research capstone report (AMS312, American Studies: Asian-American Tech Dynamics). In this study, I attempted to analyze the root of the public discomfort around feminism and how this has impacted the public expression of feminism on Korean online platforms, specifically YouTube. I conducted a document research analysis and a sentiment-opinion analysis on comments of specific Korean YouTube videos that discuss Korean feminism.",
          children: [
            {
              name: "report.pdf",
              type: "link",
              img: "/assets/document.png",
              description: "Full report on Korean feminism.",
              content: "/projects/ams312",
              url: "/projects/ams312"
            },
          ],
        },
        {
          name: "food-prediction",
          type: "folder",
          img: "/assets/folder.png",
          description: "Developed a machine learning model from scratch leveraging decision trees, regression, Naïve Bayes, and neural networks to predict food items based on 2,000+ survey responses, achieving a 80.18\% prediction accuracy",
          children: [
            {
              name: "report.pdf",
              type: "file",
              img: "/assets/document.png",
              description: "Logo image file.",
              content: "base64 or URL path",
              url: "/projects/csc311",
            },
          ],
        },
        {
          name: "trading-viz",
          type: "folder",
          img: "/assets/folder.png",
          description: "Designed and developed an interactive web application to simplify financial data analysis and strategy performance evaluation for traders without programming expertise",
          children: [
            {
              name: "report.pdf",
              type: "file",
              img: "/assets/document.png",
              description: "Logo image file.",
              content: "base64 or URL path",
              url: "/projects/csc311",
            },
          ],
        },
        {
          name: "trading-viz",
          type: "folder",
          img: "/assets/folder.png",
          description: "Designed and developed an interactive web application to simplify financial data analysis and strategy performance evaluation for traders without programming expertise",
          children: [
            {
              name: "report.pdf",
              type: "file",
              img: "/assets/document.png",
              description: "Logo image file.",
              content: "base64 or URL path",
              url: "/projects/csc311",
            },
          ],
        },
      ],
    },
    {
      name: "my-experiences",
      type: "folder",
      img: "/assets/folder.png",
      description: "A collection of my experiences. Double-click on the folder to explore.",
      children: [
        {
          name: "RBC",
          type: "folder",
          img: "/assets/rbc.png",
          date: "",
          description: "In the summer of 2024, I worked as a developer in RBC Amplify.",
          children: []
        },
        {
          name: "MCCSS",
          type: "folder",
          img: "/assets/folder.png",
          date: "may-dec 2023",
          description: "",
          children: []
        },
        {
          name: "SDSS",
          type: "folder",
          img: "/assets/folder.png",
          date: "aug-may 2025",
          description: "I co-founded and co-started a club called \"Students in Data Science and Statistics\" to harbour a community of students interested in data science-related fields from all disciplines.",
          children: []
        },
      ]
    }
];
