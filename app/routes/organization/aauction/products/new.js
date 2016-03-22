import Ember from 'ember';

export default Ember.Route.extend({
  sessionUser: Ember.inject.service('session-user'),
  model(){
    // const aauction = this.modelFor('aauction');
    let self = this;
    return this.get('sessionUser.user').then(function(user){
      return self.get('store').createRecord('product',{
        aauction: self.modelFor('organization.aauction'),
        seller: user
      });
    });
  }
});
