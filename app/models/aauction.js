import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  organization: DS.belongsTo('organization'),
  products: DS.hasMany('product')
});
