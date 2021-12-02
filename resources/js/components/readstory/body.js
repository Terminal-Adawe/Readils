import React from 'react'
import ReactDOM from 'react-dom'
import BodyHeader from './bodyHeader'
import Content from './content'
import Options from './options'

class Body extends React.Component{
	constructor(){
		super()

		this.getPage = this.getPage.bind(this)
	}

	getPage(pageid,optionid){
		this.props.getPage(pageid, optionid)
	}


	render(){
		console.log("Story title is "+JSON.stringify(this.props.story))
		return (<div className="container my-4">


      				<BodyHeader story={ this.props.story }/>

      				<hr/>

      				<Content story={ this.props.story }/>

      				<Options options={ this.props.options } getPage = { this.getPage } />
      </div>)
	}
}

export default Body