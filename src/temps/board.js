import React, {Component} from 'react'
import Square from './square'
// import square from './square';

class Board extends Component {
    /**
     * 当你遇到需要同时获取多个子组件数据，或者两个组件之间需要相互通讯的情况时，
     * 把子组件的 state 数据提升至其共同的父组件当中保存。
     * 之后父组件可以通过 props 将状态数据传递到子组件当中。
     * 这样应用当中的状态数据就能够更方便地交流共享了。
     */
    renderSquare(i){
        // 在value属性中传递对应的state原数组元素的值
        return ( 
            <Square 
                value={this.props.squares[i]} 
                onClick={()=> this.props.onClick(i)}     //onClick:从负组件里传递一个事件处理函数到Square子组件当中
            />  
        )   
    }
    
    render () {
        return (
            <div>
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
                </div>
            </div>
        )
    }
}

export default Board
