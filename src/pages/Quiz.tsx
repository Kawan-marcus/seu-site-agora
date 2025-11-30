import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getRandomQuestions, Question } from "@/data/quiz";
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>([]);

  useEffect(() => {
    startQuiz();
  }, []);

  const startQuiz = () => {
    const randomQuestions = getRandomQuestions(5);
    setQuestions(randomQuestions);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(5).fill(false));
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return;
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      }, 1500);
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 1500);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const percentage = Math.round((score / questions.length) * 100);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Carregando quiz...</p>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 text-center">
              <Trophy className="w-20 h-20 text-warning mx-auto mb-6" />
              <h1 className="text-4xl font-bold mb-4">Quiz Concluído!</h1>

              <div className="mb-8">
                <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-primary to-space-blue bg-clip-text text-transparent">
                  {percentage}%
                </div>
                <p className="text-xl text-muted-foreground">
                  Você acertou {score} de {questions.length} questões
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {percentage >= 80 && (
                  <p className="text-lg text-success">
                    🎉 Excelente! Você domina o conteúdo sobre o Sistema Solar!
                  </p>
                )}
                {percentage >= 60 && percentage < 80 && (
                  <p className="text-lg text-space-blue">
                    👍 Muito bem! Continue estudando para melhorar ainda mais!
                  </p>
                )}
                {percentage < 60 && (
                  <p className="text-lg text-warning">
                    📚 Continue praticando! Revise os módulos para melhorar seu desempenho.
                  </p>
                )}
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button onClick={startQuiz} size="lg" className="gap-2">
                  <RotateCcw className="w-5 h-5" />
                  Refazer Quiz
                </Button>
                <Link to="/modulos">
                  <Button variant="outline" size="lg">
                    Revisar Módulos
                  </Button>
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const hasAnswered = answeredQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">
                Questão {currentQuestion + 1} de {questions.length}
              </h1>
              <div className="text-lg font-medium">
                Pontuação: {score}/{questions.length}
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-8 mb-6">
                <h2 className="text-2xl font-bold mb-8">{question.question}</h2>

                <div className="space-y-4">
                  {question.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrectAnswer = index === question.correctAnswer;
                    const showCorrect = hasAnswered && isCorrectAnswer;
                    const showIncorrect = hasAnswered && isSelected && !isCorrect;

                    return (
                      <motion.button
                        key={index}
                        whileHover={!hasAnswered ? { scale: 1.02 } : {}}
                        whileTap={!hasAnswered ? { scale: 0.98 } : {}}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={hasAnswered}
                        className={`w-full p-4 rounded-lg text-left transition-all ${
                          showCorrect
                            ? "bg-success/20 border-2 border-success"
                            : showIncorrect
                            ? "bg-destructive/20 border-2 border-destructive"
                            : isSelected
                            ? "bg-primary/20 border-2 border-primary"
                            : "bg-muted hover:bg-muted/80 border-2 border-transparent"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-lg">{option}</span>
                          {showCorrect && (
                            <CheckCircle2 className="w-6 h-6 text-success" />
                          )}
                          {showIncorrect && (
                            <XCircle className="w-6 h-6 text-destructive" />
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </Card>

              {hasAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card
                    className={`p-6 mb-6 ${
                      isCorrect
                        ? "bg-success/10 border-success/20"
                        : "bg-destructive/10 border-destructive/20"
                    }`}
                  >
                    <div className="flex gap-3">
                      {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      )}
                      <div>
                        <h3 className="font-bold mb-2">
                          {isCorrect ? "Correto!" : "Incorreto"}
                        </h3>
                        <p className="text-muted-foreground">{question.explanation}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}

              <div className="flex justify-end">
                <Button
                  onClick={handleNextQuestion}
                  disabled={selectedAnswer === null || hasAnswered}
                  size="lg"
                >
                  {currentQuestion < questions.length - 1
                    ? "Próxima Questão"
                    : "Ver Resultado"}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;
