import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),

  storey: DS.attr('number'),
  bedrooms: DS.attr('number'),

  image: DS.attr(),

  description: DS.attr(),
  categories: DS.hasMany('category'),
});
