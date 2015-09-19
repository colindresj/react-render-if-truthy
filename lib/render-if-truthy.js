import isTruthy from './is-truthy';

/**
 * A JSX-specific util for rendering a component if some data value is truthy.
 * An unlimited number of arguments may be passed, with the last argument
 * always being a callback function. The supplied callback will be invoked with
 * arguments in the same order as passed, replacing non-truthy values with
 * `null`, and mainting truthy values.
 *
 * The value returned in the callback will be returned, unless all the passed
 * arguments are falsy, in which case `null` will be returned.
 *
 * @function renderIfTruthy
 * @param {...*} data The data value(s) to check truthiness against
 * @param {componentCallback} cb
 * @return {* | Null}
 *
 * @callback componentCallback
 * @param {...*} data The original data value
 *
 * @example
 * RIT('truthy!', val => <div>{val}</div>); // => <div>truthy!</div>
 * RIT(undefined, val => <div>{val}</div>); // => null
 */
export default function renderIfTruthy(...args) {
  const cb = args.pop();
  const results = args.map(val => isTruthy(val) ? val : null);

  return results.filter(isTruthy).length ? cb(...results) : null;
}
