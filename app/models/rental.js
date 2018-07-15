import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  storey: DS.attr('number'),
  owner: DS.attr(),
  city: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  description: DS.attr(),
  categories: DS.hasMany('category'),
});
