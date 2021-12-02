import React from 'react'
import ReactDOM from 'react-dom'
import Api from './../api'
import { Link } from "react-router-dom"; 

class Content extends React.Component {
	constructor(){
		super()

		this.state = {
			stories: []
		}
	}

	componentDidMount(){
		let stories
		new Api().getStories()
						.then(response => {
								stories = response
							
								this.setState({
									stories: stories
								})
								}
							);
			console.log("[2]stories is: "+JSON.stringify(stories))
		
	}

	render(){
		const { stories } = this.state
		let delay=10

		const dateStyle = {
			color: "#d7dbdd"
		}

		return (<div className="row no-gutters stories-holder">
				{
					stories.map((story,i)=> {
						const url = "/"+story.storyCoverPic

						const date = moment(story.date_created).format('Do, MMMM YYYY');

						delay = (i * delay)

						console.log("image path is: "+url)
						return <div key={ i } className="col-lg-3 col-md-3 col-sm-6 mt-2 per-story-holder" data-aos="fade-up" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay={ delay } data-aos-once="true">
            <div className="story-holder mx-auto">
            <div className="mx-auto pictureDiv">
              <img src={ url } width="100%" />
            </div>
            <div className="about-story mx-auto mt-3">
              <div className="row">
                <h5>{ story.title }</h5>
              </div>
              <div className="row">
                <small>{ story.summary }</small>
              </div>
              <div className="row mt-1" style={ dateStyle }>
                <small>{ date }</small>
              </div>
            </div>
              <Link to="/readstory" className="readStoryLink" onClick={()=>this.props.selectedstory(story.story_id)}></Link>
            </div>
            </div>
					})
				}
			</div>)
	}
}

export default Content