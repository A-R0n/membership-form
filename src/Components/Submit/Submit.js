import React, { Component } from 'react';
import './Submit.css';

export default class Submit extends Component {
	handleSubmit = () => {
		document.form[0].submit();
	}
	render() {
		return (
			<div id="submitField">
				<input type="submit" value="Submit" onSubmit={()=>this.handleSubmit()} />
			</div>
		);
	}
}
