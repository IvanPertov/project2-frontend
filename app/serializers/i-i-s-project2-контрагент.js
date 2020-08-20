import { Serializer as КонтрагентSerializer } from
  '../mixins/regenerated/serializers/i-i-s-project2-контрагент';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КонтрагентSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
