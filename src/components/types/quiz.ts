export interface QuizQuestion {
  id: number;
  category: 'JavaScript' | 'TypeScript' | 'React' | 'Next.js' | 'Tailwind' | 'Responsiveness';
  difficulty: 'Easy' | 'Medium' | 'Hard';
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  selectedAnswers: (number | null)[];
  isCompleted: boolean;
  score: number;
}
