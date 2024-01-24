interface Preguntas {
    response_code: number;
    results: Result[];
    pregunta: string[];
  }

  interface Result {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    respuestasAleatorias: string[]
  }