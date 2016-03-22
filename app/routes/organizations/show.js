import Ember from 'ember';

export default Ember.Route.extend({
  model() {
        let organization = this.get('store').findAll('organization');

        return organization;
      }
});
