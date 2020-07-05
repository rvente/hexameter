/* eslint-disable jsx-a11y/no-static-element-interactions */
import React  from 'react';

import QuizContainer from './Containers/Quiz.container';
import './App.css';
// import question from './Fixtures/Question';
// import ReactDOM from 'react-dom';

import HumanFormulas from './Fixtures/human_out.json';
import AIFormulas from './Fixtures/ai_out.json';
import katex from 'katex';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function rendering(el) {
  try {
    katex.renderToString(el, {
      displayMode: false,
      macros: {
        "\\RR": "\\mathbb{R}",
      },
    });
    return true;
  } catch {
    return false;
  }
}

function getRandomFormula(indexable) {
  const expression = indexable[getRandomInt(indexable.length)];
  return rendering(expression) ? expression :  getRandomFormula(indexable);
}
function surroundWithDollars(string) {
  return '$'+string.substring(1, 500)+'$';
}
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function makeQuestion() {
  const HMN = surroundWithDollars(getRandomFormula(HumanFormulas));
  const AI = surroundWithDollars(getRandomFormula(AIFormulas));
  // console.log('Human', HMN);
  // console.log('AI', AI);


  return {
    content: 'Select the formula created by a human',
    answers: [
      {
        content: HMN,
        option: ' ',
        tag: 'HUMAN',
      },
      {
        content: AI,
        option: ' ',
        tag: 'AI',
      }
    ]
  };
}

function App() {
  const a = makeQuestion(HumanFormulas, AIFormulas);
  shuffle(a.answers);
  const question = {
    question: a
  };

  return (
    <div className="App">
      <QuizContainer {...question} />
    </div>
  );
}

export default App;
