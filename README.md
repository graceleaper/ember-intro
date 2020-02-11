# Creating Routes and Templates

## Installation

* `git clone <repository-url>` this repository
* `cd ember-practice`
* `npm install`

## Notes

- Create routes in 'routes.js' file in the 'app' directory
- Example of a route:

```
Router.map(function() {
  this.route('about')
})
```

Argument in 'this.route' is name of a template

- Create templates in 'templates' directory (also in 'app' directory). Template will have an .hbs extension
- The default 'application.hbs' file in the 'templates' directory is where we would normally put our header, navigation, and anything else that we want to appear throughout the app / on every single page
- We can redirect to a new template based on a particular route. Following code will go in Route.map() method:

```
  this.route('posts', function() {
    this.route('new')
  })
```
- To make templates for the above routes, go to 'templates' directory, add a 'posts' directory. And add the following files: 'index.hbs', 'new.hbs'
