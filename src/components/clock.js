import React from 'react'

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date:new Date(),
            counter:1,
        }
    }
    /**
     * 生命周期  componentDidMount() 组件输出到DOM后执行
     *          componentWillUnmount() 组件注销，即卸载时执行
     */
    componentDidMount() {
        this.timeID = setInterval(()=> this.tick(),1000)
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick(){
        this.setState((prevStateee)=>({
            date:new Date(),
            counter:prevStateee.counter+2,
        }))
        console.log(this.state.counter)
    }
    render(){
        if(this.state.counter<4){
            return(
                <div>
                    <p>现在时间：{this.state.date.toLocaleTimeString()}</p>
                </div> 
            )
        }else{
            return(
                <div>
                    <p>过去时间：{this.state.date.toLocaleTimeString()}</p>
                </div> 
            )
        }
    }
}


export default Clock;
