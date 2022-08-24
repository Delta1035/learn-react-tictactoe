import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Welcome from "./pages/Welcome";

// class Square extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     value: null,
//   //   };
//   // }
//   render() {
//     //  接收来自父组件传递进来的value属性值
//     console.log(this);
//     return (
//       <button
//         className="square"
//         onClick={() => {
//           // this.setState({value:'x'})
//           this.props.onClick();
//         }}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

export function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //     winner: null,
  //   };
  // }

  // 性能优化
  // shouldComponentUpdate(nextProps, nextState) {
  //   //if(nextState.squares[5] !== this.state.squares[5]){// 当 squares[5] 值改变的时候才发生组件更新, 但是不符合业务逻辑
  //   if (nextState.squares !== this.state.squares) {
  //     // 只要前面和后面的squares 不相等 就更新组件
  //     return true;
  //   }

  //   return false;
  // }

  // handleClick(i) {
  //   console.log("handleClick" + i);
  //   const squares = this.state.squares.slice(); // 复制了一份squares数据
  //   const winner = calculateWinner(this.state.squares);
  //   if (winner) {
  //     return;
  //   } else {
  //     if (this.state.squares[i] === null) {
  //       squares[i] = this.state.xIsNext ? "x" : "o";
  //     }

  //     this.setState({ squares, xIsNext: !this.state.xIsNext });
  //   }
  // }

  renderSquare(i) {
    // 像Square 组件 传递数据 组件类 props 对象 下的value 属性
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => {
          this.props.onClick(i);
        }}
      />
    );
  }

  render() {
    let status = "Next player: " + (this.props.xIsNext ? "x" : "o");
    // const winner = calculateWinner(this.props.squares);
    // if (winner) {
    //   // 如果存在胜利者
    //   status = "Winner is " + winner;
    // }
    return (
      <div>
        {/* <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div> */}
        <Welcome></Welcome>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      history:[{
        squares:Array(9).fill(null)
      }],
      xIsNext:true
    }
  }

  handleClick(i) {
    console.log("handleClick" + i);
    const squares = this.state.squares.slice(); // 复制了一份squares数据
    const winner = calculateWinner(this.state.squares);
    if (winner) {
      return;
    } else {
      if (this.state.squares[i] === null) {
        squares[i] = this.state.xIsNext ? "x" : "o";
      }

      this.setState({ squares, xIsNext: !this.state.xIsNext });
    }
  }
  
  render() {
    console.log('history',this.state.history[this.state.history.lenght-1]);
    return (
      <div className="game">
        <div className="game-board">
          <Board xIsNext={this.state.xIsNext} onClick={this.handleClick} squares={this.state.history[this.state.history.lenght-1]} />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

export function calculateWinner(squares) {
  const lines = [
    // 胜利的所有结果
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // 结果符合胜利队形的时候 返回胜利的棋子
    }
  }
  return null;
}
