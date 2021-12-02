import React from 'react'
import ReactDOM from 'react-dom'
import BodyHeader from './bodyHeader'
import BodyTabs from './bodyTabs'
import Message from './message'
import Content from './content'

class Body extends React.Component{
	constructor(){
		super()

		this.selectedstory = this.selectedstory.bind(this)
	}

	selectedstory(storyid){
		console.log("story id that was clicked is "+storyid)
		this.props.selectedstory(storyid)
	}

	render(){
		return (<div className="container my-4">


      				<BodyHeader />


      				<BodyTabs />


      				<Message />

      				<Content selectedstory={ this.selectedstory }/>
      </div>)
	}
}

export default Body