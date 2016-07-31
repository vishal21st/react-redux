import React, { Component } from 'react';
import PortfolioConstituent from './PortfolioConstituent';

class PortfolioConstituents extends Component {

  getConsituents () {
    var self = this;
    if(this.props.constituents) {
      return this.props.constituents.map(function(val , index) {
        return <PortfolioConstituent key={index} {...val} 
                  isEditable={self.props.isEditable}
                  handleParticipationChange={self.props.handleParticipationChange}/>
      })
    }
  }

  render() {
    return (
      <div className="portfolio-constituents-table">
        <div className="table-header row">
          <div className="col-md-2">
            Segments and stocks
          </div>
          <div className="col-md-4">
            Weightage 
          </div>
        </div>

        <div className="table-body row">
          {this.getConsituents()}
        </div>
      </div>
    );
  }
}

export default PortfolioConstituents;
