import React, { Component } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import './Signature.css';

export default class Signature extends Component {
	render() {
		return (
			<div className="Signature">
				<h1>Authorization</h1>
				<p>By signing here, I, allow GCI to make inquiry of my background</p>
				<p>
					Applicant's Signature: <br />
				</p>
                
				<SignatureCanvas penColor="darkblue" canvasProps={{ width: 300, height: 150, className: 'sigCanvas' }} />
               <input id='sigDate' type='date'></input>
			</div>
		);
	}
}
