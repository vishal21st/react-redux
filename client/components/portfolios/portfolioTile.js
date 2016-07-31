import React, { Component } from 'react';
import { Link } from 'react-router';

class PortfolioTile extends Component {
  render() {
    return (
      <li className="col-md-3 col-sm-6 col-xs-6">
        <Link to={"/portfolio/"+this.props.portfolio.name}  className="portfolio-tile">
          <div className="portfolio-tile_thumb">
            <img className="portfolio-tile_thumb_img" src={this.props.portfolio.image}/>
            <div className="portfolio-tile_thumb_meta">
              {this.props.portfolio.name}
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

export default PortfolioTile;
