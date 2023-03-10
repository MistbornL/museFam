import axios from "axios";
import { handleLogin } from "./handleLogin";

export const handleAnswers = async (
  data,
  questions,
  setFormSubmitted,
  setResult,
  setIsLoading
) => {
  var dataToSend = [];
  const answers = Object.values(data);
  for (let i = 0; i < questions.length; i++) {
    dataToSend.push({ question: questions[i].prompt, answer: answers[i] });
  }
  try {
    const response = await axios.post(
      "https://quiz-production-df49.up.railway.app/quizzes/63cbf6254f08354f7a6f0e8d/check-result",
      dataToSend
    );
    if (response.status === 200) {
      setFormSubmitted(true);
      setIsLoading(false);
      console.log(response.data);
      setResult(response.data.title);
    }
  } catch (error) {
    alert("something went wrong");
    console.error(error);
  }
};
