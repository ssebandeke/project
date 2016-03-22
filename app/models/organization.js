import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  // user: DS.belongsTo('user'),
  aauctions: DS.hasMany('aauction')
});
