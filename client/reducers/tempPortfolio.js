export default (state = { 
		tempPortfolio: {
			isEditable: false,
			key: null,
			name: "",
			constituents: []
		}
	}, action) => {
		switch (action.type) {
			case "SET_PORTFOLIO_EDIT_STATE": {
				var _tempPortfolio = Object.assign({}, state.currentPortfolio);
				_tempPortfolio.constituents = [].concat(state.currentPortfolio.constituents);
				var newState = Object.assign({}, state);
				// newState.currentPortfolio = _currentPortfolio;
				newState.tempPortfolio = _tempPortfolio;
				// return  { ...state, currentPortfolio: _currentPortfolio, tempPortfolio: _tempPortfolio };
				return newState;
				break;
			}

			case "UPDATE_TEMP_PORTFOLIO": {
				var _newTempPortfolio = Object.assign({}, action.payload)
				console.log(state.currentPortfolio.constituents);
				console.log(_newTempPortfolio.constituents);
				console.log(state.currentPortfolio.constituents === state.tempPortfolio.constituents);
				console.log(state.currentPortfolio.constituents === _newTempPortfolio.constituents);
				return {...state, tempPortfolio: _newTempPortfolio};
				break;
			}

			default: 
				return state;
		}
};