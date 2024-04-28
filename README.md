# Structure validator

[![documentation](https://img.shields.io/badge/Documentation-open-blue)](./Documentation.md)
[![editor](https://img.shields.io/badge/Web%20editor-open-red)](https://script.google.com/d/1qEHq1x99G4OOAWbchj3emkcBk3bgdOWvMrzqp597FxHS_8mezPm9X18F/edit?usp=sharing)
[![group](https://img.shields.io/badge/Group-open-white)](https://groups.google.com/g/javascript-structure-validator)

Validates objects for correctness.

Library identifier: `1qEHq1x99G4OOAWbchj3emkcBk3bgdOWvMrzqp597FxHS_8mezPm9X18F`

## Installation

For installation steps consult [this][libraries] article.

[libraries]: https://developers.google.com/apps-script/guides/libraries

## Pros and cons

- :green_circle: Simple and readable configuration format
- :green_circle: Fluent-style validation

## FAQ
  
| Code                                                                           | Description                                                            |
| ------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| `checkWhether(0, is.number)`                                                   | Check whether something is a number                                    |
| `checkWhether(1, is.number.greaterThan(0))`                                    | Check whether something is a number greater than zero                  |
| `checkWhether(0, is.number.inRange(0, 10))`                                    | Check whether something is a number in range `[0..10]`                 |
| `checkWhether([1], is.array.withItems(is.number))`                             | Check whether something is an array with numbers                       |
| `checkWhether([1], is.array.withItems(is.number))`                             | Check whether something is an array with numbers                       |
| `checkWhether([1], is.array.withItems(is.number).withItemCountGreaterThan(0))` | Check whether something is not empty array array with numbers          |
| `checkWhether({ x: 1 }, is.object.withRequiredProperties({ x: is.number }))`   | Check whether something is an object with existing number property `x` |

## Workflow

All code development goes inside Web Apps Script editor. Git is used to capture
code versions pulled with the help of `clasp` CLI tool.

## Wrapper libraries

Wrapper libraries are small additions to this library. They usually are not
published to GitHub and have very stable and small API.

### lisp like wrappers

Provides functions to create validators in the backward order.

> :white_check_mark: This library may be useful if you rely on IntelliSence
> heavily because it doesn't show class members from libraries.

Library identifier: `1AOZebkZKAEkdnias6W6o8W8l33gKjc0crN8s5qBReipduxoh8GTjFAwq`

```javascript
/**
 * Check whether a person:
 * - has a name which contains at least one non-space character and is longer
 *   than 3 characters
 * - has age in [0..100] range
 */
function main() {
  // "r" is a name symbol to reference this library, while "v" is used to access
  // the main library functionality

  const schema1 = r.defineRequiredPropertiesFor(r.requireObject(), {
    name: r.requireMatchFor(r.requireLengthGreaterThanFor(r.requireString(), 3), /[^ ]/),
    age: r.requireInRangeFor(r.requireInteger(), 0, 100)
  })

  const schema2 = v.isObject().withRequiredProperties({
    name: v.isString().withLengthGreaterThan(3).matching(/[^ ]/),
    age: v.isInteger().inRange(0, 100)
  })

  const person = {
    name: "Emily",
    age: 24
  }

  console.log(schema1.validate(person) === schema2.validate(person))
}
```

### short functions

Provides functions to quickly create validators with less typing.

Library identifier: `1QV-QQytWy0t5e0Y9xjuJjLE8WtKYZ9DKYpvgW7ZgODrYRUZZNxy5NEWO`

```javascript
/**
 * Check whether a value:
 * - is a boolean one
 */
function main() {
  // "r" is a name symbol to reference this library, while "v" is used to access
  // the main library functionality

  const schema1 = r.b()
  const schema2 = v.isBoolean()

  const value = true

  console.log(schema1.validate(value) === schema2.validate(value))
}
```

### PropertiesService validator

Provides functions to validate script, document, and user properties against
regular expressions in a simplified form. To negate some check add `!` at the
beginning of the property name:

Library identifier: `1B9kXHA8YJGnfwuD0NkP6VNkzcExJigKWS5_YyMjrq7EUEZzV-QA1I9L8`

```javascript
/**
 * Check whether a script property "name":
 * - has at least one non-space character
 */
function main() {
  // "r" is a name symbol to reference this library

  PropertiesService.getScriptProperties().setProperty("name", "Emily")
  r.withScriptProperties({
    name: /[^ ]/
  })
  
  console.log(r.validateScriptProperties())
}
```

| Name             | Description                                                                                                             | Identifier                                                  |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [extras][extras] | Functions for a quick validator creation. Similar to short_functions library, but intended for more complex validators. | `1qMQ1FyTCcfrT0h7XKqNxbf3-ol3g3uR3VJmKeobd-QLKunwZKsWQFHJG` |

[extras]: https://script.google.com/d/1qMQ1FyTCcfrT0h7XKqNxbf3-ol3g3uR3VJmKeobd-QLKunwZKsWQFHJG/edit?usp=sharing
