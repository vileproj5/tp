export const questions = [
  {
    id: 1,
    text: "Qual é o nome da criança?",
    type: "text",
    audioFile: "01.mp3",
    required: true
  },
  {
    id: 2,
    text: "Qual é a data de nascimento da criança?",
    type: "date",
    audioFile: "02.mp3",
    required: true
  },
  {
    id: 3,
    text: "Qual é a idade da criança?",
    type: "number",
    audioFile: "03.mp3",
    required: true
  },
  {
    id: 4,
    text: "Qual é o endereço completo?",
    type: "text",
    audioFile: "04.mp3",
    required: true
  },
  {
    id: 5,
    text: "Qual é o bairro?",
    type: "text",
    audioFile: "05.mp3",
    required: true
  },
  {
    id: 6,
    text: "Qual é o CEP?",
    type: "text",
    audioFile: "06.mp3",
    required: true
  },
  {
    id: 7,
    text: "Qual é a cidade?",
    type: "text",
    audioFile: "07.mp3",
    required: true
  },
  {
    id: 8,
    text: "Qual é o número do celular?",
    type: "tel",
    audioFile: "08.mp3",
    required: true
  },
  {
    id: 9,
    text: "Qual é o nome da mãe?",
    type: "text",
    audioFile: "09.mp3",
    required: true
  },
  {
    id: 10,
    text: "Qual é a idade da mãe?",
    type: "number",
    audioFile: "10.mp3",
    required: true
  },
  {
    id: 11,
    text: "Qual é a profissão da mãe?",
    type: "text",
    audioFile: "11.mp3",
    required: true
  },
  {
    id: 12,
    text: "Qual é o nome do pai?",
    type: "text",
    audioFile: "12.mp3",
    required: true
  },
  {
    id: 13,
    text: "Qual é a idade do pai?",
    type: "number",
    audioFile: "13.mp3",
    required: true
  },
  {
    id: 14,
    text: "Qual é a profissão do pai?",
    type: "text",
    audioFile: "14.mp3",
    required: true
  },
  {
    id: 15,
    text: "Qual o motivo da consulta?",
    type: "textarea",
    audioFile: "15.mp3",
    required: true
  },
  {
    id: 16,
    text: "A mãe teve alguma alteração durante a gestação?",
    type: "textarea",
    audioFile: "16.mp3",
    required: false
  },
  {
    id: 17,
    text: "A criança possui necessidade especial?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "17.mp3",
    required: true
  },
  {
    id: 18,
    text: "Se sim, qual necessidade especial?",
    type: "text",
    audioFile: "18.mp3",
    required: false,
    dependsOn: { questionId: 17, value: "Sim" }
  },
  {
    id: 19,
    text: "Possui comprometimento de coordenação?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "19.mp3",
    required: true
  },
  {
    id: 20,
    text: "Se sim, qual comprometimento de coordenação?",
    type: "text",
    audioFile: "20.mp3",
    required: false,
    dependsOn: { questionId: 19, value: "Sim" }
  },
  {
    id: 21,
    text: "Possui comprometimento visual?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "21.mp3",
    required: true
  },
  {
    id: 22,
    text: "Se sim, qual comprometimento visual?",
    type: "text",
    audioFile: "22.mp3",
    required: false,
    dependsOn: { questionId: 21, value: "Sim" }
  },
  {
    id: 23,
    text: "Possui comprometimento de comunicação?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "23.mp3",
    required: true
  },
  {
    id: 24,
    text: "Se sim, qual comprometimento de comunicação?",
    type: "text",
    audioFile: "24.mp3",
    required: false,
    dependsOn: { questionId: 23, value: "Sim" }
  },
  {
    id: 25,
    text: "Como o paciente reage quando é contrariado?",
    type: "textarea",
    audioFile: "25.mp3",
    required: true
  },
  {
    id: 26,
    text: "Como o paciente reage diante de profissionais da saúde?",
    type: "textarea",
    audioFile: "26.mp3",
    required: true
  },
  {
    id: 27,
    text: "A criança sofreu alguma cirurgia?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "27.mp3",
    required: true
  },
  {
    id: 28,
    text: "Se sim, qual cirurgia?",
    type: "text",
    audioFile: "28.mp3",
    required: false,
    dependsOn: { questionId: 27, value: "Sim" }
  },
  {
    id: 29,
    text: "Possui alterações sanguíneas?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "29.mp3",
    required: true
  },
  {
    id: 30,
    text: "Possui problemas respiratórios?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "30.mp3",
    required: true
  },
  {
    id: 31,
    text: "Possui problemas hepáticos?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "31.mp3",
    required: true
  },
  {
    id: 32,
    text: "Possui cardiopatias?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "32.mp3",
    required: true
  },
  {
    id: 33,
    text: "Possui problemas gástricos?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "33.mp3",
    required: true
  },
  {
    id: 34,
    text: "Possui alergias a medicamentos?",
    type: "text",
    audioFile: "34.mp3",
    required: false
  },
  {
    id: 35,
    text: "Possui alergias alimentares?",
    type: "text",
    audioFile: "35.mp3",
    required: false
  },
  {
    id: 36,
    text: "Possui alergias respiratórias?",
    type: "text",
    audioFile: "36.mp3",
    required: false
  },
  {
    id: 37,
    text: "Quais tratamentos atuais a criança faz?",
    type: "textarea",
    audioFile: "37.mp3",
    required: false
  },
  {
    id: 38,
    text: "Qual escova de dente usa?",
    type: "text",
    audioFile: "38.mp3",
    required: true
  },
  {
    id: 39,
    text: "Qual creme dental usa?",
    type: "text",
    audioFile: "39.mp3",
    required: true
  },
  {
    id: 40,
    text: "Quem faz a higiene bucal da criança?",
    type: "text",
    audioFile: "40.mp3",
    required: true
  },
  {
    id: 41,
    text: "Quantas vezes ao dia é feita a higiene bucal?",
    type: "number",
    audioFile: "41.mp3",
    required: true
  },
  {
    id: 42,
    text: "A gengiva sangra com facilidade?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "42.mp3",
    required: true
  },
  {
    id: 43,
    text: "Já realizou extrações dentárias?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "43.mp3",
    required: true
  },
  {
    id: 44,
    text: "Escova a língua?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "44.mp3",
    required: true
  },
  {
    id: 45,
    text: "Usa fio dental?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "45.mp3",
    required: true
  },
  {
    id: 46,
    text: "É portador de alguma IST (Infecção Sexualmente Transmissível)?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "46.mp3",
    required: true
  },
  {
    id: 47,
    text: "O paciente mama no peito?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "47.mp3",
    required: true
  },
  {
    id: 48,
    text: "Já mamou no peito?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "48.mp3",
    required: true
  },
  {
    id: 49,
    text: "Se já mamou, até quando?",
    type: "text",
    audioFile: "49.mp3",
    required: false,
    dependsOn: { questionId: 48, value: "Sim" }
  },
  {
    id: 50,
    text: "O paciente toma mamadeira?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "50.mp3",
    required: true
  },
  {
    id: 51,
    text: "Já tomou mamadeira?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "51.mp3",
    required: true
  },
  {
    id: 52,
    text: "Se já tomou, até quando?",
    type: "text",
    audioFile: "52.mp3",
    required: false,
    dependsOn: { questionId: 51, value: "Sim" }
  },
  {
    id: 53,
    text: "Engasga ou vomita com facilidade?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "53.mp3",
    required: true
  },
  {
    id: 54,
    text: "Chupa o dedo?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "54.mp3",
    required: true
  },
  {
    id: 55,
    text: "Chupa chupeta?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "55.mp3",
    required: true
  },
  {
    id: 56,
    text: "Possui outros hábitos?",
    type: "text",
    audioFile: "56.mp3",
    required: false
  },
  {
    id: 57,
    text: "Range os dentes?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "57.mp3",
    required: true
  },
  {
    id: 58,
    text: "Já foi ao dentista?",
    type: "radio",
    options: ["Sim", "Não"],
    audioFile: "58.mp3",
    required: true
  },
  {
    id: 59,
    text: "Se sim, qual dentista?",
    type: "text",
    audioFile: "59.mp3",
    required: false,
    dependsOn: { questionId: 58, value: "Sim" }
  },
  {
    id: 60,
    text: "Alguma informação adicional não relatada?",
    type: "textarea",
    audioFile: "60.mp3",
    required: false
  }
];

