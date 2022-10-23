interface questionInterface {
  id: string | number;
  classId: string | number;
  question: string;
  answer: string;
}

interface recommendedInterface {
  materialLink: string;
  description: string;
}

interface feedbackInterface {
  feedback: string;
}

export {
  questionInterface,
  recommendedInterface,
  feedbackInterface
}