// import React, {Component} from 'react'
import React from 'react'

/*
class Square extends Component {
	// constructor(){
	// 	// 在使用 JavaScript classes 时，你必须调用 super(); 方法才能在继承父类的子类中正确获取到类型的 this 。
	// 	super();
	// 	this.state={value:null}  //this.state为组件设置自身的状态数据
	// }
	// props 父组件向子组件传递的数据
	render(){
		return (
			// <button className="boards" onClick={()=>{this.setState({value:'X'})}}>
			//this.props.onClick:是父组件传递给子组件的
			<button className="boards" onClick={()=>this.props.onClick()} >  
				{this.props.value}
			</button>
		)
	}
}
*/


/**
 * 只有render方法的组件可以使用更简单的函数定义组件的方法 ： 函数定义组件,如下：
 * 参数props 是从父组件传递过来的props：即为父组件向子组件传递的参数
 */
function Square(props) {
 return (
	// <button className="boards" onClick={()=>props.onClick()}>   
	//onClick 函数可以简化为以下的写法：注意：不能写成 onClik={props.onCliK()} //不能加括号：会导致渲染时直接被触发，并且还会导致死循环
	<button className="boards" onClick={props.onClick}>
		{props.value}
	</button>
 )
}
export default Square

