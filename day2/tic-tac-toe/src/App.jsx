import { useState, createElement } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// props are flowing from parent element.
function Counter({ value }) {

  // // state is the local store to save some data internally in the component.
  
  // not work
  // let value = props.value;

  // useState will take the initial value of the state, and return an array
  // arr[0] : the local store (current state value)
  // arr[1] : the function that can be used to set the local store.
  // const arr = useState(props.value);
  // const count = arr[0];
  // const setCount = arr[1];

  const [count, setCount] = useState(value);

  return (
    <button className="square"
      onClick={() => {
        // setCount(count + 1);

        // use a function F : (c) => c+1
        // input for F is current state value.
        // output for F is new state value.
        // this format is more preferable.
        setCount((c) => c + 1); 
      }}
      >
      {count}
    </button>
  );
  
  // Same as below.
  // return createElement(
  //   'button',
  //   { className: 'square' },
  //   props.value
  // );
}

// App is parent, we have 9 Square children
// The square children does not know / should not maintain
// the information of the current player in the board.
// it should not change the board's current player

function Square({ player, setPlayer, board, setBoard, index }) {

  const [p, setP] = useState('');

  return (
    <button className="square"
      onClick={() => {
        // ignore clicks on already filled cells.
        if (p !== '') {
          return;
        }
        setP(player);
        let newPlayer;
        if (player === 'X') {
          newPlayer = 'O'
        }
        else {
          newPlayer = 'X';
        };
        setPlayer(newPlayer);
      }}
      >
      {p}
    </button>
  );

}

function Board() {

  const [player, setPlayer] = useState('X')
  const [winner, setWinner] = useState('')
  const [board, setBoard] = useState(Array(9).fill(null)) // [null, null, ... 9 times]

  // const x = 5;
  // const abc = {x: x};
  // const abc = {x} is also the same.

  return (
    <>
      <div className="board-row">
        {/* Square needs to know the index inside the board */}
        <Square {...{player, setPlayer, winner, board, setBoard, index: 0}} /> 
        <Square {...{player, setPlayer, winner, board, setBoard, index: 1}} />
        <Square {...{player, setPlayer, winner, board, setBoard, index: 2}} />
      </div>
      <div className="board-row">
        <Square {...{player, setPlayer, winner, board, setBoard, index: 3}} />
        <Square {...{player, setPlayer, winner, board, setBoard, index: 4}} />
        <Square {...{player, setPlayer, winner, board, setBoard, index: 5}} />
      </div>
      <div className="board-row">
        <Square {...{player, setPlayer, winner, board, setBoard, index: 6}} />
        <Square {...{player, setPlayer, winner, board, setBoard, index: 7}} />
        <Square {...{player, setPlayer, winner, board, setBoard, index: 8}} />
      </div>
      <h3 style={{ margin: '20px'}}>Counter</h3>
      <p>
        <Counter value={10}/>
      </p>
    </>
  )
}

export default Board
