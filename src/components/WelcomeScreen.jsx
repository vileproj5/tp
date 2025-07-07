import React from 'react';
import { Button } from './ui/button';
import { Stethoscope, FileText, Clock } from 'lucide-react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-background to-secondary">
      <div className="text-center max-w-4xl">
        {/* Logo */}
        <div className="logo-container">
          <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
            <Stethoscope className="w-16 h-16 text-white" />
          </div>
        </div>
        
        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
          TIO PAULO
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
          Anamnese Digital
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Bem-vindo ao sistema de anamnese digital. Responda às perguntas com calma e atenção. 
          Cada pergunta será reproduzida em áudio para sua comodidade.
        </p>
        
        {/* Cards informativos */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 rounded-xl shadow-lg border">
            <FileText className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Questionário Completo</h3>
            <p className="text-muted-foreground">60 perguntas sobre saúde e histórico médico</p>
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-lg border">
            <Clock className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Tempo Estimado</h3>
            <p className="text-muted-foreground">15-20 minutos para completar</p>
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-lg border">
            <Stethoscope className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Áudio Guiado</h3>
            <p className="text-muted-foreground">Cada pergunta é reproduzida em áudio</p>
          </div>
        </div>
        
        {/* Botão de início */}
        <Button 
          onClick={onStart}
          size="lg"
          className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          Iniciar Questionário
        </Button>
        
        <p className="text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          Todas as informações fornecidas são confidenciais e serão utilizadas exclusivamente 
          para fins odontológicos. Certifique-se de estar em um ambiente silencioso para 
          melhor experiência com os áudios.
        </p>
      </div>
    </div>
  );
};

export default WelcomeScreen;