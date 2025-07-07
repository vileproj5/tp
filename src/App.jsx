import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionCard from './components/QuestionCard';
import CompletionScreen from './components/CompletionScreen';
import { questions } from './data/questions';
import { saveAnamneseData } from './lib/supabase';
import { generateAnamnese } from './lib/pdfGenerator';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome'); // 'welcome', 'questions', 'completion'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  // Filtrar perguntas baseado em dependências
  const getFilteredQuestions = () => {
    return questions.filter(question => {
      if (!question.dependsOn) return true;
      
      const dependentAnswer = answers[question.dependsOn.questionId];
      return dependentAnswer === question.dependsOn.value;
    });
  };

  const filteredQuestions = getFilteredQuestions();
  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const handleStart = () => {
    setCurrentScreen('questions');
  };

  const handleAnswerChange = (answer) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: answer
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setCurrentScreen('completion');
    }
  };

  const handleGeneratePDF = async (responsibleName) => {
    try {
      // Salvar no Supabase primeiro (se configurado)
      try {
        await saveAnamneseData(answers, responsibleName);
        console.log('Dados salvos no Supabase com sucesso');
      } catch (supabaseError) {
        console.warn('Erro ao salvar no Supabase (continuando com PDF):', supabaseError);
        // Continua mesmo se o Supabase falhar
      }

      // Gerar PDF
      const pdf = await generateAnamnese(answers, responsibleName);
      
      // Download do PDF
      const patientName = answers[1] || 'paciente';
      const date = new Date().toISOString().split('T')[0];
      const filename = `anamnese-${patientName.replace(/\s+/g, '-').toLowerCase()}-${date}.pdf`;
      
      pdf.save(filename);
      
      alert('PDF gerado e baixado com sucesso!');
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      alert('Erro ao gerar PDF. Tente novamente.');
    }
  };

  const handleRestart = () => {
    setCurrentScreen('welcome');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  // Atualizar perguntas filtradas quando as respostas mudarem
  useEffect(() => {
    const newFilteredQuestions = getFilteredQuestions();
    if (currentQuestionIndex >= newFilteredQuestions.length && newFilteredQuestions.length > 0) {
      setCurrentQuestionIndex(newFilteredQuestions.length - 1);
    }
  }, [answers]);

  return (
    <div className="App">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onStart={handleStart} />
      )}
      
      {currentScreen === 'questions' && currentQuestion && (
        <QuestionCard
          question={currentQuestion}
          answer={answers[currentQuestion.id]}
          onAnswerChange={handleAnswerChange}
          onNext={handleNext}
          isLastQuestion={currentQuestionIndex === filteredQuestions.length - 1}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={filteredQuestions.length}
        />
      )}
      
      {currentScreen === 'completion' && (
        <CompletionScreen
          answers={answers}
          onGeneratePDF={handleGeneratePDF}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;

