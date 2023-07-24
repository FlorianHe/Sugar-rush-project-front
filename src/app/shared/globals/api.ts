const STOCK_API = {
  base_alphavantage: 'https://www.alphavantage.co/query',
};

const SUGAR_RUSH_API = {
  baseApi: "http://localhost:8080",
  baseUsers: "http://localhost:8080/users",
  baseArticles: "http://localhost:8080/articles",
  baseCategories: "http://localhost:8080/categories",
  baseComments: "http://localhost:8080/comments",
  baseProfiles: "http://localhost:8080/profiles",
  baseSugarDatas: "http://localhost:8080/sugar-datas",
}

const INFINITE_SCROLL_PARAMS = {
  limitArticles: 6,
  offsetArticles: 0,
  limitOther: 3,
  limitSide: 4
}

export { STOCK_API, SUGAR_RUSH_API, INFINITE_SCROLL_PARAMS }
