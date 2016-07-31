import React, { Component } from 'react';
import { fetchPortfolio, savePortfolio, setPortfolioEditState, updateTempPorfolio } from '../../actions/portfoliosActions';
import { connect } from 'react-redux';
import PortfolioHeader from './PortfolioHeader';
import PortfolioConstituents from './PortfolioConstituents';
import { Link } from 'react-router';

class PortfolioPage extends Component {

  editPortfolio() {
    this.props.setPortfolioEditState(true);
  }

  calculateParticipation (constituent) {
    var newConstituent = constituent;
    var oldConstituent = {};
    
    this.props.tempPortfolio.constituents.map(function(val, index) {
      if(val.symbol == constituent.symbol) {
        oldConstituent =   val;
      }
    })

    var newConstituentVal = newConstituent.participation;
    var oldConstituentVal = oldConstituent.participation;
    
    var oldConstituentRemainder = 100 - parseInt(oldConstituentVal);
    var newConstituentRemainder = 100 - parseInt(newConstituentVal);

    var newPortfolioConstituents = this.props.tempPortfolio.constituents.map(function(val, index) {
      if(val.symbol == constituent.symbol) {
        val.participation = constituent.participation;
        return val;
      } else {
        val.participation = parseInt((parseInt(val.participation)/oldConstituentRemainder)*newConstituentRemainder) +'%';
        return val;
      }
    })

    return newPortfolioConstituents;
  }

  handleParticipationChange(arg) {
    
    var tempPortfolio = Object.assign({},this.props.tempPortfolio);
    var newConstituents = this.calculateParticipation(arg);
    
    tempPortfolio.constituents = [].concat(newConstituents);
    this.props.updateTempPorfolio(tempPortfolio);
  }

  savePortfolio() {
    this.props.savePortfolio(this.props.tempPortfolio);
  }

  componentWillMount() {
    this.props.fetchPortfolio(this.props.params.portfolioName);
  }

  renderConstituents() {
    const { currentPortfolio, tempPortfolio } = this.props;
    if (this.props.currentPortfolio.isEditable) {
      return(
        <PortfolioConstituents  constituents={tempPortfolio.constituents}
                                isEditable={tempPortfolio.isEditable} 
                                handleParticipationChange={this.handleParticipationChange.bind(this)} / >
      )
    } else {
      return (
        <PortfolioConstituents  constituents={currentPortfolio.constituents}
                                isEditable={currentPortfolio.isEditable} 
                                handleParticipationChange={this.handleParticipationChange.bind(this)} / >
      )
    }
  }

  render() {
    const { currentPortfolio } = this.props;
    return (
      <div className="portfolio-page">
        <div className="back-btn">
          <Link to="/" className="go-back-link">
            See All portfolios
          </Link>
        </div>
        <PortfolioHeader portfolio={currentPortfolio} 
                         editPortfolio={this.editPortfolio.bind(this)} 
                         isEditable={currentPortfolio.isEditable} 
                         savePortfolio={this.savePortfolio.bind(this)} / >
        {this.renderConstituents()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.portfolios;
}

PortfolioPage = connect(
  mapStateToProps,
  {fetchPortfolio, savePortfolio, setPortfolioEditState, updateTempPorfolio}
)(PortfolioPage);


export default PortfolioPage;
