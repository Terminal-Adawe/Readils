import React from 'react'
import ReactDOM from 'react-dom'

class BodyHeader extends React.Component{
	constructor(){
		super()

		this.state={
			story: []
		}
	}

	componentDidMount(){
		console.log("body header componentDidMount")
		this.setState({
			story: this.props.story
		})
	}

	render(){
		const { story } = this.props
		console.log("story is "+this.props.story)
		return ( this.props.story.map((story,i)=> {
			console.log("iterate"+story.title)
            const url = "/"+story.storyCoverPic

            console.log("date received is "+story.dateCreated)

            

            // Calculate date
            // var dateObj = new Date(story.dateCreated);
            // var month = dateObj.getUTCMonth() + 1; 
            // var day = dateObj.getUTCDate();
            // var year = dateObj.getUTCFullYear();

            // let date = new Date(Date.UTC(year, month, day, 3, 0, 0, 200));
            const date = moment(story.dateCreated).format('MMMM Do YYYY')


            // var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

            // let date = new Intl.DateTimeFormat('en-US', options).format(dateObj)

			return <div key={ i } className="row mt-4 title-holder">
            <div className="col-lg-3 col-md-3 col-sm-12">
                <img src={ url } className="mx-auto storyHeadingPic" width="90%" />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12">
                <div className="storyHeadingDetails ml-3">
                <div className="row" data-aos="fade-left" data-aos-duration="300" data-aos-delay="150" data-aos-once="true">
                    <h4><b>Title: </b><span>{ story.title }</span></h4>
                </div>
                <div className="row" data-aos="fade-left" data-aos-duration="300" data-aos-delay="350" data-aos-once="true">
                    <h6><b>Author: </b><span>{ story.username }</span></h6>
                </div>
                <div className="row" data-aos="fade-left" data-aos-duration="300" data-aos-delay="450" data-aos-once="true">
                    <h6><b>Date published: </b><span>{ date }</span></h6>
                </div>
                <div className="row" data-aos="fade-left" data-aos-duration="300" data-aos-delay="550" data-aos-once="true">
                    <h6><b>Rating: </b><span>*****</span></h6>
                </div>
                </div>
            </div>
        </div>})
    	)
	}
}

export default BodyHeader