const quizData = [
  {
    question: 'What is the capital of Germany?',
    options: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt'],
    answer: 'Berlin',
  },
  {
    question: 'Which planet is the closest to the sun?',
    options: ['Mercury', 'Venus', 'Earth', 'Mars'],
    answer: 'Mercury',
  },
  {
    question: 'Who was the first president of the United States?',
    options: ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson', 'John Adams'],
    answer: 'George Washington',
  },
  {
    question: 'What is the largest mammal in the world?',
    options: ['Blue Whale', 'African Elephant', 'Giraffe', 'Orca'],
    answer: 'Blue Whale',
  },
  {
    question: 'In what year did World War II end?',
    options: ['1945', '1940', '1939', '1950'],
    answer: '1945',
  },
  {
    question: 'Which element has the atomic number 1?',
    options: ['Hydrogen', 'Helium', 'Oxygen', 'Carbon'],
    answer: 'Hydrogen',
  },
  {
    question: 'What is the capital of Italy?',
    options: ['Rome', 'Venice', 'Milan', 'Florence'],
    answer: 'Rome',
  },
  {
    question: 'What is the largest desert in the world?',
    options: ['Sahara Desert', 'Gobi Desert', 'Kalahari Desert', 'Atacama Desert'],
    answer: 'Sahara Desert',
  },
  {
    question: 'Who developed the theory of relativity?',
    options: ['Albert Einstein', 'Isaac Newton', 'Niels Bohr', 'Galileo Galilei'],
    answer: 'Albert Einstein',
  },
  {
    question: 'Which animal is known as the fastest land animal?',
    options: ['Cheetah', 'Lion', 'Elephant', 'Horse'],
    answer: 'Cheetah',
  },
  {
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'CO2', 'O2', 'H2O2'],
    answer: 'H2O',
  },
  {
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['Japan', 'China', 'South Korea', 'Thailand'],
    answer: 'Japan',
  },
  {
    question: 'Which ocean is the largest?',
    options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
    answer: 'Pacific Ocean',
  },
  {
    question: 'Who invented the telephone?',
    options: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Guglielmo Marconi'],
    answer: 'Alexander Graham Bell',
  },
  {
    question: 'What is the largest continent by area?',
    options: ['Asia', 'Africa', 'North America', 'Europe'],
    answer: 'Asia',
  },
  {
    question: 'What is the tallest building in the world?',
    options: ['Burj Khalifa', 'Eiffel Tower', 'Empire State Building', 'Tokyo Tower'],
    answer: 'Burj Khalifa',
  },
  {
    question: 'What is the capital of Australia?',
    options: ['Canberra', 'Sydney', 'Melbourne', 'Brisbane'],
    answer: 'Canberra',
  },
  {
    question: 'Which planet is known as the "Morning Star"?',
    options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
    answer: 'Venus',
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
    answer: 'William Shakespeare',
  },
  {
    question: 'Which country has the most pyramids?',
    options: ['Sudan', 'Egypt', 'Mexico', 'Peru'],
    answer: 'Sudan',
  },
  {
    question: 'What is the largest species of penguin?',
    options: ['Emperor Penguin', 'King Penguin', 'Adelie Penguin', 'Gentoo Penguin'],
    answer: 'Emperor Penguin',
  },
  {
    question: 'What is the capital of Canada?',
    options: ['Ottawa', 'Toronto', 'Vancouver', 'Montreal'],
    answer: 'Ottawa',
  },
  {
    question: 'What is the longest river in the world?',
    options: ['Nile River', 'Amazon River', 'Yangtze River', 'Mississippi River'],
    answer: 'Nile River',
  },
  {
    question: 'What is the hardest natural substance on Earth?',
    options: ['Diamond', 'Gold', 'Iron', 'Titanium'],
    answer: 'Diamond',
  },
  {
    question: 'What is the primary ingredient in guacamole?',
    options: ['Avocado', 'Tomato', 'Onion', 'Pepper'],
    answer: 'Avocado',
  },
  {
    question: 'What is the currency of Japan?',
    options: ['Yen', 'Won', 'Yuan', 'Ringgit'],
    answer: 'Yen',
  },
  {
    question: 'Which animal is known for its black and white stripes?',
    options: ['Zebra', 'Tiger', 'Panda', 'Giraffe'],
    answer: 'Zebra',
  },
  {
    question: 'Which ocean is the smallest?',
    options: ['Arctic Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean'],
    answer: 'Arctic Ocean',
  },
  {
    question: 'Who painted the Sistine Chapel ceiling?',
    options: ['Michelangelo', 'Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso'],
    answer: 'Michelangelo',
  },
  {
    question: 'What is the capital of Spain?',
    options: ['Madrid', 'Barcelona', 'Seville', 'Valencia'],
    answer: 'Madrid',
  },
  {
    question: 'Which country is the largest by land area?',
    options: ['Russia', 'Canada', 'United States', 'China'],
    answer: 'Russia',
  },
  {
    question: 'Which fruit is known as the "king of fruits"?',
    options: ['Durian', 'Mango', 'Pineapple', 'Banana'],
    answer: 'Durian',
  },
  {
    question: 'What is the most spoken language in the world?',
    options: ['Mandarin Chinese', 'English', 'Spanish', 'Hindi'],
    answer: 'Mandarin Chinese',
  },
  {
    question: 'What is the smallest planet in our solar system?',
    options: ['Mercury', 'Mars', 'Venus', 'Earth'],
    answer: 'Mercury',
  },
  {
    question: 'Which famous scientist developed the laws of motion?',
    options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
    answer: 'Isaac Newton',
  },
  {
    question: 'What is the largest island in the world?',
    options: ['Greenland', 'Australia', 'New Guinea', 'Borneo'],
    answer: 'Greenland',
  },
  {
    question: 'largest countries in the world?',
    options: ['America', 'Australia', 'China', 'Russia'],
    answer: 'Russia',
  },
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');
const questionCounter = document.getElementById('questionCounter'); // Added to show the question number
// const ttl = document.body.


let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

// Shuffle the array to randomize the order of questions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Select 6 random questions from the full quiz data
function getRandomQuestions() {
  shuffleArray(quizData);
  return quizData.slice(0, 6);
}

const selectedQuestions = getRandomQuestions();

// Display the current question number out of 6
function updateQuestionCounter() {
  questionCounter.innerHTML = `Question ${currentQuestion + 1} of 6`;
}

function displayQuestion() {
  const questionData = selectedQuestions[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions); // Shuffle the options to display them in random order

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
  updateQuestionCounter(); // Update the question number display
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === selectedQuestions[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: selectedQuestions[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: selectedQuestions[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < selectedQuestions.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  // ttl.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${selectedQuestions.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  shuffleArray(quizData); // Shuffle questions again for the retry
  selectedQuestions.length = 0; // Reset the selected questions array
  selectedQuestions.push(...getRandomQuestions()); // Select new random questions
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  questionCounter.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>You scored ${score} out of ${selectedQuestions.length}!</p>
    <p>Incorrect Answers:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();
