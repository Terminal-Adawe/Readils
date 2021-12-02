import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './../Nav'

class Header extends React.Component{
	constructor(){
		super()
	}

	render(){
		return(<header className='header'>
      <div className='fog'>
        <img src="/pics/fogTransparent3.png" width='100%' height='100%' />
      </div>
            <Nav />
    </header>)
	}
}

export default Header