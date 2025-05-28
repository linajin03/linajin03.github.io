export const fileStructure = [
    {
      name: "my-projects",
      type: "folder",
      description: "A collection of my projects. Click on the folders to explore.",
      children: [
        {
          name: "CS",
          type: "folder",
          description: "Computer Science projects and resources.",
          children: [
            {
              name: "project1.txt",
              type: "file",
              description: "Details about project 1.",
              content: "Details about project 1",
            },
            {
              name: "Images",
              type: "folder",
              description: "Folder containing images related to CS projects.",
              children: [
                {
                  name: "logo.png",
                  type: "file",
                  description: "Logo image file.",
                  content: "base64 or URL path",
                },
              ],
            },
          ],
        },
        {
          name: "STATS",
          type: "folder",
          description: "Statistics projects and resources.",
          children: [
            {
              name: "project2.txt",
              type: "file",
              description: "Details about project 2.",
              content: "Details about project 1",
            },
            {
              name: "Images",
              type: "folder",
              description: "Folder containing images related to Statistics projects.",
              children: [
                {
                  name: "logo.png",
                  type: "file",
                  description: "Logo image file.",
                  content: "base64 or URL path",
                },
              ],
            },
          ],
        },
      ],
    },
];