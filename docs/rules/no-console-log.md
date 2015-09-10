# no-console-log

An eslint plugin to warn on usage of `console.log`, unlike the built-in rule, this allows other `console` methods.

## Rule Details

This rule warns when it sees `console.log` only. Other variants, like `console.warn` are allowed, as it's assumed you've left them there on purpose. If you'd like to disable all console methods use the built-in rule `no-console`.

The following patterns are considered warnings:

```js

console.log('hi')

```

The following patterns are not warnings:

```js

console.time('timer')
console.timeEnd('timer')
console.warn('oops')
console.error('kittens!')

```

## When Not To Use It

If you want to disable all `console` use to enforce a custom logging option.

## Further Reading

