export const model = {
  title: "Music Survey",

  pages: [
    {
      questions: [
        {
          type: "radiogroup",
          name: "experimentation",
          title:
            "How often do you experiment with new sounds and styles in your music?",
          isRequired: true,
          choices: [
            { value: "rarely", text: "Rarely" },
            { value: "sometimes", text: "Sometimes" },
            { value: "often", text: "Often" },
            { value: "always", text: "Always" },
          ],
        },
        {
          type: "radiogroup",
          name: "innovation",
          title: "How important is innovation in the music you make?",
          isRequired: true,
          choices: [
            { value: "notimportant", text: "Not Important" },
            { value: "somewhatimportant", text: "Somewhat Important" },
            { value: "important", text: "Important" },
            { value: "veryimportant", text: "Very Important" },
          ],
        },
        {
          type: "radiogroup",
          name: "teamwork",
          title:
            "How important is teamwork and collaboration in your music making process?",
          isRequired: true,
          choices: [
            { value: "notimportant", text: "Not Important" },
            { value: "somewhatimportant", text: "Somewhat Important" },
            { value: "important", text: "Important" },
            { value: "veryimportant", text: "Very Important" },
          ],
        },
        {
          type: "radiogroup",
          name: "performance",
          title:
            "How much do you enjoy performing in front of a live audience?",
          isRequired: true,
          choices: [
            { value: "notenjoy", text: "Not Enjoy" },
            { value: "somewhatenjoy", text: "Somewhat Enjoy" },
            { value: "enjoy", text: "Enjoy" },
            { value: "veryenjoy", text: "Very Enjoy" },
          ],
        },
        {
          type: "radiogroup",
          name: "precision",
          title:
            "How important is precision and technique in your music making process?",
          isRequired: true,
          choices: [
            { value: "notimportant", text: "Not Important" },
            { value: "somewhatimportant", text: "Somewhat Important" },
            { value: "important", text: "Important" },
            { value: "veryimportant", text: "Very Important" },
          ],
        },
        {
          type: "radiogroup",
          name: "stagepresence",
          title:
            "How much do you value stage presence and charisma in your performances?",
          isRequired: true,
          choices: [
            { value: "notimportant", text: "Not Important" },
            { value: "somewhatimportant", text: "Somewhat Important" },
            { value: "important", text: "Important" },
            { value: "veryimportant", text: "Very Important" },
          ],
        },
        {
          type: "radiogroup",
          name: "complexarrangements",
          title:
            "How much do you enjoy working on complex musical arrangements?",
          isRequired: true,
          choices: [
            { value: "notenjoy", text: "Not Enjoy" },
            { value: "somewhatenjoy", text: "Somewhat Enjoy" },
            { value: "enjoy", text: "Enjoy" },
            { value: "veryenjoy", text: "Very Enjoy" },
          ],
        },
        {
          type: "radiogroup",
          name: "improvementskills",
          title: "How often do you work on improving your musical skills?",
          isRequired: true,
          choices: [
            { value: "rarely", text: "Rarely" },
            { value: "sometimes", text: "Sometimes" },
            { value: "often", text: "Often" },
            { value: "always", text: "Always" },
          ],
        },
        {
          type: "radiogroup",
          name: "newideas",
          title: "How much do you enjoy thinking about new and unique ideas?",
          isRequired: true,
          choices: [
            { value: "notenjoy", text: "Not Enjoy" },
            { value: "somewhatenjoy", text: "Somewhat Enjoy" },
            { value: "enjoy", text: "Enjoy" },
            { value: "veryenjoy", text: "Very Enjoy" },
          ],
        },
        {
          type: "radiogroup",
          name: "workingwithnumbers",
          title:
            "How much do you enjoy working with numbers, facts, and details?",
          isRequired: true,
          choices: [
            { value: "notenjoy", text: "Not Enjoy" },
            { value: "somewhatenjoy", text: "Somewhat Enjoy" },
            { value: "enjoy", text: "Enjoy" },
            { value: "veryenjoy", text: "Very Enjoy" },
          ],
        },
      ],
    },
  ],
  showProgressBar: "top",
  showNavigationButtons: true,
};
