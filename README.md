# Controllers & Actions

## Installation

* `git clone <repository-url>` this repository
* `cd ember-practice`
* `npm install`

## Notes
- To add an 'action' (aka 'event'), just add to the controller a property called 'actions'
```
actions: {
  sayHello: function() {
    alert('Hello')
  }
}
```
- Then, on our 'post' template, we can make use of the action like so:
`<button {{action 'sayHello'}}>Say Hello</button>`
- Notice above that the name of the action is in quotes
- In the controller's actions, we can also add another property to toggle certain elements of of our page:
```
toggleBody: function() {
  this.toggleProperty('isShowingBody')
}
```
- Above, 'toggleProperty' is a method available to us from Ember
- Then in my post template, I can toggle the display of a certain element:
```
<button {{action 'toggleBody'}}>About this blog post</button>

{{#if isShowingBody}}
  <p>{{body}}</p>
{{/if}}
```
- Let's say we have the following form on our 'post' template:
```
<form {{action 'submitAction' on='submit'}}>
    <p>
        Name: {{input value=name}}
    </p>
    <p>
        Comment: {{textarea value=comment}}
    </p>
    <button type="submit">Submit</button>
</form>
```
- On our controller's actions, we can have:
```
submitAction: function() {
  alert(`${this.get('name')} says: ${this.get('comment')}`)
}
```