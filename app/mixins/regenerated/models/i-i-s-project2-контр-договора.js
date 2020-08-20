import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  primarykey: DS.attr('guid'),
  контрагент: DS.belongsTo('i-i-s-project2-контрагент', { inverse: null, async: false }),
  договор: DS.belongsTo('i-i-s-project2-договор', { inverse: 'контрДоговора', async: false })
});

export let ValidationRules = {
  primarykey: {
    descriptionKey: 'models.i-i-s-project2-контр-договора.validations.primarykey.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контрагент: {
    descriptionKey: 'models.i-i-s-project2-контр-договора.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  договор: {
    descriptionKey: 'models.i-i-s-project2-контр-договора.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтрДоговораE', 'i-i-s-project2-контр-договора', {
    primarykey: attr('Primarykey', { index: 0 }),
    контрагент: belongsTo('i-i-s-project2-контрагент', 'Контрагент', {
      тип: attr('Тип', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'тип' })
  });
};
