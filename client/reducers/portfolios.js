var localDb = { 
	portfolios: {
		"portfolio_1":{
	    	key: 1,
	      name: "portfolio_1",
	      image: "https://www.smallcase.com/images/smallcases/130/SCMO_0006.png",
	      constituents: [ { symbol: "INFY", participation: '10%' }, { symbol: "IN", participation: '40%' }, { symbol: "Ik", participation: '50%' }],
	      isEditable: false
	    },
	    "portfolio_2":{
	    	key: 2,
	      name: "portfolio_2",
	      image: "https://www.smallcase.com/images/smallcases/187/SCNM_0007.png",
	      constituents: [ { symbol: "WIP", participation: '10%' }, { symbol: "TCS", participation: '90%' }],
	      isEditable: false
	    },
	    "GST":{
	    	key: 3,
	      name: "GST",
	      image: "https://www.smallcase.com/images/smallcases/187/SCNM_0004.png",
	      constituents: [ 
	      	{ symbol: "WIP", participation: '10%' }, 
	      	{ symbol: "TCS", participation: '30%' },
	      	{ symbol: "APPLE", participation: '20%' },
	      	{ symbol: "COGNI", participation: '20%' },
	      	{ symbol: "SAMSUNG", participation: '20%' },],
	      isEditable: false
	    },
	    "portfolio_4":{
	    	key: 4,
	      name: "portfolio_4",
	      image: "https://www.smallcase.com/images/smallcases/187/SCNM_0003.png",
	      constituents: [ { symbol: "WIP", participation: '20%' }, { symbol: "TC", participation: '80%' }],
	      isEditable: false
	    },
	    "portfolio_5":{
	    	key: 5,
	      name: "portfolio_5",
	      image: "https://www.smallcase.com/images/smallcases/187/SCNM_0009.png",
	      constituents: [ { symbol: "WIP", participation: '20%' }, { symbol: "TC", participation: '80%' }],
	      isEditable: false
	    },
	    "portfolio_6":{
	    	key: 6,
	      name: "portfolio_6",
	      image: "https://www.smallcase.com/images/smallcases/187/SCNM_0008.png",
	      constituents: [ { symbol: "WIP", participation: '20%' }, { symbol: "TC", participation: '80%' }],
	      isEditable: false
	    },
	    "portfolio_7":{
	    	key: 7,
	      name: "portfolio_7",
	      image: "https://www.smallcase.com/images/smallcases/187/SCNM_0006.png",
	      constituents: [ { symbol: "WIP", participation: '20%' }, { symbol: "TC", participation: '80%' }],
	      isEditable: false
	    },
	    "portfolio_8":{
	    	key: 8,
	      name: "portfolio_8",
	      image: "https://www.smallcase.com/images/smallcases/187/SCNM_0001.png",
	      constituents: [ { symbol: "WIP", participation: '20%' }, { symbol: "TC", participation: '80%' }],
	      isEditable: false
	    }

	},
	currentPortfolio: {
		isEditable: false,
		key: null,
		name: "",
		constituents: []
	},
	tempPortfolio: {
		isEditable: false,
		key: null,
		name: "",
		constituents: []
	}
}

export default (state = { 
		portfolios: {},
		currentPortfolio: {},
		tempPortfolio: {}
	}, action) => {
		switch (action.type) {
			case "FETCH_PORTFOLIOS_FULFILED": {
				return {...state, ...localDb};
				break;
			}

			case "FETCH_PORTFOLIO": {
				var _portfolio = Object.assign({},state.portfolios[action.payload]);
				var newState = {...state, currentPortfolio: _portfolio};
				return Object.assign({}, newState);
				break;
			}
			
			case "SAVE_PORTFOLIO": {
				var _portfolios = Object.assign({},state.portfolios);
				var _currentPortfolio = Object.assign({},action.payload);
				_currentPortfolio.isEditable = false;
				var tempPortfolio = {};

				for(let key in _portfolios) {
					if(key === action.payload.name) {
						_portfolios[key] = Object.assign({},action.payload);
					}
				}
				
				var newState = {...state, portfolios: _portfolios, currentPortfolio: _currentPortfolio, tempPortfolio: tempPortfolio};

				return Object.assign({}, newState);
				break;
			}

			case "SET_PORTFOLIO_EDIT_STATE": {
				var _currentPortfolio = Object.assign({},state.currentPortfolio);
				_currentPortfolio.isEditable = true;
				var _tempPortfolio = Object.assign({}, _currentPortfolio);
				_tempPortfolio.constituents = [].concat(_currentPortfolio.constituents);
				var newState = Object.assign({}, state);
				newState.currentPortfolio = _currentPortfolio;
				newState.tempPortfolio = _tempPortfolio;
				// return  { ...state, currentPortfolio: _currentPortfolio, tempPortfolio: _tempPortfolio };
				return newState;
				break;
			}

			case "UPDATE_TEMP_PORTFOLIO": {
				var _newTempPortfolio = Object.assign({}, action.payload)
				return {...state, tempPortfolio: _newTempPortfolio};
				break;
			}

			case "SEARCH_PORTFOLIO": {
				var _portfolios = {};
				var queryString = action.payload;
				if(queryString != "") {
					for(var key in localDb.portfolios) {
						if(key.toLowerCase().indexOf(queryString.toLowerCase()) != -1) {
							_portfolios[key] = Object.assign({}, localDb.portfolios[key]);
						}
					}
					return {...state, portfolios: _portfolios};
				} else {
					return {...state, ...localDb};
				}
			}

			default: 
				return state;
		}
};