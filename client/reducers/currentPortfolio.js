export default (state = {
		currentPortfolio: {
			isEditable: false,
			key: null,
			name: "",
			constituents: []
		}
	}, action) => {
		switch (action.type) {

			case "FETCH_PORTFOLIO": {
				var _portfolio = Object.assign({},state.portfolios[action.payload]);
				var newState = {...state, currentPortfolio: _portfolio};
				return Object.assign({}, newState);
				break;
			}

			case "SET_PORTFOLIO_EDIT_STATE": {
				var _currentPortfolio = Object.assign({},state.currentPortfolio);
				_currentPortfolio.isEditable = true;
				var newState = Object.assign({}, state);
				newState.currentPortfolio = _currentPortfolio;
				return newState;
				break;
			}

			default: 
				return state;
		}
};