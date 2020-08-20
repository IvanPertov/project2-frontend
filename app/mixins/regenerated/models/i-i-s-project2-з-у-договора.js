import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  primarykey: DS.attr('guid'),
  зУ: DS.belongsTo('i-i-s-project2-з-у', { inverse: null, async: false }),
  договор: DS.belongsTo('i-i-s-project2-договор', { inverse: 'зУДоговора', async: false })
});

export let ValidationRules = {
  primarykey: {
    descriptionKey: 'models.i-i-s-project2-з-у-договора.validations.primarykey.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  зУ: {
    descriptionKey: 'models.i-i-s-project2-з-у-договора.validations.зУ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  договор: {
    descriptionKey: 'models.i-i-s-project2-з-у-договора.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗУДоговораE', 'i-i-s-project2-з-у-договора', {
    
  });

  modelClass.defineProjection('ЗУДоговораL', 'i-i-s-project2-з-у-договора', {
    
  });
};
