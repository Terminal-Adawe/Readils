import React from 'react'
import ReactDOM from 'react-dom'
import Header from './readstory/header'
import Body from './readstory/body'

class Readstory extends React.Component{
	constructor(){
		super()

		this.getPage = this.getPage.bind(this)
	}

	getPage(pageid,optionid){
		this.props.getPage(pageid,optionid)
	}

	render(){
		return(
				<div className='body'>
				<Header />
				<Body story={ this.props.story } options={ this.props.options } getPage={ this.getPage }/>
				</div>
				)
	}
}

export default Readstory