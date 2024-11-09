// script.js

const questionsPool = [
  { question: "What is 5 + 3?", options: ["6", "7", "8", "9"], answer: "8" },
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "Mark Twain",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
    ],
    answer: "Harper Lee",
  },
  {
    question: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    question: "What is the largest planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    question: "Which element has the symbol 'O'?",
    options: ["Gold", "Oxygen", "Silver", "Helium"],
    answer: "Oxygen",
  },
  {
    question: "What is 12 x 12?",
    options: ["120", "144", "132", "150"],
    answer: "144",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Picasso", "Da Vinci", "Van Gogh", "Monet"],
    answer: "Da Vinci",
  },
  {
    question: "Which continent is Egypt in?",
    options: ["Asia", "Europe", "Africa", "Australia"],
    answer: "Africa",
  },
  {
    question: "Who discovered penicillin?",
    options: ["Newton", "Edison", "Fleming", "Darwin"],
    answer: "Fleming",
  },
  {
    question: "What is 7 x 6?",
    options: ["40", "42", "48", "36"],
    answer: "42",
  },
  {
    question: "Which planet is closest to the sun?",
    options: ["Venus", "Earth", "Mercury", "Mars"],
    answer: "Mercury",
  },
  {
    question: "Who invented the telephone?",
    options: ["Einstein", "Bell", "Edison", "Tesla"],
    answer: "Bell",
  },
  {
    question: "What is the boiling point of water?",
    options: ["90°C", "80°C", "100°C", "70°C"],
    answer: "100°C",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Tokyo", "Osaka", "Nagoya", "Kyoto"],
    answer: "Tokyo",
  },
];

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function initializeQuiz() {
  selectedQuestions = questionsPool.sort(() => Math.random() - 0.5).slice(0, 5);
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("question-container").classList.remove("hidden");
  document.getElementById("result-container").classList.add("hidden");
  displayQuestion();
}

function displayQuestion() {
  const questionObj = selectedQuestions[currentQuestionIndex];
  document.getElementById("question-number").textContent = `${
    currentQuestionIndex + 1
  }. Question`;
  document.getElementById("question-text").textContent = questionObj.question;

  const answerOptions = document.getElementById("answer-options");
  answerOptions.innerHTML = "";
  questionObj.options.forEach((option) => {
    const label = document.createElement("label");
    label.classList.add("option-label");

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = option;

    label.appendChild(input);
    label.append(option);
    answerOptions.appendChild(label);
  });

  // Toggle buttons
  document.getElementById("back-btn").style.display =
    currentQuestionIndex > 0 ? "inline-block" : "none";
  document.getElementById("next-btn").style.display =
    currentQuestionIndex < selectedQuestions.length - 1
      ? "inline-block"
      : "none";
  document.getElementById("submit-btn").style.display =
    currentQuestionIndex === selectedQuestions.length - 1
      ? "inline-block"
      : "none";
}

function goNext() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (!selectedAnswer) return;

  if (selectedAnswer.value === selectedQuestions[currentQuestionIndex].answer) {
    score++;
  }
  currentQuestionIndex++;
  displayQuestion();
}

function goBack() {
  currentQuestionIndex--;
  displayQuestion();
}

function submitQuiz() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (
    selectedAnswer &&
    selectedAnswer.value === selectedQuestions[currentQuestionIndex].answer
  ) {
    score++;
  }
  document.getElementById("question-container").classList.add("hidden");
  document.getElementById("result-container").classList.remove("hidden");
  document.getElementById("score").textContent = score;
}

function startNewQuiz() {
  initializeQuiz();
}

initializeQuiz();
