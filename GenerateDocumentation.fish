#!/usr/bin/env fish

type --query jsdoc2md || begin
    echo (set_color red)No npm package found to generate documentation, installing...(set_color normal)
    npm install --global jsdoc-to-markdown
end

set output Documentation.md

echo >$output
for file in *.js
    echo (set_color green)Generating documentation for $file...(set_color normal)
    jsdoc2md $file >>$output
end
