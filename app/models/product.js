import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  seller: DS.belongsTo('user'),
  aauction: DS.belongsTo('aauction')

});
