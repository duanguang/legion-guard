#!/usr/bin/env bash
typeScriptModules=("antd-toolkit" "dw.report" 
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
  rm -rf types/$a
  echo "-----------------已经生成$a d.ts文件------------------------"
done
rm -rf types/src
echo "-----------------已经生成TypeScript约束文件-----------------------
"