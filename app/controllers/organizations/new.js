import Ember from 'ember';

export default Ember.Controller.extend({session: Ember.inject.service('session'),
  actions: {
    save(){
      let organization = this.get('model');
      let self = this;
      let onSuccess = function(){
          self.transitionToRoute('index');
      };
      let onFailure = function(){
          console.log('there were erors');
      };
      organization.save().then(onSuccess,onFailure);
    }
  }
});
