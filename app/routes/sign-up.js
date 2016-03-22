// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   model(){
//     return this.get('store').createRecord('user');
//   }
// });
import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let newUser = this.get('store').peekAll('user').find(function(user){
      return user.get('id') == null;
    });
    if (newUser){
      return newUser;
    }
    else{
      return this.get('store').createRecord('user');
    }

  }
});
