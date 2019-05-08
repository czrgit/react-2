import React,{Component} from 'react'
import logo from '../logo.svg'
export default class App extends Component{
	render(){
		return(
			<div>
				<img className='logo' src={logo} alt="logo"/>
				<h2>这是一张图片</h2>
			</div>
		)
	}
}
