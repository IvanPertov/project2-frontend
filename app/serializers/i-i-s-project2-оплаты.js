import { Serializer as ОплатыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-project2-оплаты';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОплатыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
