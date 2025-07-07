# Tio Paulo - Anamnese Digital

Sistema web para coleta de informações de anamnese odontológica com reprodução de áudio e geração de PDF.

## 🚀 Funcionalidades

- **Interface Intuitiva**: Design moderno e responsivo
- **Áudio Guiado**: Cada pergunta é reproduzida em áudio
- **Questionário Dinâmico**: Perguntas condicionais baseadas nas respostas
- **Geração de PDF**: Documento formatado profissionalmente
- **Banco de Dados**: Armazenamento seguro no Supabase
- **Barra de Progresso**: Acompanhamento visual do progresso

## 🛠️ Tecnologias

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **PDF Generation**: jsPDF
- **Icons**: Lucide React

## 📋 Pré-requisitos

- Node.js 18+
- Conta no Supabase
- Arquivos de áudio das perguntas (01.mp3 a 60.mp3)

## 🔧 Instalação

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o Supabase:
   - Crie um projeto no [Supabase](https://supabase.com)
   - Execute o script SQL em `supabase/supabase-schema.sql`
   - Copie `.env.example` para `.env` e configure as variáveis

4. Adicione os arquivos de áudio:
   - Coloque os arquivos MP3 em `public/audio/`
   - Nomeie como: 01.mp3, 02.mp3, ..., 60.mp3

5. Execute o projeto:
   ```bash
   npm run dev
   ```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/              # Componentes base
│   ├── WelcomeScreen.jsx
│   ├── QuestionCard.jsx
│   └── CompletionScreen.jsx
├── data/
│   └── questions.js     # Definição das perguntas
├── lib/
│   ├── supabase.js      # Configuração do banco
│   └── pdfGenerator.js  # Geração de PDF
└── App.jsx
```

## 🎵 Arquivos de Áudio

Os arquivos de áudio devem estar em `public/audio/` seguindo o padrão:
- 01.mp3: "Qual é o nome da criança?"
- 02.mp3: "Qual é a data de nascimento da criança?"
- ...
- 60.mp3: "Alguma informação adicional não relatada?"

## 🗄️ Banco de Dados

O sistema utiliza uma tabela `anamnese_responses` no Supabase com:
- Campos específicos para cada resposta
- Campo JSON para backup completo
- Timestamps automáticos
- Políticas de segurança (RLS)

## 📄 Geração de PDF

O PDF gerado inclui:
- Cabeçalho com logo e identificação
- Dados pessoais do paciente
- Todas as respostas formatadas
- Odontograma básico
- Campos para preenchimento profissional
- Assinatura do responsável

## 🚀 Deploy

### Vercel
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Netlify
1. Build: `npm run build`
2. Publish directory: `dist`
3. Configure as variáveis de ambiente

## 🔒 Segurança

- Todas as informações são criptografadas em trânsito
- Políticas RLS no Supabase
- Validação de dados no frontend
- Sanitização de inputs

## 📱 Responsividade

O sistema é totalmente responsivo e funciona em:
- Desktop
- Tablets
- Smartphones

## 🎨 Personalização

Para personalizar o visual:
1. Edite as cores em `src/App.css`
2. Modifique os componentes em `src/components/`
3. Ajuste o tema no Tailwind CSS

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique os logs do console
2. Confirme a configuração do Supabase
3. Teste os arquivos de áudio
4. Valide as variáveis de ambiente

## 📝 Licença

Este projeto é proprietário e confidencial.