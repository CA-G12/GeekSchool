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

interface profileNavLinkInterface {
  name: string;
  path: string;
  activeColor: string;
  newPath: string | null;
  // eslint-disable-next-line no-unused-vars
  handleClicked: (path: string) => void;
}

interface StudentAssignmentCardProps {
  title: string;
  createdAt: string;
  description: string;
}

interface TeacherAssignmentCardProps {
  id: number;
  title: string;
  createdAt: string;
  description: string;
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
  profileNavLinkInterface,
  StudentAssignmentCardProps,
  TeacherAssignmentCardProps,
  ClassCardProps,
};
