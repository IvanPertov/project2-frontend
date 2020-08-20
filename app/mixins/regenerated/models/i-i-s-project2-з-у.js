import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  primarykey: DS.attr('guid'),
  кадНомер: DS.attr('string'),
  адрес: DS.attr('string'),
  разрИсп: DS.attr('string')
});

export let ValidationRules = {
  primarykey: {
    descriptionKey: 'models.i-i-s-project2-з-у.validations.primarykey.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кадНомер: {
    descriptionKey: 'models.i-i-s-project2-з-у.validations.кадНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  адрес: {
    descriptionKey: 'models.i-i-s-project2-з-у.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  разрИсп: {
    descriptionKey: 'models.i-i-s-project2-з-у.validations.разрИсп.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗемельныйУчастокE', 'i-i-s-project2-з-у', {
    primarykey: attr('Primarykey', { index: 0 })
  });

  modelClass.defineProjection('ЗемельныйУчастокL', 'i-i-s-project2-з-у', {
    primarykey: attr('Primarykey', { index: 0 })
  });

  modelClass.defineProjection('ЗУE', 'i-i-s-project2-з-у', {
    primarykey: attr('Primarykey', { index: 0 }),
    кадНомер: attr('Кад номер', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    разрИсп: attr('Разр исп', { index: 3 })
  });

  modelClass.defineProjection('ЗУL', 'i-i-s-project2-з-у', {
    primarykey: attr('Primarykey', { index: 0 }),
    кадНомер: attr('Кад номер', { index: 1 }),
    адрес: attr('Адрес', { index: 2 }),
    разрИсп: attr('Разр исп', { index: 3 })
  });
};
