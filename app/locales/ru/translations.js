import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISproject2ДоговорLForm from './forms/i-i-s-project2-договор-l';
import IISproject2ЗУLForm from './forms/i-i-s-project2-з-у-l';
import IISproject2КонтрагентLForm from './forms/i-i-s-project2-контрагент-l';
import IISproject2НачисленияLForm from './forms/i-i-s-project2-начисления-l';
import IISproject2ОплатыLForm from './forms/i-i-s-project2-оплаты-l';
import IISproject2ДоговорEForm from './forms/i-i-s-project2-договор-e';
import IISproject2ЗУEForm from './forms/i-i-s-project2-з-у-e';
import IISproject2КонтрагентEForm from './forms/i-i-s-project2-контрагент-e';
import IISproject2НачисленияEForm from './forms/i-i-s-project2-начисления-e';
import IISproject2ОплатыEForm from './forms/i-i-s-project2-оплаты-e';
import IISproject2ДоговорModel from './models/i-i-s-project2-договор';
import IISproject2ЗУДоговораModel from './models/i-i-s-project2-з-у-договора';
import IISproject2ЗУModel from './models/i-i-s-project2-з-у';
import IISproject2КонтрДоговораModel from './models/i-i-s-project2-контр-договора';
import IISproject2КонтрагентModel from './models/i-i-s-project2-контрагент';
import IISproject2НачисленияModel from './models/i-i-s-project2-начисления';
import IISproject2ОплатыModel from './models/i-i-s-project2-оплаты';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-project2-договор': IISproject2ДоговорModel,
    'i-i-s-project2-з-у-договора': IISproject2ЗУДоговораModel,
    'i-i-s-project2-з-у': IISproject2ЗУModel,
    'i-i-s-project2-контр-договора': IISproject2КонтрДоговораModel,
    'i-i-s-project2-контрагент': IISproject2КонтрагентModel,
    'i-i-s-project2-начисления': IISproject2НачисленияModel,
    'i-i-s-project2-оплаты': IISproject2ОплатыModel
  },

  'application-name': 'Project2',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Project2',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Project2',
          title: 'Project2'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        project2: {
          caption: 'project2',
          title: 'project2',
          'i-i-s-project2-начисления-l': {
            caption: 'Начисления',
            title: ''
          },
          'i-i-s-project2-договор-l': {
            caption: 'Договор',
            title: ''
          },
          'i-i-s-project2-контрагент-l': {
            caption: 'Контрагент',
            title: ''
          },
          'i-i-s-project2-оплаты-l': {
            caption: 'Оплаты',
            title: ''
          },
          'i-i-s-project2-з-у-l': {
            caption: 'ЗУ',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-project2-договор-l': IISproject2ДоговорLForm,
    'i-i-s-project2-з-у-l': IISproject2ЗУLForm,
    'i-i-s-project2-контрагент-l': IISproject2КонтрагентLForm,
    'i-i-s-project2-начисления-l': IISproject2НачисленияLForm,
    'i-i-s-project2-оплаты-l': IISproject2ОплатыLForm,
    'i-i-s-project2-договор-e': IISproject2ДоговорEForm,
    'i-i-s-project2-з-у-e': IISproject2ЗУEForm,
    'i-i-s-project2-контрагент-e': IISproject2КонтрагентEForm,
    'i-i-s-project2-начисления-e': IISproject2НачисленияEForm,
    'i-i-s-project2-оплаты-e': IISproject2ОплатыEForm
  },

});

export default translations;
