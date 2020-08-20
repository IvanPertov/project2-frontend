import { Serializer as КонтрДоговораSerializer } from
  '../mixins/regenerated/serializers/i-i-s-project2-контр-договора';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КонтрДоговораSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
