import React, { Component } from 'react';
import './Indiana.css';
import * as d3 from 'd3';


export default class Indiana extends Component {
    constructor(){
        super();

        this.state = {
            indiana: []
        }
    }

componentDidMount(){
    var chosenProjection = d3.geoMercator()
    .scale(3000)
    .translate([4620, 2420])
    var path = d3.geoPath()
    .projection(chosenProjection);
    //parse thru GeoJSON Feature Object
    d3.json("indiana.geojson").then(indiana => {
        d3.select('.Indiana').append('path').attr('d', path(indiana))
    });
    this.appendTitle()
    this.gci()
}

appendTitle = () => {
    d3.select('.Indiana').append('text').attr('x', 200).attr('y', 55).text('Golf Club');
    d3.select('.Indiana').append('text').attr('x', 200).attr('y', 105).text('of Indiana');
}

gci = () => {
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
		return <svg className='Indiana' width={470} height={300}>
                <g className='indiana'></g> 
            </svg>;
	}
}
