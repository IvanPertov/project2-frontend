import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  primarykey: DS.attr('guid'),
  дата: DS.attr('date'),
  сумма: DS.attr('decimal'),
  договор: DS.belongsTo('i-i-s-project2-договор', { inverse: null, async: false })
});

export let ValidationRules = {
  primarykey: {
    descriptionKey: 'models.i-i-s-project2-оплаты.validations.primarykey.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-project2-оплаты.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-project2-оплаты.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  договор: {
    descriptionKey: 'models.i-i-s-project2-оплаты.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОплатыE', 'i-i-s-project2-оплаты', {
    
  });

  modelClass.defineProjection('ОплатыL', 'i-i-s-project2-оплаты', {
    
  });
};
