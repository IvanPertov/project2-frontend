import { Serializer as НачисленияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-project2-начисления';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(НачисленияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
