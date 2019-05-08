import React, { Component } from 'react';
import './Personal.css';
import Submit from '../../Submit/Submit';
import axios from 'axios';

export default class Personal extends Component {
	constructor(){
		super();

		this.state = {
			name: '',
			address: '',
			phone: '',
			bday: '',
			citizenship: '',
			accepted: false,
			error: null
		}
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	submitForm = (e) => {
		const API_PATH = 'http://localhost:3005/server/index.php';
		e.preventDefault();
		console.log(this.state)
		axios({
		  method: 'post',
		  url: `${API_PATH}`,
		  headers: { 'content-type': 'application/json' },
		  data: this.state
		})
		  .then(result => {
			this.setState({
			  accepted: result.data.sent
			})
		  })
		  .catch(error => this.setState({ error: error.message }));
	}
	render() {
		
		return (
			<form onSubmit={e=>this.submitForm(e)}action="/action_page.php" className="Personal">
				<svg className='PersonalTitleField' height={70}>
					<text x='40' y='50' className='PersonalTitle'>Personal Information</text>
				</svg>
				<fieldset className="PersonalItems">
					<label id="name">
						Name:
						<input type="fullname" onChange={e=>this.handleChange(e)} value={this.state.name} name='name' />
					</label>
					<label id="address">
						Address:
						<input type="address" onChange={e=>this.handleChange(e)} value={this.state.address} name='address'/>
					</label>
					<label id="phone">
						Phone Number:
						<input type="phone" onChange={e=>this.handleChange(e)} value={this.state.phone} name='phone'/>
					</label>
					<label id="dob">
						D.O.B
						<input
						onChange={e=>this.handleChange(e)} value={this.state.dob}
							type="date"
							name="bday"
							alt="age"
							pattern="[1-9][0-9]?$|^100$ | ^1919|192[0-9]\d|20[0-9]\d|201[0-9]$"
							title="Field needs to be your age in years or your year of birth"
						/>
					</label>
					<label>
						Citizenship:<input
						onChange={e=>this.handleChange(e)}
							type="text"
							name="citizenship"
							pattern="[A-Za-z | s]{2,}"
							title="No numbers or special characters"
						/>
					</label>
				</fieldset>
				<Submit />
			</form>
		);
	}
}
