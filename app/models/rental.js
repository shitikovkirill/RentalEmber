import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),

  storeys: DS.attr('number'),
  bedrooms: DS.attr('number'),
  totalsquare: DS.attr('number'),
  residentialsquare: DS.attr('number'),

  image: DS.attr(),

  description: DS.attr(),

  categories: DS.hasMany('category'),
  design: DS.hasMany('design'),

  period: DS.belongsTo('period'),
  district: DS.belongsTo('district'),
});
