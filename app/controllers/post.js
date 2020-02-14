import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        sayHello: function() {
            alert('Hello')
        },
        toggleBody: function() {
            this.toggleProperty('isShowingBody')
        },
        submitAction: function() {
            alert(`${this.get('name')} says: ${this.get('comment')}`)
        }
    },
    title: 'My first blog post',
    body: 'This is my first blog post, and I am exited to share it with you all!',
    // prevent properties from being changed with Object.freeze()
    authors: Object.freeze(['William', 'Robert', 'Michelle']),
    comments: Object.freeze([
        {
            name: 'Mike Smith',
            comment: 'That is cool!'
        },
        {
            name: 'Grace Lee',
            comment: 'Inspiring!'
        },
        {
            name: 'Will Jones',
            comment: 'good job :)'
        }
    ])
});
