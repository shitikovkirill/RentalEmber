import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  storey: 0,
  bedrooms: 0,
  total_square: [0,10],
  residential_square: [0,10],

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

    if(this.get('total_square.0')){
      data['min_total_square'] = this.get('total_square.0');
    }

    if(this.get('total_square.1') && this.get('total_square.1') < 10){
      data['max_total_square'] = this.get('total_square.1');
    }

    if(this.get('residential_square.0')){
      data['min_residential_square'] = this.get('residential_square.0');
    }

    if(this.get('residential_square.1') && this.get('residential_square.1') < 10){
      data['max_residential_square'] = this.get('residential_square.1');
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
