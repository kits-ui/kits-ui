#!/bin/sh

set -e

pnpm i --frozen-lockfile
# todo 更新版本，暂时不加
#pnpm update:version

pnpm build

cd packages/kitui
npm publish
cd -

cd packages/kitui-theme
npm publish
cd -

cd packages/kitui-icon
npm publish
cd -

echo "✅ Publish completed"
