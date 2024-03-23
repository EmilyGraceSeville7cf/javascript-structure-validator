#!/usr/bin/env fish

set output Documentation.md

echo >$output
for file in *.js
    jsdoc2md $file >>$output
end
