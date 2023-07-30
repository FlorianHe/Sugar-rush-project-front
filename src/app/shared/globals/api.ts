const STOCK_API = {
  base_alphavantage: 'https://www.alphavantage.co/query',
};

const API_URL = "http://api.sugarrush.helaine.eu";

const SUGAR_RUSH_API = {
  baseApi: API_URL,
  baseUsers: API_URL+"/users",
  baseArticles: API_URL+"/articles",
  baseCategories: API_URL+"/categories",
  baseComments: API_URL+"/comments",
  baseProfiles: API_URL+"/profiles",
  baseSugarDatas: API_URL+"/sugar-datas",
}

const INFINITE_SCROLL_PARAMS = {
  limitArticles: 6,
  offsetArticles: 0,
  limitOther: 3,
  limitSide: 4
}

export { STOCK_API, SUGAR_RUSH_API, INFINITE_SCROLL_PARAMS }
