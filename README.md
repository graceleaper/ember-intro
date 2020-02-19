# Controllers & Actions

## Installation

* `git clone <repository-url>` this repository
* `cd ember-practice`
* `npm install`

## Notes
- To create a helper, create a new file in the 'helper' directory. File should have the following code:
```
import Ember from 'ember'

export function getDate() {
    return new Date()
}

export default Ember.Helper.helper(getDate)
```
- Then, on 'post.hbs' template:
`<p>Created on {{get-date}}</p>`
- Notice that we're making use of the file name (get-date.js), and NOT the name of the function (getDate)