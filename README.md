# eslint-plugin-no-void-return-type

## What is this?

This is a rule that disallows void return types on unexported functions. For example:

```ts
const myMap = new Map();

// Bad
function foo(): void {}

// Good
function foo() {}
```

This is useful in combination with the recommended [explicit-module-boundary-types](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md) rule, because when you convert an exported function to an unexported function, you often forget to remove the superfluous return type annotation.

<br />

## How do I use it?

* `npm install --save-dev eslint-plugin-no-void-return-type`
* Add  `"plugin:no-void-return-type/recommended"` to the `extends` section of your `.eslintrc.js` file.

<br />

## What rules does this plugin provide?

It only provides one rule: `"no-void-return-type/no-void-return-type"`

<br />
