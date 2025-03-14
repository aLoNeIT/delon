set -e

cd $(dirname $0)/../..

DEPENDENCIES=$(node -p "
  const vs = require('./package.json').dependencies;
  const dvs = require('./package.json').devDependencies;
  [
    'extend',
    'isutf8',
    'file-saver',
    'jszip',
    'xlsx',
    'plyr',
    'pdfjs-dist',
    'mockjs',
    '@types/mockjs',
    'ajv',
    'ajv-formats',
    'screenfull',
    'stylelint-config-prettier',
    'stylelint-config-rational-order',
    'stylelint-config-standard',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-order',
    'stylelint',
    '@antv/data-set',
    '@antv/g2',
    'echarts',
    'ng-zorro-antd',
    'ngx-tinymce',
    'ngx-countdown',
    'ng-alain-sts',
    'ng-alain-plugin-theme',
    'source-map-explorer',
    '@angular/language-service',
    '@angular-eslint/builder',
    '@angular-eslint/eslint-plugin',
    '@angular-eslint/eslint-plugin-template',
    '@angular-eslint/schematics',
    '@angular-eslint/template-parser',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'eslint',
    'eslint-config-prettier',
    'eslint-plugin-import',
    'eslint-plugin-jsdoc',
    'eslint-plugin-prefer-arrow',
    'eslint-plugin-prettier',
    'eslint-plugin-deprecation',
    'prettier',
    'husky',
    'lint-staged',
    'rxjs',
    'swagger-typescript-api',
    '@github/hotkey',
    'ng-alain-sts',
    'ng-alain-plugin-theme'
  ].map(key => key.replace(/\@/g, '\\\\@').replace(/\//g, '\\\\/').replace(/-/g, '\\\\-') + '|' + (vs[key] || dvs[key])).join('\n\t');
")
VERSION=$(node -p "require('./package.json').version")
ZORROVERSION=$(node -p "require('./package.json').dependencies['ng-zorro-antd']")

updateVersionReferences() {
  NPM_DIR="$1"
  (
    cd ${NPM_DIR}

    echo ">>> VERSION: Updating dependencies version references in ${NPM_DIR}"
    local lib version
    for dependencie in ${DEPENDENCIES[@]}
    do
      IFS=$'|' read -r lib version <<< "$dependencie"
      # echo ">>>> update ${lib}: ${version}"
      perl -p -i -e "s/\"${lib}\": \"\@LIB\-PLACEHOLDER\"/\"${lib}\": \"${version}\"/g" $(grep -ril -s \"${lib}\": \"\@LIB\-PLACEHOLDER\" .) < /dev/null 2> /dev/null
      perl -p -i -e "s/${lib}\@DEP\-0\.0\.0\-PLACEHOLDER/${lib}\@${version}/g" $(grep -ril -s ${lib}\@DEP\-0\.0\.0\-PLACEHOLDER .) < /dev/null 2> /dev/null
    done

    FIX_VERSION="${VERSION}"
    if [[ ${FIX_VERSION} != "latest" ]]; then
      FIX_VERSION="^${FIX_VERSION}"
    fi
    echo ">>> VERSION: Updating version references in ${NPM_DIR}"
    perl -p -i -e "s/ZORRO\-0\.0\.0\-PLACEHOLDER/${ZORROVERSION}/g" $(grep -ril ZORRO\-0\.0\.0\-PLACEHOLDER .) < /dev/null 2> /dev/null
    perl -p -i -e "s/PEER\-0\.0\.0\-PLACEHOLDER/${FIX_VERSION}/g" $(grep -ril PEER\-0\.0\.0\-PLACEHOLDER .) < /dev/null 2> /dev/null
    perl -p -i -e "s/0\.0\.0\-PLACEHOLDER/${VERSION}/g" $(grep -ril 0\.0\.0\-PLACEHOLDER .) < /dev/null 2> /dev/null
  )
}

containsElement () {
  local e
  for e in "${@:2}"; do [[ "$e" == "$1" ]] && return 0; done
  return 1
}
