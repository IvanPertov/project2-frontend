import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  primarykey: DS.attr('guid'),
  период: DS.attr('string'),
  сумма: DS.attr('decimal'),
  договор: DS.belongsTo('i-i-s-project2-договор', { inverse: null, async: false })
});

export let ValidationRules = {
  primarykey: {
    descriptionKey: 'models.i-i-s-project2-начисления.validations.primarykey.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  период: {
    descriptionKey: 'models.i-i-s-project2-начисления.validations.период.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-project2-начисления.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  договор: {
    descriptionKey: 'models.i-i-s-project2-начисления.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НачисленияE', 'i-i-s-project2-начисления', {
    
  });

  modelClass.defineProjection('НачисленияL', 'i-i-s-project2-начисления', {
    
  });
};
