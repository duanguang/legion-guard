#!/usr/bin/env bash
MYDIR=`pwd`
echo "$MYDIR"
rm -r CHANGELOG.md
cmd='conventional-changelog --commit-path='$MYDIR' -p angular -i CHANGELOG.md -s -r 0'
eval "${cmd}" &>/dev/null