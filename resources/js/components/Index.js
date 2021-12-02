import React from 'react'
import ReactDOM from 'react-dom'
import Mainpage from './mainpage'
import Readstory from './readstory'
import Footer from './footer'
import Api from './api'
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom"


class Index extends React.Component{
	constructor(){
		super()

		this.state = {
			storyid: "",
			story: [],
			options: []
		}

		this.selectedstory = this.selectedstory.bind(this)
		this.getStory = this.getStory.bind(this)
		this.getPage = this.getPage.bind(this)
	}

	selectedstory(storyid, pageNo, type){
		console.log("story id selected is "+storyid+" with page number "+pageNo) 
		this.setState({
			storyid: storyid
		})	



			this.getStory(storyid, pageNo, type, 0)
		
	}

	getPage(pageid,optionid){
		let type = "ID"
		const storyid = this.state.storyid
		this.getStory(storyid, pageid, type, optionid)
	}

	getStory(story, pageNo, type, optionid){


		new Api().getStory(story, pageNo, type, optionid)
						.then(response => {
								
								this.setState({
									story: response.story,
									options: response.options
									})
								}
							);
	}

	render(){
		return(<Router>
  		<div>
      	<Switch>
          <Route exact path="/" render={(props) => <Mainpage selectedstory={ this.selectedstory }/>}/>
          <Route exact path="/readstory" render={(props) => <Readstory story ={ this.state.story } options={ this.state.options } getPage={ this.getPage }/>}/>
      	</Switch>
      <Footer/>
      </div>
  </Router>
			   )
	}

}

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}