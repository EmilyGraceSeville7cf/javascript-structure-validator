#!/usr/bin/env fish

set file $argv[1]
set output $argv[2]

jsdoc2md $file >>$output
