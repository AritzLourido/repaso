export interface PreguntasTodas {
    response_code: number;
    results: Pregunta[];
    // pregunta: string[];
  }

  export interface Pregunta {
    type: string;
    difficulty: string;
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
    respuestasAleatorias: string[]
  }