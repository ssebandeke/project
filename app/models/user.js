import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  emailAddress: DS.attr(),
  password: DS.attr(),
  physicalAddress: DS.attr(),
  phoneNumber: DS.attr()
  // organization: DS.hasMany('organization')
});
