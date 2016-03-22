import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveProduct(){
      const product = this.get('model');
      let self = this;
      product.save().then(function(){
        self.transitionToRoute('organization.aauction');
      });
    }
  }
});
