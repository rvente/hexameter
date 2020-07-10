/*
 *  Copyright Ralph "Blake" Vente, 2020

 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.

 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.

 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 *  Warning: HIC SVNT DRACONES. This code employs many questionable practices.
 * 
 */
import React, {useState} from 'react'; 

import 'katex/dist/katex.min.css';
import katex from 'katex';
import { BlockMath } from 'react-katex';
import HumanFormulas from './Fixtures/human_out.json';
import AIFormulas from './Fixtures/ai_out.json';

// regard these colors as enum types for component state
// a useful shortcut 

const correct = 'rgba(151, 226, 153, .9)';
const hint = 'rgba(151, 226, 153, .4)';
const unselected = 'rgba(255, 255, 255, .1)';
const fullWhite = 'white'

// why is this global? good question: I wanted to keep things concise, so
// I drew out a fragile state machine and thus minimized code lines, sacrificing
// good style along the way. As I added functionality, things got worse quick.
let human = {creator: "Human", expression: "\\text{A human wrote me. Pick me!}"};
let ai = {creator: "AI", expression: "\\text{An RNN wrote this. Can you beat me?}"};
let duo = [human, ai];
let h_label = "<Source Paper>";

// hack: prevent double clicks from shifting state
// color is reset upon press, so double press will fail
function populateGlobals(selection) {
  if (selection === correct) {
    const {label, real_exp} = getRandomCorrect(HumanFormulas);
    human = {creator: 'Human', expression: real_exp};
    ai = {creator: 'AI', expression: getRandomElem(AIFormulas)};
    duo = shuffle([human,ai]);
    h_label = label;
    return unselected;
  }
 }
//  populateGlobals(correct);

export const GuessWho = () => { 
  const [selection, setColor] = useState(unselected);

  const answerChoice = (creator, selection) => { 
    const correctAnswer = creator === 'Human';
    const correctAnswerSelected = selection !== unselected  && correctAnswer;
    const lightShadow = 'rgba(0,0,0,.1)';
    const darkShadow = 'rgba(0,0,0,.3)';
    if (selection === hint) {
      setTimeout( () => (setColor(unselected)), 500)
      // setInterval( () => (setColor(unselected)), 500)
    }
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10px',
      overflow: 'hidden',
      padding: '10px',
      height: 'auto',
      minHeight: '75px',
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
     const win_msg = ['Good job! Another?', 'Nice work! Have another go?', 'Remarkable detective work. Another mission?', "Winner, winner! One more time?"]
  return (
    <div>
      <a
      href={`https://arxiv.org/abs/${h_label}`}
      style={{color: ''}}
      >{ `From ${h_label}`}</a> &nbsp;
      {getRandomElem(win_msg)}
    </div>
    )
  }
 }

function revealTrue(creator) {
  return creator !== "Human" ? hint : correct;
  
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function rendering(el) {
  try {
    const exp = katex.renderToString(el, {
      displayMode: false,
      throwOnError:true,
      strict: "error",
      trust: false,
      macros: {
        "\\RR": "\\mathbb{R}",
        "\\textup": "\\text",
      },
    });
    return exp;
  } catch {
    return "";
  }
}

function getRandomElem(indexable) {
  let expression = indexable[getRandomInt(indexable.length)];
  while (! rendering(expression) ) {
    expression = indexable[getRandomInt(indexable.length)].substring(0,400);
  }
  return expression;
}

function getRandomCorrect(indexable) {
  const labelLen = "1801.00497".length;
  let line = indexable[getRandomInt(indexable.length)].replace(/%(.*?)/g, "").substring(0,200);
  let label = line.substring(0,labelLen);
  let exp = line.substring(labelLen);
  // keep trying until the string does not error or contain error messages
  while (! rendering(exp) || rendering(exp).includes("KaTeX") ) {
    line = indexable[getRandomInt(indexable.length)];
    label = line.substring(0,labelLen);
    exp = line.substring(labelLen);
  }
  console.log(exp)
  return {
    label: label,
    real_exp: exp
  }

}


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array
}

 