import React from 'react'
import ReactDOM from 'react-dom'
import Header from './mainpage/header'
import Body from './mainpage/body'

class Mainpage extends React.Component{
	constructor(){
		super()

		this.selectedstory = this.selectedstory.bind(this)
	}

	selectedstory(storyid){
		let pageNo = 101
		let type = "number"
		this.props.selectedstory(storyid, pageNo, type)
	}

	render(){
		return(
				<div className='body'>
				<Header />
				<Body selectedstory={ this.selectedstory }/>
				</div>
				)
	}
}

export default Mainpage