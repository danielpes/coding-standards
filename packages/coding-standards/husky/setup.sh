#!/bin/bash
# Author: Daniel de Paula
BASEDIR=$(dirname "$0");
npx husky install $1;
for HOOK_FILE in $BASEDIR/hooks/*; do
  HOOK_NAME=$(basename "$HOOK_FILE");
  cat $HOOK_FILE | xargs npx husky set $1/$HOOK_NAME;
done
