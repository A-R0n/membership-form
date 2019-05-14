import React, { Component } from 'react';
import './Category.css';
import * as d3 from 'd3';
import Submit from '../../Submit/Submit';

export default class Category extends Component {
	constructor() {
		super();

		this.state = {
			type: '',
			classification: null,
			prices: [
				{ junior_walk: 800 },
				{ junior_cart: 1200 },
				{ junior_range: 400 },
				{ junior_gpa: 1400 },
				{ adult_walk: 2600 },
				{ adult_cart: 3200 },
				{ adult_range: 400 },
				{ adult_gpa: 675 },
				{ family_walk: 3250 },
				{ family_cart: 4050 },
				{ family_range: 550 },
				{ family_gpa: 825 }
			]
		};
	}

	handleType = (e) => {
		if (this.state.classification !== null) {
			d3.select('#price text').remove();
		}
		this.setState({ type: e }, () => this.classify(e));
	};

	handleOptions = (e) => {
		if (this.state.type.length > 0) {
			d3.select('#price text').remove();
		}
		this.setState({ classification: e }, () => this.classify(e));
	};

	classify = (e) => {
		const { prices, type, classification } = this.state;
		prices.map((elem) => {
			let myJSON = JSON.stringify(elem);
			if (myJSON.includes(`${e + '_' + classification}`)) {
				var joinStrings = e.concat('_' + classification);
				this.showPrice(joinStrings);
			}
			if (myJSON.includes(`${type + '_' + e}`)) {
				var joinStrings = type.concat('_' + e);
				this.showPrice(joinStrings);
			}
		});
	};

	async showPrice(a) {
		let obj = this.state.prices.find((o) => {
			return o[`${a}`];
		});
		const num = d3
			.select('#price')
			.append('text')
			.text('$' + obj[`${a}`])
			.attr('y', 20)
			.attr('x', 10)
			.style('fill', 'green');
		await this.rectSize();
	}

	rectSize = () => {
		const textBox = d3.select('#price text').node().getBBox();
		d3.select('#textRect').attr('width', textBox.width + 10).attr('height', textBox.height + 5);
	};
	render() {
		return (
			<form className="membership">
				<svg className="membershipTitleField" height={70}>
					<text x="100" y="50" className="membershipTitle">
						Select Category
					</text>
				</svg>
				<div className="typeOfMembership" onChange={(e) => this.handleType(e.target.value)}>
					<label>
						Junior:
						<input type="radio" value="junior" name="category" />
					</label>
					<label>
						Adult:
						<input type="radio" value="adult" name="category" />
					</label>
					<label>
						Family:
						<input type="radio" value="family" name="category" />
					</label>
				</div>
				<p className="options">
					Options:
					<select name="membershipSelect" onChange={(e) => this.handleOptions(e.target.value)}>
						<option value="">Choose here</option>
						<option value="walk">Full Membership</option>
						<option value="cart">Full Membership w/ cart</option>
						<option value="range">Unlimited Range</option>
						<option value="gpa">Unlimited Range + GPA</option>
					</select>
				</p>
				<div className="totalCost">
					Total:{' '}
					<svg id="price" width="100%" height="100%">
						<g>
							<text id="easyMoney" stoke="black" x="10" y="20">
								$0{' '}
							</text>
							<rect x="5" y="0" id="textRect" />
						</g>
					</svg>
				</div>
				<Submit />
			</form>
		);
	}
}
