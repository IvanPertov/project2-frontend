import { Serializer as ЗУДоговораSerializer } from
  '../mixins/regenerated/serializers/i-i-s-project2-з-у-договора';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗУДоговораSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
