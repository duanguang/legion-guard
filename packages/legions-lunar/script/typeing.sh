#!/usr/bin/env bash
typeScriptModules=("antd-toolkit" "egion.plugin.sdk" 
"mobx-decorator" "model" "object-hash" "schedule" "warning")
echo "-----------------开始生成TypeScript约束文件------------------------
"
for a in ${typeScriptModules[@]}
do
  echo "===$a"
done