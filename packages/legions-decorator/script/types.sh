#!/usr/bin/env bash

echo 'copy to d.ts'
cp -R -f types/enumerate/*.d.ts enumerate/
cp -r -f types/async.validator/*.d.ts async.validator/
cp -r -f types/urlParams/*.d.ts urlParams/