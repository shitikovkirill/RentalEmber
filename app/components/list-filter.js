import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  storey: 0,
  bedrooms: 0,

  init() {
    this._super(...arguments);
    this.get('filter')({}).then((allResults) => this.set('results', allResults.results));
  },

  getRentalQuery(){
    let data = {};
    if(this.get('storey')){
      data['storey'] = this.get('storey');
    }

    if(this.get('bedrooms')){
      data['bedrooms'] = this.get('bedrooms');
    }
    return data;
  },

  actions: {
    handleFilterEntry() {
      let data = this.getRentalQuery();
      let filterAction = this.get('filter');
      filterAction(data).then((resultsObj) => {
        if (data && resultsObj.query === data) {
          this.set('results', resultsObj.results);
        }
      });
    }
  }

});
