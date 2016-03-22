import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveAuction(){
      const aauction = this.get('model');
      let self = this;
      aauction.save().then(function(){
        self.transitionToRoute('organization');
      });
    }
  }
});
