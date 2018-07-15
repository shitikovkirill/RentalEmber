import Component from '@ember/component';

export default Component.extend({
  classNames: ['list-filter'],
  storey: 0,

  init() {
    this._super(...arguments);
    this.get('filter')({}).then((allResults) => this.set('results', allResults.results));
  },

  actions: {
    handleFilterEntry() {
      let data = {};
      if(this.get('storey')){
        data['storey'] = this.get('storey');
      }

      let filterAction = this.get('filter');
      filterAction(data).then((resultsObj) => {
        if (data && resultsObj.query === data) {
          this.set('results', resultsObj.results);
        }
      });
    }
  }

});
