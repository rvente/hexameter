import React, {useState} from 'react'; 

import 'katex/dist/katex.min.css';
import katex from 'katex';
import { BlockMath } from 'react-katex';
import HumanFormulas from './Fixtures/human_out.json';
import AIFormulas from './Fixtures/ai_out.json';

// regard these colors as enum types for component state
// a useful shortcut -- maintaining one state var instead
// of many
const correct = 'rgba(151, 226, 153, .7)';
const unselected = 'rgba(255, 255, 255, .1)';
const fullWhite = 'white'

// why is this global? good question: I wanted to keep things concise, so
// I drew out a fragile state machine and thus minimized code lines, sacrificing
// good style along the way
let human;
let ai;
let duo;

// hack: prevent double clicks from shifting state
// color is reset upon press, so double press will fail
function populateGlobals(selection) {
  if (selection === correct) {
    human = {creator: 'Human', expression: getRandomElem(HumanFormulas)};
    ai = {creator: 'AI', expression: getRandomElem(AIFormulas)};
    duo = shuffle([human,ai]);
    return unselected
  }
 }
 populateGlobals(correct);

export const GuessWho = () => { 
  const [selection, setColor] = useState(unselected);

  const answerChoice = (creator, selection) => { 
    const correctAnswer = creator === 'Human';
    const correctAnswerSelected = selection === correct  && correctAnswer;
    const lightShadow = 'rgba(0,0,0,.1)';
    const darkShadow = 'rgba(0,0,0,.2)';
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10px',
      padding: '20px',
      height: '75px',
      border: 'rgba(0,0,0,.1) thin solid',
      width: 'min(90vw, 600px)',
      margin: 'auto',
      marginTop: '10px',
      marginBottom: '10px',
      transition: 'all .25s ease-out',
      boxShadow: `1px 1px 10px ${correctAnswerSelected ? darkShadow : lightShadow}`,
      textShadow: correctAnswerSelected ? `1px 1px 2px ${darkShadow}` : '',
      backgroundColor:  correctAnswerSelected ? selection : unselected ,
      color: correctAnswerSelected ? fullWhite : ''
    }
  };

  return (
    <>
      { duo.map( (exp) => (
        <div
          style={ answerChoice(exp.creator, selection) }
          onClick={() => setColor(revealTrue(exp.creator))}
        >
        <BlockMath >
          {exp.expression}
        </BlockMath>
        </div>
        ) ) }
      <div
        style={{
          visibility: selection === correct ? 'visible' : 'hidden', 
          opacity: selection === correct ? '1' : '0',
          ...answerChoice('none', selection)}}
        onClick={() => setColor(populateGlobals(selection))}
      >
        {setWinMsg(selection)}
      </div>
    </>
  )
 }
 function setWinMsg(selection) {
   if (selection === correct) {
  return getRandomElem(['Good job! Another?', 'Nice work! Have another go?', 'Remarkable detective work. Go again?', "Winner, winner! One more time?"])
   }
 }

function revealTrue(creator) {
  const newColor = creator !== "Human" ? unselected : correct;
  return newColor;
  
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function rendering(el) {
  try {
    katex.renderToString(el, {
      displayMode: false,
      macros: {
        "\\RR": "\\mathbb{R}",
        "\\textup": "\\text",
      },
    });
    return true;
  } catch {
    return false;
  }
}

function getRandomElem(indexable) {
  const expression = indexable[getRandomInt(indexable.length)];
  return rendering(expression) ? expression :  getRandomElem(indexable);
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array
}

