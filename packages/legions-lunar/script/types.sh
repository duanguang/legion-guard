#!/usr/bin/env bash

echo 'copy to d.ts'
cp -R -f types/antd-toolkit/*.d.ts antd-toolkit/
cp -r -f types/legion.plugin.sdk/*.d.ts legion.plugin.sdk/
cp -r -f types/mobx-decorator/*.d.ts mobx-decorator/
cp -r -f types/model/*.d.ts model/
cp -r -f types/object-hash/*.d.ts object-hash/
cp -r -f types/schedule/*.d.ts schedule/
cp -r -f types/warning/*.d.ts warning/