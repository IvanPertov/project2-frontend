import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-project2-з-у-договора', 'Unit | Serializer | i-i-s-project2-з-у-договора', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-project2-з-у-договора',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
