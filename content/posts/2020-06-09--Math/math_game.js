import React, {useState} from 'react'; 

import 'katex/dist/katex.min.css';
import katex from 'katex';
import { BlockMath } from 'react-katex';
import HumanFormulas from './Fixtures/human_out.json';
import AIFormulas from './Fixtures/ai_out.json';

const green = 'rgba(151, 226, 153, .7)';
const white = 'rgba(255, 255, 255, .1)';
const fullWhite = 'white'

// why is this global? good question: I wanted to keep things concise, so
// I drew out a fragile state machine and thus minimized code lines, sacrificing
// good style along the way
let human;
let ai;
let duo;
function mutateGlobalExpr() {
  human = {creator: 'Human', expression: getRandomFormula(HumanFormulas)};
  ai = {creator: 'AI', expression: getRandomFormula(AIFormulas)};
  duo = shuffle([human,ai]);
  return white
 }
 mutateGlobalExpr()

export const GuessWho = () => { 
  const [color, setColor] = useState(white);

  const answerChoice = (creator, color) => { 
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '10px',
      padding: '20px',
      height: '75px',
      border: 'black thin dashed',
      width: 'min(90vw, 600px)',
      margin: 'auto',
      marginTop: '5px',
      marginBottom: '5px',
      transition: 'all .25s ease-out',
      backgroundColor: creator === 'Human' ? color : white ,
      color: creator==='Human' && color === green ? fullWhite : ''
    }
  };

  return (
    <>
      { duo.map( (exp) => (
        <div
          style={ answerChoice(exp.creator, color) }
          onClick={() => setColor(revealTrue(exp.creator))}
        >
        <BlockMath >
          {exp.expression}
        </BlockMath>
        </div>
        ) ) }
      <div
        style={{
          visibility: color === green ? 'visible' : 'hidden', 
          opacity: color === green ? '1' : '0',
          ...answerChoice('none', color)}}
        onClick={() => setColor(mutateGlobalExpr())}
      >
        Good job! Another?
      </div>
    </>
  )
 }

function revealTrue(creator) {
  const newColor = creator !== "Human" ? white : green;
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

function getRandomFormula(indexable) {
  const expression = indexable[getRandomInt(indexable.length)];
  return rendering(expression) ? expression :  getRandomFormula(indexable);
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array
}


const ExamplePage = () => (
  <div
    style={{
      // width: '40%',
      margin: '0 auto'
    }}
  >
    <h1>
      <BlockMath>
        {'\\text{React-}\\KaTeX \\space \\text{usage examples}'}
      </BlockMath>
    </h1>
    <h2>
      <code>{'<InlineMath />'}</code>
    </h2>
    This is an in-line expression <BlockMath math={'\\int_0^\\infty x^2 dx'} />{' '}
    passed as <code>math prop</code>. This is an in-line{' '}
    <BlockMath math={'\\int_0^\\infty x^2 dx'} /> expression passed as{' '}
    <code>children prop</code>.
    <h2>
      <code>{'<BlockMath />'}</code>
    </h2>
    <BlockMath math={'\\int_0^\\infty x^2 dx'} />
    <BlockMath>{`A =
        \\begin{pmatrix}
        1 & 0 & 0 \\\\
        0 & 1 & 0 \\\\
        0 & 0 & 1 \\\\
        \\end{pmatrix}`}</BlockMath>
    <h2>Error handling</h2>
    <BlockMath math={'\\int_0^\\infty x^2 dx \\inta'} errorColor={'#cc0000'} />
    <BlockMath
      math="\\int_{"
      renderError={err => <b>Custom error message: {err.name}</b>}
    />
    <BlockMath math="\sum_{" />
    <BlockMath
      math={'\\sum_{'}
      renderError={err => <b>Custom error message: {err.name}</b>}
    />
    <BlockMath math={123} />
    <BlockMath
      math={123}
      renderError={err => <b>Custom error message: {err.name}</b>}
    />
  </div>
);

// ReactDOM.render(<ExamplePage />, document.getElementById('root'));

export default ExamplePage