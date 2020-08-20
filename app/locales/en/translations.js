import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        project2: {
          caption: 'project2',
          title: 'project2',
          'i-i-s-project2-начисления-l': {
            caption: 'i-i-s-project2-начисления-l',
            title: 'i-i-s-project2-начисления-l'
          },
          'i-i-s-project2-договор-l': {
            caption: 'i-i-s-project2-договор-l',
            title: 'i-i-s-project2-договор-l'
          },
          'i-i-s-project2-контрагент-l': {
            caption: 'i-i-s-project2-контрагент-l',
            title: 'i-i-s-project2-контрагент-l'
          },
          'i-i-s-project2-оплаты-l': {
            caption: 'i-i-s-project2-оплаты-l',
            title: 'i-i-s-project2-оплаты-l'
          },
          'i-i-s-project2-з-у-l': {
            caption: 'i-i-s-project2-з-у-l',
            title: 'i-i-s-project2-з-у-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
