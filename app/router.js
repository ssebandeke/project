import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sign-up');
  this.route('login');

  this.route('organizations', function() {
    this.route('new');
    this.route('show');
  });
  this.route(
    'organization',
    { path: 'organizations/show/:organization_id'},
    function() {
      this.route('aauctions',function(){
        this.route('new');
      });
      this.route('aauction', {path: 'aauctions/:aauction_id'}, function() {
        this.route('products', function() {
          this.route('new');
        });
      });
  });
});

export default Router;
