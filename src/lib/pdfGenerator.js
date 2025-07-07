import jsPDF from 'jspdf';
import { questions } from '../data/questions';

// Função para gerar o PDF da anamnese
export const generateAnamnese = async (answers, responsibleName) => {
  const pdf = new jsPDF('p', 'mm', 'a4');
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  const lineHeight = 6;
  let currentY = margin;

  // Função para adicionar nova página se necessário
  const checkPageBreak = (neededHeight = lineHeight) => {
    if (currentY + neededHeight > pageHeight - margin) {
      pdf.addPage();
      currentY = margin;
      return true;
    }
    return false;
  };

  // Função para adicionar texto com quebra de linha
  const addText = (text, x, y, options = {}) => {
    const fontSize = options.fontSize || 10;
    const fontStyle = options.fontStyle || 'normal';
    const maxWidth = options.maxWidth || pageWidth - 2 * margin;
    
    pdf.setFontSize(fontSize);
    pdf.setFont('helvetica', fontStyle);
    
    const lines = pdf.splitTextToSize(text, maxWidth);
    
    for (let i = 0; i < lines.length; i++) {
      checkPageBreak();
      pdf.text(lines[i], x, y + (i * lineHeight));
      currentY = y + (i * lineHeight) + lineHeight;
    }
    
    return currentY;
  };

  // Cabeçalho
  pdf.setFillColor(184, 134, 11); // Cor dourada do logo
  pdf.rect(0, 0, pageWidth, 30, 'F');
  
  pdf.setTextColor(255, 255, 255);
  addText('TIO PAULO', margin, 15, { fontSize: 20, fontStyle: 'bold' });
  addText('ANAMNESE', margin, 25, { fontSize: 14 });
  
  pdf.setTextColor(0, 0, 0);
  currentY = 40;

  // Dados do paciente
  const patientData = [
    { label: 'NOME DA CRIANÇA:', value: answers[1] || '' },
    { label: 'DATA DE NASCIMENTO:', value: answers[2] || '', extra: `IDADE: ${answers[3] || ''}` },
    { label: 'ENDEREÇO:', value: answers[4] || '' },
    { label: 'BAIRRO:', value: answers[5] || '', extra: `CEP: ${answers[6] || ''}` },
    { label: 'CIDADE:', value: answers[7] || '', extra: `CEL: ${answers[8] || ''}` },
    { label: 'NOME DA MÃE:', value: answers[9] || '' },
    { label: 'IDADE:', value: answers[10] || '', extra: `PROFISSÃO: ${answers[11] || ''}` },
    { label: 'NOME DO PAI:', value: answers[12] || '' },
    { label: 'IDADE:', value: answers[13] || '', extra: `PROFISSÃO: ${answers[14] || ''}` }
  ];

  patientData.forEach(item => {
    checkPageBreak(lineHeight * 2);
    
    // Label em negrito
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(9);
    pdf.text(item.label, margin, currentY);
    
    // Valor
    pdf.setFont('helvetica', 'normal');
    const labelWidth = pdf.getTextWidth(item.label) + 5;
    pdf.text(item.value, margin + labelWidth, currentY);
    
    // Campo extra na mesma linha (se houver)
    if (item.extra) {
      const valueWidth = pdf.getTextWidth(item.value) + 10;
      pdf.text(item.extra, margin + labelWidth + valueWidth, currentY);
    }
    
    currentY += lineHeight + 2;
  });

  // Perguntas da anamnese
  currentY += 10;
  
  const questionsToShow = [
    { id: 15, label: 'QUAL O MOTIVO DA CONSULTA:' },
    { id: 16, label: 'MÃE TEVE ALGUMA ALTERAÇÃO DURANTE A GESTAÇÃO:' },
    { id: 17, label: 'POSSUI NECESSIDADE ESPECIAL?', showDetails: true, detailsId: 18 },
    { id: 19, label: 'POSSUI COMPROMETIMENTO DE COORDENAÇÃO?', showDetails: true, detailsId: 20 },
    { id: 21, label: 'POSSUI COMPROMETIMENTO VISUAL?', showDetails: true, detailsId: 22 },
    { id: 23, label: 'POSSUI COMPROMETIMENTO DE COMUNICAÇÃO?', showDetails: true, detailsId: 24 },
    { id: 25, label: 'COMO O PACIENTE REAGE QUANDO É CONTRARIADO?' },
    { id: 26, label: 'COMO O PACIENTE REAGE DIANTE DE PROFISSIONAIS DA SAÚDE?' },
    { id: 27, label: 'SOFREU ALGUMA CIRURGIA?', showDetails: true, detailsId: 28 },
    { id: 29, label: 'ALTERAÇÕES SANGUÍNEAS?' },
    { id: 30, label: 'PROBLEMAS RESPIRATÓRIOS?' },
    { id: 31, label: 'PROBLEMAS HEPÁTICOS?' },
    { id: 32, label: 'CARDIOPATIAS?' },
    { id: 33, label: 'PROBLEMAS GÁSTRICOS?' },
    { id: 34, label: 'ALERGIAS MEDICAMENTO:' },
    { id: 35, label: 'ALERGIAS ALIMENTAR:' },
    { id: 36, label: 'ALERGIAS RESPIRATÓRIA:' },
    { id: 37, label: 'TRATAMENTOS ATUAIS:' },
    { id: 38, label: 'QUAL ESCOVA USA:' },
    { id: 39, label: 'QUAL CREME DENTAL USA:' }
  ];

  questionsToShow.forEach(item => {
    checkPageBreak(lineHeight * 3);
    
    // Label da pergunta
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(9);
    currentY = addText(item.label, margin, currentY);
    
    // Resposta
    pdf.setFont('helvetica', 'normal');
    const answer = answers[item.id] || '';
    
    if (item.showDetails && answer === 'Sim' && answers[item.detailsId]) {
      currentY = addText(`${answer} - ${answers[item.detailsId]}`, margin + 5, currentY);
    } else {
      currentY = addText(answer, margin + 5, currentY);
    }
    
    currentY += 3;
  });

  // Segunda página - continuação das perguntas
  pdf.addPage();
  currentY = margin;

  const moreQuestions = [
    { id: 40, label: 'QUEM FAZ HIGIENE BUCAL?' },
    { id: 41, label: 'QUANTAS VEZES AO DIA?' },
    { id: 42, label: 'SUA GENGIVA SANGRA COM FACILIDADE?' },
    { id: 43, label: 'JÁ REALIZOU EXTRAÇÕES DENTÁRIAS?' },
    { id: 44, label: 'ESCOVA A LÍNGUA?' },
    { id: 45, label: 'USA FIO DENTAL?' },
    { id: 46, label: 'É PORTADOR DE ALGUMA IST?' },
    { id: 47, label: 'PACIENTE MAMA NO PEITO:' },
    { id: 48, label: 'JÁ MAMOU NO PEITO:', showDetails: true, detailsId: 49, detailsLabel: 'ATÉ QUANDO:' },
    { id: 50, label: 'PACIENTE TOMA MAMADEIRA:' },
    { id: 51, label: 'JÁ TOMOU MAMADEIRA:', showDetails: true, detailsId: 52, detailsLabel: 'ATÉ QUANDO:' },
    { id: 53, label: 'ENGASGA OU VOMITA COM FACILIDADE?' },
    { id: 54, label: 'CHUPA O DEDO?' },
    { id: 55, label: 'CHUPA CHUPETA?' },
    { id: 56, label: 'POSSUI OUTROS HÁBITOS?' },
    { id: 57, label: 'RANGE OS DENTES?' },
    { id: 58, label: 'JÁ FOI AO DENTISTA?', showDetails: true, detailsId: 59, detailsLabel: 'QUAL:' },
    { id: 60, label: 'ALGUMA INFORMAÇÃO ADICIONAL NÃO RELATADA:' }
  ];

  moreQuestions.forEach(item => {
    checkPageBreak(lineHeight * 3);
    
    // Label da pergunta
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(9);
    currentY = addText(item.label, margin, currentY);
    
    // Resposta
    pdf.setFont('helvetica', 'normal');
    const answer = answers[item.id] || '';
    currentY = addText(answer, margin + 5, currentY);
    
    // Detalhes se necessário
    if (item.showDetails && answers[item.detailsId]) {
      pdf.setFont('helvetica', 'bold');
      currentY = addText(item.detailsLabel || 'DETALHES:', margin + 5, currentY);
      pdf.setFont('helvetica', 'normal');
      currentY = addText(answers[item.detailsId], margin + 10, currentY);
    }
    
    currentY += 3;
  });

  // Declaração e assinatura
  currentY += 10;
  checkPageBreak(lineHeight * 8);
  
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(10);
  currentY = addText('DECLARO COMO RESPONSÁVEL DO MENOR:', margin, currentY);
  currentY = addText('QUE TODAS AS INFORMAÇÕES PRESTADAS ATÉ AQUI SÃO VERDADEIRAS', margin, currentY);
  
  currentY += 10;
  currentY = addText('ASSINE AQUI', margin, currentY);
  
  // Linha para assinatura
  pdf.line(margin, currentY + 5, pageWidth - margin, currentY + 5);
  currentY += 15;
  
  pdf.setFont('helvetica', 'normal');
  currentY = addText(`RESPONSÁVEL DO MENOR: ${responsibleName}`, margin, currentY);
  
  currentY += 10;
  pdf.setFont('helvetica', 'bold');
  currentY = addText('OBRIGADO PELAS INFORMAÇÕES,', margin, currentY);
  currentY = addText('A PARTIR DAQUI, O DOCUMENTO SERÁ PREENCHIDO PELO PROFISSIONAL', margin, currentY);

  // Odontograma (representação simplificada)
  currentY += 20;
  checkPageBreak(60);
  
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(12);
  currentY = addText('ODONTOGRAMA', margin, currentY);
  
  // Desenhar grade do odontograma
  const toothSize = 8;
  const startX = margin + 20;
  let startY = currentY + 10;
  
  // Dentes superiores
  const upperTeeth = ['55', '54', '53', '52', '51', '61', '62', '63', '64', '65'];
  const upperPermanent = ['18', '17', '16', '15', '14', '13', '12', '11', '21', '22', '23', '24', '25', '26', '27', '28'];
  
  // Desenhar dentes superiores decíduos
  upperTeeth.forEach((tooth, index) => {
    const x = startX + (index * toothSize * 1.2);
    pdf.rect(x, startY, toothSize, toothSize);
    pdf.setFontSize(6);
    pdf.text(tooth, x + 1, startY + 5);
  });
  
  startY += toothSize + 5;
  
  // Desenhar dentes superiores permanentes
  upperPermanent.forEach((tooth, index) => {
    const x = startX - 20 + (index * toothSize * 0.8);
    pdf.rect(x, startY, toothSize * 0.8, toothSize * 0.8);
    pdf.setFontSize(5);
    pdf.text(tooth, x + 1, startY + 4);
  });
  
  startY += toothSize + 10;
  
  // Dentes inferiores
  const lowerPermanent = ['48', '47', '46', '45', '44', '43', '42', '41', '31', '32', '33', '34', '35', '36', '37', '38'];
  const lowerTeeth = ['85', '84', '83', '82', '81', '71', '72', '73', '74', '75'];
  
  // Desenhar dentes inferiores permanentes
  lowerPermanent.forEach((tooth, index) => {
    const x = startX - 20 + (index * toothSize * 0.8);
    pdf.rect(x, startY, toothSize * 0.8, toothSize * 0.8);
    pdf.setFontSize(5);
    pdf.text(tooth, x + 1, startY + 4);
  });
  
  startY += toothSize + 5;
  
  // Desenhar dentes inferiores decíduos
  lowerTeeth.forEach((tooth, index) => {
    const x = startX + (index * toothSize * 1.2);
    pdf.rect(x, startY, toothSize, toothSize);
    pdf.setFontSize(6);
    pdf.text(tooth, x + 1, startY + 5);
  });

  // Campos de atendimento
  startY += toothSize + 20;
  
  for (let i = 0; i < 6; i++) {
    checkPageBreak(lineHeight * 2);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(9);
    pdf.text('DATA DO ATENDIMENTO:', margin, startY);
    pdf.text('PESO:', margin + 80, startY);
    
    // Linhas para preenchimento
    pdf.line(margin + 50, startY + 2, margin + 75, startY + 2);
    pdf.line(margin + 90, startY + 2, margin + 110, startY + 2);
    
    startY += lineHeight + 5;
  }

  // Rodapé com data de geração
  const now = new Date();
  const dateStr = now.toLocaleDateString('pt-BR');
  const timeStr = now.toLocaleTimeString('pt-BR');
  
  pdf.setFontSize(8);
  pdf.setFont('helvetica', 'normal');
  pdf.text(`Documento gerado em ${dateStr} às ${timeStr}`, margin, pageHeight - 10);

  return pdf;
};

