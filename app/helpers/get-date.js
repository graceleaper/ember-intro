import Ember from 'ember'

export function getDate() {
    return new Date()
}

export default Ember.Helper.helper(getDate)