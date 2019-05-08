import React, { Component } from 'react';
import './GCI.css';
import * as d3 from 'd3';



export default class GCI extends Component {
    constructor(){
        super();

        this.state = {
            gci: []
        }
    }

componentDidMount(){
    var chosenProjection = d3.geoMercator()
    .scale(3000)
    .translate([4620, 2420])
    var path = d3.geoPath()
    .projection(chosenProjection);
    //parse thru GeoJSON Feature Object
    d3.json("gci.geojson").then(indiana => {
        d3.select('.Indiana').append('path').attr('d', path(indiana)).attr('class', 'gci')
    });
}

	render() {
		return <svg className='GCI' width={470} height={300}>
            </svg>;
	}
}
