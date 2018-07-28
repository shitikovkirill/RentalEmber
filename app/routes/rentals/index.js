import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash ({
      category: this.store.findAll('category'),
      design: this.store.findAll('design'),
      district: this.store.findAll('district'),
      period: this.store.findAll('period'),
    });
  },
});
