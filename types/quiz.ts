export interface UserInfo {
   fullName: string;
   email: string;
   phone: string;
   profession: string;
   level: 'DÉBUTANT' | 'AVANCÉ' | 'EXCELLENT';
}

export interface QuizQuestion {
   id: number;
   question: string;
   options: {
      id: string;
      text: string;
   }[];
   correctAnswer: string;
   explanation: string;
}

export interface QuizState {
   currentQuestionIndex: number;
   selectedQuestions: QuizQuestion[];
   score: number;
   answers: Record<number, string>;
}

export interface QuizResults {
   score: number;
   totalQuestions: number;
   level: string;
}
