import React from 'react'
import ReactDOM from 'react-dom'

class BodyHeader extends React.Component{
	constructor(){
		super()
	}

	render(){
		return (<div className="image-header" data-aos="fade" data-aos-duration="200">
        <img src="/pics/5thPic.jpg" width="100%" data-speed="1" className="img-parallax header2Img" />
        <div className="header-inscr">
          <img src='/pics/logo_size2.jpg' className='logoImageInscr centerDiv'/>
        </div>
      </div>)
	}
}

export default BodyHeader