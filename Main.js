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
