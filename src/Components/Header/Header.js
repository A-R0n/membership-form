import React, {Component} from 'react';
import './Header.css';
import * as d3 from 'd3';


export default class Header extends Component {
  constructor(){
    super();

    this.state = {
      data: {
        'margin-left': 0,
        'margin-top': 70
      }
    }
  }
  componentDidMount(){
    this.makeText();
  }

  makeText = () => {
   const header = d3.select('.Header').attr('x', 0).attr('y', 0);
   header.append('text').attr('class', 'title')
    .attr('x', this.state.data["margin-left"]).attr('y', this.state.data["margin-top"])
    .text('Membership Form');
  }
  render(){
  return (
    <div className='HeaderWrapper'>
    <svg className="Header" height={100} width={410}></svg>
    </div>
  );
  }
};