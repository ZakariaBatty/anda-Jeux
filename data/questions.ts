import type { QuizQuestion } from '@/types/quiz';

export const quizQuestions: Record<string, QuizQuestion[]> = {
   DÉBUTANT: [
      {
         id: 1,
         question: "Quel animal vit dans l'eau ?",
         options: [
            { id: 'A', text: 'Poisson' },
            { id: 'B', text: 'Chat' },
            { id: 'C', text: 'Oiseau' },
         ],
         correctAnswer: 'A',
         explanation:
            "Les poissons sont des animaux aquatiques qui vivent dans l'eau et respirent par des branchies.",
      },
      {
         id: 2,
         question: "Les poissons respirent-ils sous l'eau ?",
         options: [
            { id: 'A', text: 'Vrai' },
            { id: 'B', text: 'Faux' },
         ],
         correctAnswer: 'A',
         explanation:
            "Les poissons utilisent leurs branchies pour extraire l'oxygène de l'eau, leur permettant de respirer sous l'eau.",
      },
      // Add 18 more questions for DÉBUTANT level...
   ],
   AVANCÉ: [
      {
         id: 1,
         question:
            'Quel animal peut être élevé dans une ferme aquacole au Maroc ?',
         options: [
            { id: 'A', text: 'Crevette' },
            { id: 'B', text: 'Chameau' },
            { id: 'C', text: 'Poulet' },
         ],
         correctAnswer: 'A',
         explanation:
            'Les crevettes sont couramment élevées dans des fermes aquacoles au Maroc.',
      },
      {
         id: 2,
         question: 'Les huîtres produisent-elles des perles ?',
         options: [
            { id: 'A', text: 'Vrai' },
            { id: 'B', text: 'Faux' },
         ],
         correctAnswer: 'A',
         explanation:
            "Certaines espèces d'huîtres peuvent produire des perles naturellement ou par culture.",
      },
      // Add 18 more questions for AVANCÉ level...
   ],
   EXCELLENT: [
      {
         id: 1,
         question: 'Quel poisson est souvent élevé au Maroc ?',
         options: [
            { id: 'A', text: 'Dorade' },
            { id: 'B', text: 'Piranha' },
            { id: 'C', text: 'Poisson-clown' },
         ],
         correctAnswer: 'A',
         explanation:
            "La dorade est l'une des espèces de poissons couramment élevées dans l'aquaculture marocaine.",
      },
      {
         id: 2,
         question:
            "Les algues sont-elles également cultivées dans l'aquaculture au Maroc ?",
         options: [
            { id: 'A', text: 'Vrai' },
            { id: 'B', text: 'Faux' },
         ],
         correctAnswer: 'A',
         explanation:
            "Oui, la culture des algues fait partie de l'industrie aquacole au Maroc.",
      },
      // Add 18 more questions for EXCELLENT level...
   ],
};

export function getRandomQuestions(
   level: string,
   count: number
): QuizQuestion[] {
   const questions = quizQuestions[level];
   if (!questions || questions.length === 0) {
      return [];
   }
   const shuffled = [...questions].sort(() => Math.random() - 0.5);
   return shuffled.slice(0, Math.min(count, questions.length));
}
