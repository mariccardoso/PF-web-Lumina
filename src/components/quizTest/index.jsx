'use client';
import { useState } from 'react';
import styles from './quizTest.module.css';

const defaultQuiz = [
  {
    question: "Qual tipo de maquiagem você prefere para o dia a dia?",
    options: [
      { label: "Leve e natural", tag: "natural" },
      { label: "Marcante e ousada", tag: "glam" },
    ],
  },
  {
    question: "O que não pode faltar na sua make?",
    options: [
      { label: "BB Cream e lip balm", tag: "natural" },
      { label: "Base e contorno", tag: "glam" },
    ],
  },
  {
    question: "Qual look você usaria numa festa?",
    options: [
      { label: "Sombra nude e gloss", tag: "natural" },
      { label: "Olho preto e batom vermelho", tag: "glam" },
    ],
  },
];

const defaultResults = {
  natural: {
    title: "Seu estilo é Natural!",
    description: "Você gosta de realçar sua beleza de forma leve e suave.",
  },
  glam: {
    title: "Seu estilo é Glam!",
    description: "Você ama uma make poderosa que chama atenção!",
  },
};

const QuizTest = ({ quiz = defaultQuiz, results = defaultResults, buttonText = "Próxima", restartText = "Refazer" }) => {
  const [answers, setAnswers] = useState([]);
  const [current, setCurrent] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNext = () => {
    if (selectedOption !== null) {
      setAnswers([...answers, selectedOption]);
      setSelectedOption(null);
      if (current + 1 < quiz.length) {
        setCurrent(current + 1);
      } else {
        setShowResult(true);
      }
    }
  };

  const getResult = () => {
    const count = {};
    answers.forEach(tag => {
      count[tag] = (count[tag] || 0) + 1;
    });
    const resultTag = Object.entries(count).sort((a, b) => b[1] - a[1])[0][0];
    return results[resultTag];
  };

  const restartQuiz = () => {
    setAnswers([]);
    setCurrent(0);
    setShowResult(false);
    setSelectedOption(null);
  };

 return (
  <>
    <span style={{ color: "#3574bb", fontWeight: "bold", fontSize: "2rem", display: "block", textAlign: "center", marginBottom: "0.7rem" }}>
      #QuizNoLumina
    </span>
    <div className={styles.quizContainer}>
      {showResult ? (
        <div className={styles.result}>
          <h2>{getResult().title}</h2>
          <p>{getResult().description}</p>
          <button onClick={restartQuiz}>{restartText}</button>
        </div>
      ) : (
        <div className={styles.questionBox}>
          <h2>{quiz[current].question}</h2>
          <div className={styles.options}>
            {quiz[current].options.map((opt, idx) => (
              <label key={idx} className={styles.option}>
                <input
                  type="radio"
                  name={`question-${current}`}
                  value={opt.tag}
                  checked={selectedOption === opt.tag}
                  onChange={() => setSelectedOption(opt.tag)}
                />
                <span className={styles.customRadio} />
                {opt.label}
              </label>
            ))}
          </div>
          <button
            className={styles.nextButton}
            onClick={handleNext}
            disabled={selectedOption === null}
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  </>
);
};

export default QuizTest;