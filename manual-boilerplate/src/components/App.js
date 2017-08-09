import React, { Component } from 'react'

import img from '../imgs/test-image.jpg'

export default class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>{"This is the app"}</h1>
				<img src={img} alt="plank"/>
			</div>
		)
	}
}