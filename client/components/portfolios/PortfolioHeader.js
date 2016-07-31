import React, { Component } from 'react';
class PortfolioHeader extends Component {

  editPortfolio() {
    this.props.editPortfolio();
  }

  savePortfolio() {
    this.props.savePortfolio();
  }

  renderHeaderActions() {
    if(this.props.isEditable) {
      return (
        <button className="btn btn-primary" onClick={this.savePortfolio.bind(this)}>Save</button>
      )
    } else {
      return (
        <button className="btn btn-primary" onClick={this.editPortfolio.bind(this)}>Customize</button>
      )
    }
  }

  render() {
    return (
      <div className="portfolio-page-header">
        <div className="portfolio-thumb">
          <img src={this.props.portfolio.image}/>
        </div>
        <div className="portfolio-meta-action-wrap">
          <h2 className="portfolio-name">
            {this.props.portfolio.name}
          </h2>
          <div className="portfolio-header-actions">
            {this.renderHeaderActions()}     
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioHeader;
