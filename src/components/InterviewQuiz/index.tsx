"use client";

import { useState, useMemo } from 'react';
import { quizQuestions } from '@/data/quizQuestions';
import { QuizState, QuizQuestion } from '../types/quiz';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Progress } from '../ui/Progress';
import { CheckCircle2, XCircle, ChevronRight, ChevronLeft, RotateCcw, Play } from 'lucide-react';

type Category = 'All' | 'JavaScript' | 'TypeScript' | 'React' | 'Next.js' | 'Tailwind' | 'Responsiveness';
type Difficulty = 'All' | 'Easy' | 'Medium' | 'Hard';

const InterviewQuiz = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('All');
  const [quizStarted, setQuizStarted] = useState(false);

  const filteredQuestions = useMemo(() => {
    let questions = quizQuestions;

    if (selectedCategory !== 'All') {
      questions = questions.filter(q => q.category === selectedCategory);
    }

    if (selectedDifficulty !== 'All') {
      questions = questions.filter(q => q.difficulty === selectedDifficulty);
    }

    return questions;
  }, [selectedCategory, selectedDifficulty]);

  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    selectedAnswers: Array(filteredQuestions.length).fill(null),
    isCompleted: false,
    score: 0,
  });

  // Reset quiz state when filters change
  const handleStartQuiz = () => {
    setQuizState({
      currentQuestionIndex: 0,
      selectedAnswers: Array(filteredQuestions.length).fill(null),
      isCompleted: false,
      score: 0,
    });
    setQuizStarted(true);
  };

  const currentQuestion = filteredQuestions[quizState.currentQuestionIndex];
  const progress = ((quizState.currentQuestionIndex + 1) / filteredQuestions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    const newSelectedAnswers = [...quizState.selectedAnswers];
    newSelectedAnswers[quizState.currentQuestionIndex] = answerIndex;
    setQuizState({ ...quizState, selectedAnswers: newSelectedAnswers });
  };

  const handleNext = () => {
    if (quizState.currentQuestionIndex < filteredQuestions.length - 1) {
      setQuizState({
        ...quizState,
        currentQuestionIndex: quizState.currentQuestionIndex + 1,
      });
    }
  };

  const handlePrevious = () => {
    if (quizState.currentQuestionIndex > 0) {
      setQuizState({
        ...quizState,
        currentQuestionIndex: quizState.currentQuestionIndex - 1,
      });
    }
  };

  const handleSubmit = () => {
    const score = filteredQuestions.reduce((acc, question, index) => {
      return acc + (quizState.selectedAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
    setQuizState({ ...quizState, isCompleted: true, score });
  };

  const handleRestart = () => {
    setQuizStarted(false);
    setQuizState({
      currentQuestionIndex: 0,
      selectedAnswers: Array(filteredQuestions.length).fill(null),
      isCompleted: false,
      score: 0,
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20',
      TypeScript: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
      React: 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20',
      'Next.js': 'bg-foreground/10 text-foreground border-border',
      Tailwind: 'bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/20',
      Responsiveness: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20',
    };
    return colors[category] || 'bg-muted text-muted-foreground';
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors: Record<string, string> = {
      Easy: 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20',
      Medium: 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20',
      Hard: 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20',
    };
    return colors[difficulty] || 'bg-muted text-muted-foreground';
  };

  // Setup Screen
  if (!quizStarted) {
    const categories: Category[] = ['All', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'Responsiveness'];
    const difficulties: Difficulty[] = ['All', 'Easy', 'Medium', 'Hard'];

    return (
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">Frontend Developer Interview Quiz</h1>
            <p className="text-muted-foreground">
              Customize your quiz by selecting a category and difficulty level
            </p>
          </div>

          <Card className="border-2">
            <CardHeader>
              <CardTitle>Quiz Setup</CardTitle>
              <CardDescription>
                Choose your preferences to start the quiz
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Category Selection */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Select Category</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {categories.map((category) => {
                    const count = category === 'All'
                      ? quizQuestions.length
                      : quizQuestions.filter(q => q.category === category).length;

                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          selectedCategory === category
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="font-medium">{category}</div>
                        <div className="text-sm text-muted-foreground">{count} questions</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Difficulty Selection */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Select Difficulty</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {difficulties.map((difficulty) => {
                    let count: number;
                    if (difficulty === 'All') {
                      count = selectedCategory === 'All'
                        ? quizQuestions.length
                        : quizQuestions.filter(q => q.category === selectedCategory).length;
                    } else {
                      count = selectedCategory === 'All'
                        ? quizQuestions.filter(q => q.difficulty === difficulty).length
                        : quizQuestions.filter(q => q.category === selectedCategory && q.difficulty === difficulty).length;
                    }

                    return (
                      <button
                        key={difficulty}
                        onClick={() => setSelectedDifficulty(difficulty)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${
                          selectedDifficulty === difficulty
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <div className="font-medium">{difficulty}</div>
                        <div className="text-sm text-muted-foreground">{count} questions</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quiz Summary */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <h3 className="font-semibold">Quiz Summary</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className={getCategoryColor(selectedCategory)}>
                    {selectedCategory}
                  </Badge>
                  {selectedDifficulty !== 'All' && (
                    <Badge className={getDifficultyColor(selectedDifficulty)}>
                      {selectedDifficulty}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  Total Questions: <span className="font-semibold text-foreground">{filteredQuestions.length}</span>
                </p>
                {filteredQuestions.length === 0 && (
                  <p className="text-sm text-red-600 dark:text-red-400">
                    No questions match your selection. Please choose different filters.
                  </p>
                )}
              </div>

              <Button
                onClick={handleStartQuiz}
                className="w-full"
                size="lg"
                disabled={filteredQuestions.length === 0}
              >
                <Play className="mr-2" />
                Start Quiz ({filteredQuestions.length} Questions)
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Results Screen
  if (quizState.isCompleted) {
    const percentage = (quizState.score / filteredQuestions.length) * 100;
    return (
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2">
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-3xl md:text-4xl">Quiz Completed!</CardTitle>
              <CardDescription className="text-xl">
                Here's how you performed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center space-y-2">
                <div className="text-6xl font-bold text-primary">
                  {quizState.score}/{filteredQuestions.length}
                </div>
                <div className="text-2xl text-muted-foreground">
                  {percentage.toFixed(0)}% Correct
                </div>
                <Progress value={percentage} className="h-3 mt-4" />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <Card className="p-4">
                  <Badge className={getCategoryColor(selectedCategory)}>
                    {selectedCategory}
                  </Badge>
                  <div className="text-sm text-muted-foreground mt-2">Category</div>
                </Card>
                {selectedDifficulty !== 'All' && (
                  <Card className="p-4">
                    <Badge className={getDifficultyColor(selectedDifficulty)}>
                      {selectedDifficulty}
                    </Badge>
                    <div className="text-sm text-muted-foreground mt-2">Difficulty</div>
                  </Card>
                )}
              </div>

              <div className="space-y-4 pt-6">
                <h3 className="text-xl font-semibold">Review Your Answers</h3>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {filteredQuestions.map((question, index) => {
                    const isCorrect = quizState.selectedAnswers[index] === question.correctAnswer;
                    return (
                      <Card key={question.id} className={`p-4 ${isCorrect ? 'border-green-500/50' : 'border-red-500/50'}`}>
                        <div className="flex items-start gap-3">
                          {isCorrect ? (
                            <CheckCircle2 className="text-green-500 shrink-0 mt-1" />
                          ) : (
                            <XCircle className="text-red-500 shrink-0 mt-1" />
                          )}
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              <Badge className={getCategoryColor(question.category)}>
                                {question.category}
                              </Badge>
                              <Badge className={getDifficultyColor(question.difficulty)}>
                                {question.difficulty}
                              </Badge>
                              <span className="text-sm font-medium">Q{index + 1}</span>
                            </div>
                            <p className="font-medium">{question.question}</p>
                            <div className="text-sm space-y-1">
                              <p className="text-muted-foreground">
                                Your answer: <span className={isCorrect ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                                  {question.options[quizState.selectedAnswers[index] ?? 0]}
                                </span>
                              </p>
                              {!isCorrect && (
                                <p className="text-muted-foreground">
                                  Correct answer: <span className="text-green-600 dark:text-green-400">
                                    {question.options[question.correctAnswer]}
                                  </span>
                                </p>
                              )}
                              {question.explanation && (
                                <p className="text-muted-foreground italic mt-2">
                                  {question.explanation}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <Button onClick={handleRestart} className="w-full" size="lg">
                <RotateCcw className="mr-2" />
                Back to Setup
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Quiz Screen
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Quiz In Progress</h1>
            <div className="flex gap-2 mt-2">
              <Badge className={getCategoryColor(selectedCategory)}>
                {selectedCategory}
              </Badge>
              {selectedDifficulty !== 'All' && (
                <Badge className={getDifficultyColor(selectedDifficulty)}>
                  {selectedDifficulty}
                </Badge>
              )}
            </div>
          </div>
          <Button onClick={handleRestart} variant="outline">
            Change Settings
          </Button>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {quizState.currentQuestionIndex + 1} of {filteredQuestions.length}</span>
            <span>{progress.toFixed(0)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex gap-2">
                <Badge className={getCategoryColor(currentQuestion.category)}>
                  {currentQuestion.category}
                </Badge>
                <Badge className={getDifficultyColor(currentQuestion.difficulty)}>
                  {currentQuestion.difficulty}
                </Badge>
              </div>
              <span className="text-sm text-muted-foreground">
                Question {quizState.currentQuestionIndex + 1}
              </span>
            </div>
            <CardTitle className="text-xl md:text-2xl mt-4">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = quizState.selectedAnswers[quizState.currentQuestionIndex] === index;
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all hover:border-primary/50 ${
                    isSelected
                      ? 'border-primary bg-primary/5'
                      : 'border-border bg-card'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'border-primary bg-primary'
                          : 'border-border'
                      }`}
                    >
                      {isSelected && (
                        <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                      )}
                    </div>
                    <span className="text-sm md:text-base">{option}</span>
                  </div>
                </button>
              );
            })}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between gap-4">
          <Button
            onClick={handlePrevious}
            disabled={quizState.currentQuestionIndex === 0}
            variant="outline"
            size="lg"
          >
            <ChevronLeft className="mr-2" />
            Previous
          </Button>

          {quizState.currentQuestionIndex === filteredQuestions.length - 1 ? (
            <Button
              onClick={handleSubmit}
              disabled={quizState.selectedAnswers.some((answer) => answer === null)}
              size="lg"
            >
              Submit Quiz
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={quizState.selectedAnswers[quizState.currentQuestionIndex] === null}
              size="lg"
            >
              Next
              <ChevronRight className="ml-2" />
            </Button>
          )}
        </div>

        {/* Question Navigation Grid */}
        <Card className="p-4">
          <h3 className="text-sm font-semibold mb-3">Quick Navigation</h3>
          <div className="grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 gap-2">
            {filteredQuestions.map((_, index) => {
              const isAnswered = quizState.selectedAnswers[index] !== null;
              const isCurrent = quizState.currentQuestionIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setQuizState({ ...quizState, currentQuestionIndex: index })}
                  className={`aspect-square rounded text-sm font-medium transition-all ${
                    isCurrent
                      ? 'bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2'
                      : isAnswered
                      ? 'bg-primary/20 text-primary hover:bg-primary/30'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InterviewQuiz;
