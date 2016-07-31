export function fetchPortfolios() {
	return {
		type: "FETCH_PORTFOLIOS_FULFILED",
		payload: {
	    "portfolio_1":{
	    	key: 1,
	      name: "portfolio_1",
	      image: "https://www.smallcase.com/images/smallcases/130/SCMO_0006.png",
	      constituents: [ { symbol: "INFY", participation: '10%' }, { symbol: "IN", participation: '20%' }, { symbol: "Ik", participation: '30%' }]
	    },
	    "portfolio_2":{
	    	key: 2,
	      name: "portfolio_2",
	      image: "https://www.smallcase.com/images/smallcases/187/SCNM_0007.png",
	      constituents: [ { symbol: "WIP", participation: '10%' }]
	    }
		}
	}
}

export function fetchPortfolio(portfolioName) {
	return {
		type: "FETCH_PORTFOLIO",
		payload: portfolioName
	}
}

export function savePortfolio(portfolio) {
	return {
		type: "SAVE_PORTFOLIO",
		payload: portfolio
	}
}

export function setPortfolioEditState() {
	return {
		type: "SET_PORTFOLIO_EDIT_STATE"
	}
}

export function updateTempPorfolio(payload) {
	return {
		type: "UPDATE_TEMP_PORTFOLIO",
		payload: payload
	}
}

export function searchPortfolio(queryString) {
	return {
		type: "SEARCH_PORTFOLIO",
		payload: queryString
	}
}