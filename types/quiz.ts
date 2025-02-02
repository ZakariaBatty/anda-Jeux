export interface UserInfo {
   fullName: string;
   email: string;
   phone: string;
   profession: string;
   level: 'ENFANT' | 'DÉBUTANT' | 'AVANCÉ';
}

export interface QuizOption {
   id: string;
   text: string;
   image?: string;
}

export interface QuizQuestion {
   id: number;
   theme: string;
   level: 'Easy' | 'Medium' | 'Difficult';
   type: 'multiple-choice' | 'true-false' | 'image-association';
   question: string;
   options: QuizOption[];
   correctAnswer: string;
   explanation: string;
   image?: string;
}

export interface QuizState {
   currentLevel: 'Easy' | 'Medium' | 'Difficult';
   currentQuestionIndex: number;
   selectedQuestions: QuizQuestion[];
   score: number;
   answers: Record<number, string>;
   totalScore: number;
}

export interface QuizResults {
   score: number;
   totalQuestions: number;
   level: string;
   isWinner: boolean;
   winnerCode?: string | null;
   quizState: string;
   percentageCorrect: number;
}
