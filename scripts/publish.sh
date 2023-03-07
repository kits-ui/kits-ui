#!/bin/sh

set -e

pnpm i --frozen-lockfile
# todo 更新版本，暂时不加
#pnpm update:version

pnpm build

cd packages/kitsui
npm publish
cd -

cd packages/kitsui-theme
npm publish
cd -

cd packages/kitsui-icon
npm publish
cd -

echo "✅ Publish completed"
