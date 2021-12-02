import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './../Nav'

class Header extends React.Component{
	constructor(){
		super()
	}

	render(){

    const mystyle = {
      width: "100%",
      height: "100vh",
      background: "url('/pics/4thPic.jpg') no-repeat 50% 50%",
      backgroundSize: "cover",
      zIndex: "1000",
      position: "relative",
      overflow: "hidden"
    };

		return( <header style={mystyle}>
            <Nav />
    </header>)
	}
}

export default Header