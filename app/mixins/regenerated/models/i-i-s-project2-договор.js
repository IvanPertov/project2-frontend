import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  primarykey: DS.attr('guid'),
  идентификатор: DS.attr('number'),
  датаНачала: DS.attr('date'),
  датаОкончания: DS.attr('date'),
  состояние: DS.attr('string'),
  зУДоговора: DS.hasMany('i-i-s-project2-з-у-договора', { inverse: 'договор', async: false }),
  контрДоговора: DS.hasMany('i-i-s-project2-контр-договора', { inverse: 'договор', async: false })
});

export let ValidationRules = {
  primarykey: {
    descriptionKey: 'models.i-i-s-project2-договор.validations.primarykey.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  идентификатор: {
    descriptionKey: 'models.i-i-s-project2-договор.validations.идентификатор.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  датаНачала: {
    descriptionKey: 'models.i-i-s-project2-договор.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-project2-договор.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-project2-договор.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  зУДоговора: {
    descriptionKey: 'models.i-i-s-project2-договор.validations.зУДоговора.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  контрДоговора: {
    descriptionKey: 'models.i-i-s-project2-договор.validations.контрДоговора.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДоговорE', 'i-i-s-project2-договор', {
    
  });

  modelClass.defineProjection('ДоговорL', 'i-i-s-project2-договор', {
    
  });
};
