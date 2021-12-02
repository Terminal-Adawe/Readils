import React from 'react'
import ReactDOM from 'react-dom'
import nl2br from 'react-nl2br'

class Content extends React.Component {
	constructor(){
		super()
	}



	render(){
		// const { stories } = this.state

		console.log("now to show the story..."+JSON.stringify(this.props.story))
		return (<div className="row mt-4">
            <span className="contentSpan" data-aos="fade" data-aos-duration="300">
            {
            	this.props.story.map((story,i)=>{
            		let storyContent = story.content 
      
            		{
            			return <p key={ i }>
            				{ nl2br(storyContent) }
            			</p>
            		}
            		})
            }
            </span>
            </div>)
	}
}

export default Content