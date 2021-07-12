#!/usr/bin/env bash

echo 'copy to d.ts'
cp -R -f types/browser/*.d.ts browser/
cp -r -f types/cookie/*.d.ts cookie/
cp -r -f types/debounce/*.d.ts debounce/
cp -r -f types/dom/*.d.ts dom/
cp -r -f types/download/*.d.ts download/
cp -r -f types/format.date/*.d.ts format.date/
cp -r -f types/format.string/*.d.ts format.string/
cp -r -f types/invariant/*.d.ts invariant/
cp -r -f types/object.utils/*.d.ts object.utils/
cp -r -f types/regex/*.d.ts regex/
cp -r -f types/state.machine/*.d.ts state.machine/
cp -r -f types/storage/*.d.ts storage/
cp -r -f types/type.validation/*.d.ts type.validation/