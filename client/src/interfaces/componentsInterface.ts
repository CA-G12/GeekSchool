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

interface StudentAssignmentCardProps {
  title: string;
  createdAt: string;
  description: string;
}

interface TeacherAssignmentCardProps {
  title: string;
  createdAt: string;
  description: string;
  submitted: number;
  notSubmitted: number;
}

export {
  questionInterface,
  recommendedInterface,
  feedbackInterface,
  announcementCard,
  StudentAssignmentCardProps,
  TeacherAssignmentCardProps,
};
