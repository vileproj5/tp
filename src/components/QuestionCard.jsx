import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { Play, Pause, Volume2 } from 'lucide-react';

const QuestionCard = ({ question, answer, onAnswerChange, onNext, isLastQuestion, currentQuestionIndex, totalQuestions }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioEnded, setAudioEnded] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setAudioEnded(false);
    setShowInput(false);
    setIsPlaying(false);
  }, [question.id]);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setAudioEnded(true);
    setShowInput(true);
  };

  const handleAudioError = () => {
    // Se o áudio não carregar, mostra o input imediatamente
    setAudioEnded(true);
    setShowInput(true);
    setIsPlaying(false);
  };

  const renderInput = () => {
    switch (question.type) {
      case 'textarea':
        return (
          <Textarea
            value={answer || ''}
            onChange={(e) => onAnswerChange(e.target.value)}
            placeholder="Digite sua resposta..."
            className="answer-input min-h-[100px]"
          />
        );
      case 'radio':
        return (
          <RadioGroup
            value={answer || ''}
            onValueChange={onAnswerChange}
            className="space-y-3"
          >
            {question.options.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option} className="text-lg">{option}</Label>
              </div>
            ))}
          </RadioGroup>
        );
      case 'date':
        return (
          <Input
            type="date"
            value={answer || ''}
            onChange={(e) => onAnswerChange(e.target.value)}
            className="answer-input"
          />
        );
      case 'number':
        return (
          <Input
            type="number"
            value={answer || ''}
            onChange={(e) => onAnswerChange(e.target.value)}
            placeholder="Digite um número..."
            className="answer-input"
          />
        );
      case 'tel':
        return (
          <Input
            type="tel"
            value={answer || ''}
            onChange={(e) => onAnswerChange(e.target.value)}
            placeholder="(00) 00000-0000"
            className="answer-input"
          />
        );
      default:
        return (
          <Input
            type="text"
            value={answer || ''}
            onChange={(e) => onAnswerChange(e.target.value)}
            placeholder="Digite sua resposta..."
            className="answer-input"
          />
        );
    }
  };

  const canProceed = () => {
    if (!question.required) return true;
    return answer && answer.toString().trim() !== '';
  };

  return (
    <div className="question-container bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="question-card p-8 max-w-4xl mx-auto">
      {/* Barra de progresso */}
      <div className="w-full max-w-2xl mb-8">
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
        <p className="text-center mt-2 text-sm text-muted-foreground">
          Pergunta {currentQuestionIndex + 1} de {totalQuestions}
        </p>
      </div>

      {/* Pergunta */}
      <div className="question-text">
        {question.text}
      </div>

      {/* Player de áudio */}
      <div className="audio-player mb-8">
        <audio
          ref={audioRef}
          onEnded={handleAudioEnded}
          onError={handleAudioError}
          preload="metadata"
        >
          <source src={`/audio/${question.audioFile}`} type="audio/mpeg" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
        
        <div className="flex items-center justify-center space-x-4">
          <Button
            onClick={handlePlayAudio}
            className="audio-button"
            size="lg"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            <Volume2 className="w-5 h-5" />
            <span>{isPlaying ? 'Pausar' : 'Reproduzir'} Pergunta</span>
          </Button>
        </div>
        
        {!audioEnded && !showInput && (
          <p className="text-center mt-4 text-sm text-muted-foreground">
            Reproduza o áudio para continuar
          </p>
        )}
      </div>

      {/* Campo de resposta */}
      {showInput && (
        <div className="w-full max-w-md space-y-6">
          {renderInput()}
          
          <Button
            onClick={onNext}
            disabled={!canProceed()}
            className="next-button w-full"
          >
            {isLastQuestion ? 'Finalizar' : 'Próxima Pergunta'}
          </Button>
        </div>
      )}

      {/* Botão para pular áudio (desenvolvimento) */}
      {!showInput && (
        <Button
          onClick={() => setShowInput(true)}
          variant="ghost"
          className="mt-4 text-sm opacity-50 hover:opacity-100"
        >
          Pular áudio (desenvolvimento)
        </Button>
      )}
      </div>
    </div>
  );
};

export default QuestionCard;

