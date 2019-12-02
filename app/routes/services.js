import Ember from '@ember/routing/route'

// model hook, which will be used in services.hbs (services template)
export default Ember.extend({
    model() {
        return ['PC Repair', 'Network Diagnostics', 'Home Audio Installations']
    }
});