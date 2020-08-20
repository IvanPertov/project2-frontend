import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('контрагент', 'Контрагентs');
inflector.irregular('начисления', 'Начисленияs');
inflector.irregular('договора', 'Договораs');
inflector.irregular('договор', 'Договорs');
inflector.irregular('оплаты', 'Оплатыs');
inflector.irregular('у', 'Уs');

export default {};
