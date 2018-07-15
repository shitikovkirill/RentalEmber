import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),

  storey: DS.attr('number'),
  bedrooms: DS.attr('number'),
  'total-square': DS.attr('number'),
  'residential-square': DS.attr('number'),

  image: DS.attr(),

  description: DS.attr(),

  categories: DS.hasMany('category'),
  design: DS.hasMany('design'),

  period: DS.belongsTo('period'),
  district: DS.belongsTo('district'),
});
