#!/usr/bin/env fish

function error
    echo (set_color red)$argv(set_color normal)
end

function info
    echo (set_color green)$argv(set_color normal)
end

function confirm
    set --local color '#1d87da'
    gum confirm --prompt.foreground=$color \
        --selected.foreground='#e5f6fd' \
        --selected.background=$color -- $argv
end

function spin --argument-names title
    set --local color '#1d87da'
    set --erase argv[1]
    gum spin --title.foreground=$color \
        --spinner.foreground=$color \
        --title=$title -- $argv
end

function choose
    gum choose --header="Select one of more items (press space to select or deselect):" \
        --item.foreground="#1d87da" \
        --selected.foreground="#e5f6fd" \
        --no-limit -- $argv
end

function title
    gum style --border rounded -- $argv
end

function require_dependency --argument-names executable_name package_name package_description
    type --query $executable_name || begin
        error "No '$executable_name' executable to $package_description is not found in \$PATH."
        if confirm "Do you want to install '$package_name' package which contains '$executable_name'?"
            set --erase argv[1..3]
            spin "Installing '$package_name' package..." $argv
        else
            info Installation cancelled
            exit
        end
    end
end

require_dependency jsdoc2md jsdoc-to-markdown "generate documentation" npm install --global jsdoc-to-markdown
require_dependency mdformat mdformat-gfm "format documentation" pip3 install mdformat-gfm

set output Documentation.md
set ignored_files ActionInfo_.js SupportedTypeMapping_.js SimpleValidator.js ComplexValidator.js
set other_files

for file in *.js
    contains -- $file $ignored_files || set other_files $other_files $file
end

title "Choose files to ignore besides ones ignored by default:"
set ignored_files $ignored_files (choose $other_files)

echo >$output
for file in *.js
    contains $file $ignored_files && begin
        error "$file is ignored"
        continue
    end
    spin "Generating documentation for $file..." fish --command "jsdoc2md $file >>$output"
end

spin "Formatting the documentation..." mdformat Documentation.md
