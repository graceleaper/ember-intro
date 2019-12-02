import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  // this.route('about, {path:'about-me'});
  this.route('about');
  this.route('services');
  this.route('contact');

  /*
    the 'posts' template in the 'templates' directory
    has an index.hbs file, which is the 'posts' template
    itself
  */
  this.route('posts', {path:'/posts'}, function() {
    this.route('new'); // localhost:4200/posts/new
    // get a single post -- format the route
    this.route('post', {path: ':post_id'}) // localhost:4200/posts/2
  })
  this.route('events');
});
