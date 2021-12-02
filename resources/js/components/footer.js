import React from 'react'
import reactDOM from 'react-dom'

function Footer (){

	let theDate=new Date() 
	theDate = theDate.getFullYear()

	const myStyle = {
		textAlign: "center"
	}

	return (<footer className="footer">
    <div className="container-fluid">
      <div className="row mt-4">
		    <span className="mx-auto"><p style={ myStyle }>Copyright &copy; { theDate } Reserved</p></span>
      </div>
    </div>
	</footer>)
}

export default Footer