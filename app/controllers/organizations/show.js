import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    // goToAuctions(){
    //   let self = this;
    //   self.transitionToRoute('organization');
    // }
  }
});
