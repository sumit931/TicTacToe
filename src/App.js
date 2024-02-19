import {useState} from 'react';

function Square({value,onSquareClick}){
  
  return (<button className = "square" onClick = {onSquareClick}>{value}</button>);
}
function winner(squares){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],  
    [0, 4, 8],
    [2, 4, 6]
  ];
  for(let i = 0;i<lines.length;i++){
    const [a,b,c] = lines[i];
    if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c]){
      return squares[a];
    }
  }
}
function Board({isNext,squares,onPlay}) {
  // const [isNext,setIsNext] = useState(true);
  // const [squares,setSquares] = useState(Array(9).fill(null));
  const win1 = winner(squares);
  var status = "";
  if(win1){
    status = "Player "+win1+" win the match\n";
  }
  function handleClick(i){
    const a1 = squares.slice();
    console.log('You pressed button '+i);
    if(a1[i]!==null||win1){
      console.log('vapis ja rha hu mummy ka pass');
      return;
    }
    if(isNext){
      a1[i] = 'X';
    }
    else{
      a1[i] = 'O';
    }
    // console.log("y1 a1 h = "+a1);
    onPlay(a1);
  }
  // console.log("ye square h = "+ squares);
  return (
    <>
    <div>
    <Square value = {squares[0]} onSquareClick={()=>handleClick(0)} />
    <Square value = {squares[1]} onSquareClick={()=>handleClick(1)}/>
    <Square value = {squares[2]} onSquareClick={()=>handleClick(2)}/>
    <div>
    </div>
    <Square value = {squares[3]} onSquareClick={()=>handleClick(3)}/>
    <Square value = {squares[4]} onSquareClick={()=>handleClick(4)}/>
    <Square value = {squares[5]} onSquareClick={()=>handleClick(5)}/>
    </div>
    <div>
    <Square value = {squares[6]} onSquareClick={()=>handleClick(6)}/>
    <Square value = {squares[7]} onSquareClick={()=>handleClick(7)}/>
    <Square value = {squares[8]} onSquareClick={()=>handleClick(8)}/>
    </div>
    <div>{status}</div>
    </>
  );
}
export default function Game(){
  const [isNext,setIsNext] = useState(true);
  const [history,setHistory] = useState([Array(9).fill(null)]);
  const currentSquare = history[history.length-1];
  function handlePlay(v1){
    // console.log("me bhi chalunga ab");
    setHistory([...history,v1]);
    setIsNext(!isNext);
  }
  function jumpTo(nextMove){
    // ToDo
  }
  // const moves = history.map((squares,move)=>{
  //   let description;
  //   if(move>0){
  //     description = 'Go to move #'+move;
  //   }
  //   else{
  //     description = 'Go to game start';
  //   }
  //   return (
  //     <li>
  //       <button onClick ={()=>jumpTo(move)} >description</button>
  //     </li>
  //   );
  // });
  return (
    <div className='game'>
      <div className='game-board'>
        <Board isNext = {isNext} squares = {currentSquare} onPlay = {handlePlay}/>
      </div>
      <div className='game-info'>
        {/* <ol>{ moves}</ol> */}
      </div>
    </div>
  )
}


// export default App;