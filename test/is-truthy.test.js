import test from 'tape';
import isTruthy from '../lib/is-truthy';

test('isTruthy', ({ test }) => {
  test('correctly determines truthiness of booleans', t => {
    t.plan(2);

    t.ok(isTruthy(true));
    t.notOk(isTruthy(false));
  });

  test('correctly determines truthiness of numbers', t => {
    t.plan(7);

    t.ok(isTruthy(123));
    t.ok(isTruthy(12.3));
    t.ok(isTruthy(Infinity));
    t.ok(isTruthy(-Infinity));
    t.notOk(isTruthy(0));
    t.notOk(isTruthy(-0));
    t.notOk(isTruthy(NaN));
  });

  test('correctly determines truthiness of strings', t => {
    t.plan(3);

    t.ok(isTruthy('foo'));
    t.ok(isTruthy('false'));
    t.notOk(isTruthy(''));
  });

  test('correctly determines truthiness of null', t => {
    t.plan(1);

    t.notOk(isTruthy(null));
  });

  test('correctly determines truthiness of undefined', t => {
    t.plan(2);

    t.notOk(isTruthy(undefined));
    t.notOk(isTruthy(void 0));
  });

  test('correctly determines truthiness of objects', t => {
    t.plan(4);

    t.ok(isTruthy([]));
    t.ok(isTruthy({}));
    t.ok(isTruthy(() => {}));
    t.ok(new Object());
  });
});
