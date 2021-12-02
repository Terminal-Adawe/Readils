import React from 'react'
import ReactDom from 'react-dom'
import ReactDOM from 'react-dom'

class BodyTabs extends React.Component{
	constructor(){
		super()
	}

	render(){
		return (<div className="row features-row mt-1 no-gutters">
        <div className="col-lg-5 col-md-5 col-sm-12 mt-1" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500" data-aos-once="true">
          <div className="features-enclosure mx-auto">
            <img src="/pics/img2.jpg" width="100%" />
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 mt-1" data-aos="fade-up" data-aos-duration="400" data-aos-easing="ease-in-out" data-aos-delay="250" data-aos-once="true">
          <div className="features-enclosure mx-auto">
            <img src="/pics/img1.jpg" width="100%" />
          </div>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-12 mt-1" data-aos="fade-up" data-aos-duration="350" data-aos-easing="ease-in-out" data-aos-delay="400" data-aos-once="true">
          <div className="features-enclosure mx-auto">
            <img src="/pics/aes1.JPG" width="100%" />
          </div>
        </div>
     
      </div>)
	}
}

export default BodyTabs