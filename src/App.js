import React, { Component } from 'react';
// import logo from './logo.svg';
import utils from './utils/util'
import './App.css';
import Board from './temps/board'
import Clock from './components/clock'

class App extends Component {
  constructor(){
    super();
    this.state={
      history:[{
        squares:Array(9).fill(null),
      }],
      xIsNext:true,
      stepNumber:0,
    }
  }
  handleClick (i) {
        const history = this.state.history.slice(0,this.state.stepNumber+1)
        console.log(history)
        const current = history[history.length-1];
        const squares = current.squares.slice()
        if(utils.calculateWinner(squares)||squares[i]){
          return ;
        }
        squares[i]=this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history:history.concat([{squares:squares}]),
            xIsNext:!this.state.xIsNext,
            stepNumber:history.length,
        })
    }
  jumpTo(step){
    console.log(step)
    this.setState({
      stepNumber:step,
      xIsNext:(step%2) ? false:true,
    })
  }
  render() {
    const history = this.state.history.slice(0,this.state.stepNumber+1);
    const current = history[history.length-1];
    const winner = utils.calculateWinner(current.squares);

    const moves = history.map((step,move)=>{
      const desc = move ? 'Move #' + move:'Game start';
      return (
        <li key={move}>
          <a href="#" onClick={()=>{this.jumpTo(move)}}>{desc}</a>
        </li>
      )
    })
    let status;
        if(winner){
            status = 'winner:' + winner;
        }else{
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Board  squares={current.squares} 
            onClick={(i)=>{this.handleClick(i)}}
          />
        </div>
        <div>
          {status}
          {moves}
        </div>
        <Clock />
      </div>
    );
  }
}

export default App;
