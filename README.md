# Controllers & Data Binding

## Installation

* `git clone <repository-url>` this repository
* `cd ember-practice`
* `npm install`

## Notes

- Create a controller:
`ember g controller post`

- Create a route and template:
`ember g route post`

- In the post controller, have the following:
`title: 'My first blog post'`

- Then, in the 'post' template, we can access {{title}} dynamically. Essentially, the controller is an object with data