import test from 'tape';
import RIT from '../lib/render-if-truthy';

test('renderIfTruthy', ({ test }) => {
  test('a single truthy argument', t => {
    t.plan(1);

    RIT('foo', foo => t.equal(foo, 'foo'));
  });

  test('a single falsy argument', t => {
    t.plan(1);

    t.equal(RIT('', () => {}), null);
  });

  test('multiple truthy arguments', t => {
    t.plan(6);

    RIT('foo', 'bar', (foo, bar) => {
      t.equal(foo, 'foo');
      t.equal(bar, 'bar');
    });

    RIT('foo', 2, (foo, num) => {
      t.equal(foo, 'foo');
      t.equal(num, 2);
    });

    RIT('foo', { bar: 'bar' }, (foo, { bar }) => {
      t.equal(foo, 'foo');
      t.equal(bar, 'bar');
    });
  });

  test('multiple falsy arguments', t => {
    t.plan(1);

    t.equal(RIT('', undefined, () => {}), null);
  });

  test('mixed truthy and falsy values', t => {
    t.plan(2);

    RIT('', 'foo', (emptyString, foo) => {
      t.equal(emptyString, null);
      t.equal(foo, 'foo')
    });
  });

  test('the last argument must be a callback', t => {
    t.plan(1);

    t.throws(() => RIT('foo', 'bar'));
  });
});
