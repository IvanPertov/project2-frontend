import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';

import {
  defineProjections,
  ValidationRules,
  Model as КонтрДоговораMixin
} from '../mixins/regenerated/models/i-i-s-project2-контр-договора';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, КонтрДоговораMixin, Validations, {
});

defineProjections(Model);

export default Model;
