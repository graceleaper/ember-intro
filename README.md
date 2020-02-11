# Linking Routes & Layouts

## Installation

* `git clone <repository-url>` this repository
* `cd ember-practice`
* `npm install`

## Notes

- In 'application.hbs' template in the 'templates' directory, set up navigation like:
```
<li>{{#link-to 'index'}}Home{{/link-to}}</li>
<li>{{#link-to 'about'}}About{{/link-to}}</li>
```
- Above, route names come after the first #link-to

- When we open up inspector on our browser, we can see the elements with class names on the <li> elements we created above. So we can begin using CSS! See 'styles' directory's 'app.css' file

- To attach a model to a route: in 'routes' directory, create something like 'services.js' file. In the file, we'll create a model that will contain an array of items in this case. Then, the /services rout can make use of this array

- We can make use of this model in the 'services.hbs' template

- We can use a 'generator' to generate/create a new route:
`ember g route name-of-route`

- Using a generator will create the following:
* name-of-route.js in 'routes' directory
* name-of-route.hbs in 'templates' directory
* 'this.route('name-of-route')' in the main route.js file