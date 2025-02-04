export interface QuizQuestion {
   id: number;
   theme: string;
   level: string;
   type: string;
   question: string;
   options: {
      id: string;
      text: string;
      image?: string;
   }[];
   correctAnswer: string;
   explanation: string;
}

export interface QuizState {
   currentQuestionIndex: number;
   selectedQuestions: QuizQuestion[];
   score: number;
   answers: Record<number, string>;
   currentLevel: string;
   totalScore: number;
}

export interface QuizResults {
   score: number;
   totalQuestions: number;
   level: string;
   isWinner: boolean;
   winnerCode: string | null;
   percentageCorrect: number;
   quizState: QuizState;
}

export interface UserInfo {
   fullName: string;
   email: string;
   phone: string;
   profession: string;
   level: 'DÉBUTANT' | 'AVANCÉ' | 'EXPERT';
}
