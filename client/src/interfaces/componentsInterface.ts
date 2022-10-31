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

interface announcementCard {
  description: string;
  createdAt: string;
}

interface ClassCardProps {
  className: string;
  teacherName: string;
  assignments: {
    id: number;
    title: string;
    createdAt: string;
  }[];
  tests: {
    id: number;
    title: string;
    date: string;
  }[];
}

export {
  questionInterface,
  recommendedInterface,
  feedbackInterface,
  announcementCard,
  ClassCardProps,
};
