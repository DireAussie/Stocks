import { httpGet, httpPost, getApiUrl } from './api.js'

export class PortfolioApi
{
    addPortfolio(portfolio) {
        return httpPost(`/api/Portfolio`, portfolio);
    }

    addHolding(holding) {
        return httpPost(`/api/Holding`, holding);
    }

    getPortfolios() {
        return httpGet(`/api/Portfolio/Portfolios`);
    }

    getHoldings() {
        return httpGet(`/api/Holding/Holdings`);
    }

    getHoldingsUrl() {
        return getApiUrl() + `/api/Holding/Holdings`;
    }

    getPortfoliosUrl() {
        return getApiUrl() + `/api/Portfolio/Portfolios`;
    }    
}
