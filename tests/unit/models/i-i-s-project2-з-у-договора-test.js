import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-project2-з-у-договора', 'Unit | Model | i-i-s-project2-з-у-договора', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-project2-договор',
    'model:i-i-s-project2-з-у-договора',
    'model:i-i-s-project2-з-у',
    'model:i-i-s-project2-контр-договора',
    'model:i-i-s-project2-контрагент',
    'model:i-i-s-project2-начисления',
    'model:i-i-s-project2-оплаты',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
