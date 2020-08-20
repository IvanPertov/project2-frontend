import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  primarykey: DS.attr('guid'),
  тип: DS.attr('string'),
  наименование: DS.attr('string'),
  иНН: DS.attr('string'),
  оГРН: DS.attr('string')
});

export let ValidationRules = {
  primarykey: {
    descriptionKey: 'models.i-i-s-project2-контрагент.validations.primarykey.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  тип: {
    descriptionKey: 'models.i-i-s-project2-контрагент.validations.тип.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-project2-контрагент.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  иНН: {
    descriptionKey: 'models.i-i-s-project2-контрагент.validations.иНН.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  оГРН: {
    descriptionKey: 'models.i-i-s-project2-контрагент.validations.оГРН.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтрагентE', 'i-i-s-project2-контрагент', {
    primarykey: attr('Primarykey', { index: 0 }),
    тип: attr('Тип', { index: 1 }),
    наименование: attr('Наименование', { index: 2 }),
    иНН: attr('ИНН', { index: 3 }),
    оГРН: attr('ОГРН', { index: 4 })
  });

  modelClass.defineProjection('КонтрагентL', 'i-i-s-project2-контрагент', {
    primarykey: attr('Primarykey', { index: 0 }),
    тип: attr('Тип', { index: 1 }),
    наименование: attr('Наименование', { index: 2 }),
    иНН: attr('ИНН', { index: 3 }),
    оГРН: attr('ОГРН', { index: 4 })
  });
};
