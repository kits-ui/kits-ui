#!/bin/sh

set -e

pnpm i --frozen-lockfile
# todo 更新版本，暂时不加
#pnpm update:version

pnpm build

cd packages/useless-ui
npm publish
cd -

cd packages/useless-ui-theme
npm publish
cd -

cd packages/useless-ui-icon
npm publish
cd -

echo "✅ Publish completed"
