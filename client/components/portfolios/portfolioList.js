import React, { Component } from 'react';
import PortfolioTile from './portfolioTile';

class PortfolioList extends Component {

  getList() {
    var self = this;
    var keys = Object.keys(this.props.portfolios);
    if(keys.length > 0) {
      return keys.map(function(val, index) {
        var item = self.props.portfolios[val];
        return <PortfolioTile key={index} portfolio={item}/>
      })
    } else {
      return (
        <li className="col-md-12">No result found</li>
      )
    } 
  }

  render() {
    return (
      <ul className="portfolio-list">
          {this.getList()}
      </ul>
    );
  }
}

export default PortfolioList;
