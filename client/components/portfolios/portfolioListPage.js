import React, { Component } from 'react';
import { fetchPortfolios, searchPortfolio } from '../../actions/portfoliosActions';
import { connect } from 'react-redux';
// import { reduxForm } from 'redux-form';
// import * as actions from '../../actions/auth';
import PortfolioList from './portfolioList';

class PortfolioListPage extends Component {
  
  componentWillMount(){
    this.props.fetchPortfolios();
  }

  handleSearch() {
    var _q = this.refs['searchInput'].value;
    this.props.searchPortfolio(_q);
  }

  render() {
    return (
      <div className="portfolios-page">
        <div className="search-bar">
          <div className="form-group">
            <div className="col-md-4">
              <input type="text" className="form-control" 
                     placeholder="Search for portfolios"
                     ref="searchInput" onChange={this.handleSearch.bind(this)}></input>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
        
        <PortfolioList portfolios={this.props.portfolios}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.portfolios;
}

PortfolioListPage = connect(
  mapStateToProps,
  {fetchPortfolios, searchPortfolio}
)(PortfolioListPage);


export default PortfolioListPage;
