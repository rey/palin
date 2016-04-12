#!/bin/bash
#
# add-lsuielement.sh
# Script to as `LSUIElement` to
# `~/Sites/palin/_build/Palin-darwin-x64/Palin.app/Contents/Info.plist`

# `<dict>`
MATCH="\<dict\>"

# `<key>LSUIElement</key><string>1</string>`
INSERT="\<key\>LSUIElement\<\/key\>\<string\>1\<\/string\>"

# Jump to the `_build` directory
cd ~/Sites/palin/_build/Palin-darwin-x64/Palin.app/Contents

# Do the search/replace
sed -i.backup "s/${MATCH}/${MATCH}${INSERT}/" Info.plist

# Reformat XML so it's nice and tidy(ish) into `Info.plist.new`
tidy -xml -indent -quiet Info.plist > Info.plist.new

# Remove original `Info.plist` and backup `Info.plist.backup`
rm Info.plist Info.plist.backup

# Rename `Info.plist.new` to `Info.plist`
mv Info.plist.new Info.plist
