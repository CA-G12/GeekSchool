import { Key, ReactNode } from 'react';

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

interface GradesTableProps {
  tests: {
    title: string,
    id: number,
    TestsStudents: {
      grade: number,
      id: number,
    }[],
  }[],
  assignments: {
    title: string,
    id: number,
    AssignmentStudents: {
      grade: number,
      id: number,
    }[],
  }[],
}

interface DataType {
  key: Key;
  id: number;
  title: string;
  grade: number;
}

interface GradeCollapseProps {
  title: string,
  id: number,
  children: ReactNode,
}

export {
  questionInterface,
  recommendedInterface,
  feedbackInterface,
  announcementCard,
  GradesTableProps,
  DataType,
  GradeCollapseProps,
};
