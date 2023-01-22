import axios from "axios";

export const handleQuestions = async (setData) => {
  try {
    const response = await axios.get(
      `https://quiz-production-df49.up.railway.app/quizzes/63cbf6254f08354f7a6f0e8d`
    );

    if (response.status === 200) {
      setData(response.data.questions);
    }
  } catch (error) {
    alert("something went wrong");
    console.error(error);
  }
};
