import DS from 'ember-data';
import config from 'ember-get-config';

export default DS.JSONAPIAdapter.extend({
  namespace: config.APP.namespace,
  host: config.APP.host
});
