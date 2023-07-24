const FRONTEND_URL = {
  dev: 'http://localhost:4200',
};

const ROUTES = {
  imageFolder: 'assets/images/',
  globalFolder: 'assets/global/',
};

const APP_ROUTES = {
  index: '/',
  rIndex: '',
  home: '/home',
  rHome: 'home',
  articles: '/articles',
  rArticles: 'articles',
  categories: '/categories',
  rCategories: 'categories',
  category: (slug: string) => `/categories/${slug}`,
  notFound: '/404',
  rNotFound: '404',
  aboutUs: '/about-us',
  rAboutUs: 'about-us',
  detailUser: `/user`,
  rdetailUser: 'user',
  rSugarMeter: 'sugar-meter',
  sugarMeter: '/sugar-meter',
  search: '/search',
  rSearch: 'search',
  article: (id: number) => `articles/${id}`,
};

export { ROUTES, FRONTEND_URL, APP_ROUTES };
