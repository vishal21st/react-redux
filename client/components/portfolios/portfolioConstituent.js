import React, { Component } from 'react';

class PortfolioConstituent extends Component {

  handleRangeChange() {
    
    var range = this.refs.range;

    var obj = { 
      participation: range.value + '%', 
      symbol: this.props.symbol, 
      isEditable: this.props.isEditable 
    };

    this.props.handleParticipationChange(obj);
  }

  renderSlider() {
    if(this.props.isEditable) {
      return (
        <div className="col-md-4 table-item">
          <input type="range" ref="range" min="0" max="100" step="1" 
                 value={parseInt(this.props.participation)} onChange={this.handleRangeChange.bind(this)}/>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="table-row">
        <div className="col-md-2 table-item">
          {this.props.symbol}
        </div>
        <div className="col-md-4 table-item">
          {this.props.participation}
        </div>
        {this.renderSlider()}
      </div>
    );
  }
}

export default PortfolioConstituent;
