function ArticleConfig($stateProvider) {
  'ngInject';

  $stateProvider
  .state('app.article', {
    url: '/article',
    controller: 'ArticleCtrl as article',
    templateUrl: 'article/article.html',
    title: 'Article'
  });

};

export default ArticleConfig;
