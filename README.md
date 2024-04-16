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
published to GitHub and have very stable and small API. There is no separate README
page documentation available for them, their possibilities are discoverable via
IntelliSence. For code examples consult their code comments in `Sample.gs` file
(click library name to open its source code and find this file).

| Name                               | Description                                          | Identifier                                                  |
| ---------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------- |
| [short functions][short_functions] | One-letter functions for a quick validator creation. | `1QV-QQytWy0t5e0Y9xjuJjLE8WtKYZ9DKYpvgW7ZgODrYRUZZNxy5NEWO` |

[short_functions]: https://script.google.com/d/1QV-QQytWy0t5e0Y9xjuJjLE8WtKYZ9DKYpvgW7ZgODrYRUZZNxy5NEWO/edit?usp=sharing
