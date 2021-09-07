#!/usr/bin/env bash
typeScriptModules=("antd-toolkit" "legion.plugin.sdk" 
"mobx-decorator" "model" "object-hash" "schedule" "warning")
echo "-----------------开始生成TypeScript约束文件------------------------
"
echo "----------------正在生成API中d.ts文件---------------------"
cp -R -f src/api/** api/
echo "----------------已经生成API中d.ts文件---------------------"
for a in ${typeScriptModules[@]}
do
  echo "-----------------正在生成$a d.ts文件------------------------"
  cp -R -f types/$a/*.d.ts $a/
  echo "-----------------已经生成$a d.ts文件------------------------"
done

echo "-----------------已经生成TypeScript约束文件-----------------------
"