import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about')
  /*
    for above line, we can also have: this.route('about', {path: 'about'})
    since the path name and template name are the same
  */
  this.route('services')
  this.route('contact')

  this.route('posts', function() {
    this.route('new')
    this.route('post', {path: 'post_id'})
  })
  
  this.route('events');
});
