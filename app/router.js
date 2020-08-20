import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-project2-договор-l');
  this.route('i-i-s-project2-договор-e',
  { path: 'i-i-s-project2-договор-e/:id' });
  this.route('i-i-s-project2-договор-e.new',
  { path: 'i-i-s-project2-договор-e/new' });
  this.route('i-i-s-project2-з-у-l');
  this.route('i-i-s-project2-з-у-e',
  { path: 'i-i-s-project2-з-у-e/:id' });
  this.route('i-i-s-project2-з-у-e.new',
  { path: 'i-i-s-project2-з-у-e/new' });
  this.route('i-i-s-project2-контрагент-l');
  this.route('i-i-s-project2-контрагент-e',
  { path: 'i-i-s-project2-контрагент-e/:id' });
  this.route('i-i-s-project2-контрагент-e.new',
  { path: 'i-i-s-project2-контрагент-e/new' });
  this.route('i-i-s-project2-начисления-l');
  this.route('i-i-s-project2-начисления-e',
  { path: 'i-i-s-project2-начисления-e/:id' });
  this.route('i-i-s-project2-начисления-e.new',
  { path: 'i-i-s-project2-начисления-e/new' });
  this.route('i-i-s-project2-оплаты-l');
  this.route('i-i-s-project2-оплаты-e',
  { path: 'i-i-s-project2-оплаты-e/:id' });
  this.route('i-i-s-project2-оплаты-e.new',
  { path: 'i-i-s-project2-оплаты-e/new' });
});

export default Router;
