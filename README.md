# Structure validator

[![documentation](https://img.shields.io/badge/Documentation-open-blue)](./Documentation.md)
[![editor](https://img.shields.io/badge/Web%20editor-open-red)](https://script.google.com/d/1qEHq1x99G4OOAWbchj3emkcBk3bgdOWvMrzqp597FxHS_8mezPm9X18F/edit?usp=sharing)

Validates objects for correctness.

Library identifier: `1qEHq1x99G4OOAWbchj3emkcBk3bgdOWvMrzqp597FxHS_8mezPm9X18F`

## Installation

For installation steps consult [this][libraries] article.

[libraries]: https://developers.google.com/apps-script/guides/libraries

## Pros and cons

- :green_circle: Simple and readable configuration format
- :green_circle: Fluent-style validation
- :red_circle: No array validation support

## Introduction example

Let's say you want write a library to programmatically generate presentations
from JS object-based config. You want user to specify the following details
about presentation:

- its name
- text and background colors

Name should not be omitted, while colors can. But, when at least one color
component is put, all remaining ones must always be specified.

The following code shows how to implement config validation with
the requirements above:

```javascript
// This is a sample file can be run to show what library can do.
function main() {
  // Some imaginary config
  const objectToValidate = {
    general: {
      /*
        Presentation name

        Is:
        - string longer than 0 characters
        - has at least one not space character
      */
      name: "English quiz"
    },
    styles: {
      /*
        Text color

        Is:
        - object with all properties required
        - no additional properties are allowed
        - different from 'background' property
      */
      foreground: {
        red: 11,
        green: 2,
        blue: 3
      },
      /*
        Background color

        Is:
        - either:
          - object with all properties required
          - no additional properties are allowed
          - different from 'background' property
          or:
          - string longer than 0 characters
          - starts with 'https://'
          - leads to existing resource
      */
      background: { // Slide background
        red: 255,
        green: 255,
        blue: 255
      }
    }
  }

  const schema = isObject().withRequiredProperties({
    general: isObject().withRequiredProperties({
      name: isNotEmptyString().matching(/[^ ]/)
    }).andNothingElse()
  }).withOptionalProperties({
    styles: isObject().withOptionalProperties({
      foreground: isObject().withRequiredProperties({
        red: isIn(0, 255),
        green: isIn(0, 255),
        blue: isIn(0, 255)
      }).andNothingElse(),
      background: isOneOf(
        isObject().with({
          red: isIn(0, 255),
          green: isIn(0, 255),
          blue: isIn(0, 255)
        }).andNothingElse(),
        isNotEmptyString().matching(/^https:\/\/./).where(url => [
          (() => {
            try {
              return UrlFetchApp.fetch(url, {
                muteHttpExceptions: true
              }).getResponseCode() === 200
            } catch {
              return false
            }
          })()
        ])
      )
    }).where(properties => [
      (() => {
        let background = properties.background
        let foreground = properties.foreground

        return background.red ? background.red !== foreground.red || background.green !== foreground.green || background.blue !== foreground.blue : true
      })()
    ]).andNothingElse()
  }).andNothingElse()

  throwOnFailure(objectToValidate, schema) // Throw error on validation failure
}
```

## Workflow

All code development goes inside Web Apps Script editor. Git is used to capture
code versions pulled with the help of `clasp` CLI tool.
