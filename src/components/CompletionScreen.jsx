import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { CheckCircle, Download, Loader2 } from 'lucide-react';

const CompletionScreen = ({ answers, onGeneratePDF, onRestart }) => {
  const [responsibleName, setResponsibleName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePDF = async () => {
    if (!responsibleName.trim()) {
      alert('Por favor, digite o nome do responsável.');
      return;
    }

    setIsGenerating(true);
    try {
      await onGeneratePDF(responsibleName);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-background to-secondary">
      <div className="text-center max-w-2xl">
        <div className="logo-container mb-8">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
        </div>
        
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
            Questionário Concluído!
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
          Obrigado pelas informações fornecidas.
        </p>
        
        <div className="bg-card p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            A partir daqui, o documento será preenchido pelo profissional
          </h2>
          
          <div className="space-y-4 mb-6">
            <Label htmlFor="responsible-name" className="text-lg">
              Nome do responsável pelo menor:
            </Label>
            <Input
              id="responsible-name"
              type="text"
              value={responsibleName}
              onChange={(e) => setResponsibleName(e.target.value)}
              placeholder="Digite o nome completo do responsável"
              className="text-lg p-4"
            />
          </div>
          
          <div className="space-y-4">
            <Button 
              onClick={handleGeneratePDF}
              disabled={isGenerating || !responsibleName.trim()}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg w-full transform hover:scale-105 transition-all duration-200"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Gerando PDF...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5 mr-2" />
                  Gerar e Baixar PDF
                </>
              )}
            </Button>
            
            <Button 
              onClick={onRestart}
              variant="outline"
              size="lg"
              className="w-full hover:bg-gray-50"
            >
              Novo Questionário
            </Button>
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Todas as informações prestadas são verdadeiras e serão utilizadas apenas para fins odontológicos.
        </p>
      </div>
    </div>
  );
};

export default CompletionScreen;

