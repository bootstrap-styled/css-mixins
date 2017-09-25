# bootstrap-styled-mixins

bootstrap-styled-mixins npm package.

**Master**

[![build status](https://module.kopaxgroup.com/styled-components/bootstrap-styled-mixins/badges/master/build.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled-mixins/commits/master)
[![coverage report](https://module.kopaxgroup.com/styled-components/bootstrap-styled-mixins/badges/master/coverage.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled-mixins/commits/master)

**Dev**

[![build status](https://module.kopaxgroup.com/styled-components/bootstrap-styled-mixins/badges/dev/build.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled-mixins/commits/dev)
[![coverage report](https://module.kopaxgroup.com/styled-components/bootstrap-styled-mixins/badges/dev/coverage.svg)](https://module.kopaxgroup.com/styled-components/bootstrap-styled-mixins/commits/dev)

## Table of Contents

  - [Installation](#installation)
  - [Changelog](#changelog)
  - [Mixins and Utilities](#mixins-and-utilities)
  - [Reminders](#reminders)
  - [Quick start](#quick-start)
  - [Release](#release)
  - [License](#license)

---

## Installation

    npm install ssh://git@module.kopaxgroup.com:20024/styled-components/bootstrap-styled-mixins.git --save
    
*Don't forget to also install peer dependencies*

## Changelog

  - View [Changelog](CHANGELOG.md)
  
## Mixins and Utilities

```jsx harmony
// mixins
export { default as aMixins } from './a';
export { default as alertMixins } from './alert';
export { default as backgroundVariantMixins } from './background-variant';
export { default as badgeMixins } from './badge';
export { default as radius } from './border-radius';
export { boxShadow } from './box-shadow';
export { default as bp } from './breakpoints';
export { default as buttonsMixins } from './buttons';
export { default as buttonGroupMixins } from './buttonGroup';
export { default as cardsMixins } from './cards';
export { clearfix } from './clearfix';
export { ifElse, ifThen } from './conditional';
export { default as floatMixins } from './float';
export { default as formsMixins } from './forms';
export { default as customformsMixins } from './customForms';
export { default as gradient } from './gradients';
export { default as gridMixins } from './grid';
export { default as gridFrameworkMixins } from './grid-framework';
export { hover } from './hover';
export { default as listGroupMixins } from './list-group';
export { default as listsMixins } from './lists';
export { default as navMixins } from './nav';
export { default as navbarMixins } from './navbar';
export { default as navDividerMixins } from './nav-divider';
export { default as navbarAlignMixins } from './navbar-align';
export { default as navbarToggleableMixins } from './navbar-toggleable';
export { default as paginationsMixins } from './paginations';
export { default as progressMixins } from './progress';
export { default as resetFilterMixins } from './reset-filter';
export { default as resetTextMixins } from './reset-text';
export { default as resizeMixins } from './resize';
export { srOnly, srOnlyFocusable } from './screen-reader';
export { size } from './size';
export { default as tabFocusMixins } from './tab-focus';
export { default as tableRowMixins } from './table-row';
export { default as textEmphasisMixins } from './text-emphasis';
export { default as textHideMixins } from './text-hide';
export { textTruncate } from './text-truncate';
export { transition } from './transition';
export { default as typographyMixins } from './typography';
export { default as variablesMixins } from './variables';
export { invisible } from './visibility';
// utilities
export { default as alignUtils } from './utilities/align';
export { default as backgroundUtils } from './utilities/background';
export { default as bordersUtils } from './utilities/borders';
export { default as clearfixUtils } from './utilities/clearfix';
export { default as cursorUtils } from './utilities/cursor';
export { default as displayUtils } from './utilities/display';
export { default as flexUtils } from './utilities/flex';
export { default as floatUtils } from './utilities/float';
export { default as positionUtils } from './utilities/position';
export { default as rebootUtils } from './utilities/reboot';
export { default as screenreadersUtils } from './utilities/screenreaders';
export { default as sizingUtils } from './utilities/sizing';
export { default as spacingUtils } from './utilities/spacing';
export { default as transitionUtils } from './utilities/transition';
export { default as textUtils } from './utilities/text';
export { default as visibilityUtils } from './utilities/visibility';
export { unitUtils } from 'math-utils';
```

## Reminders

**⚠️ When using this plugin, you must import in the first line of your application javascript entry file `babel-polyfill`: ⚠️**
  
    import "babel-polyfill";
    
To enable ES features in older browsers, you MUST include in the package.json

    "browserslist": ["ie >= 9", "last 2 versions"]
    // or
    "browserslist": ["ie >= 10", "last 2 versions"]

## Quick start

Clone project

    git clone ssh://git@module.kopaxgroup.com:20024/styled-components/bootstrap-styled-mixins.git

Install dependencies

    npm install

Build project

    npm run build
    
Run unit test
     
    npm test
    
Watch unit test
     
    npm run test:watch

Watch the `/dist` directory

    npm run build:dist:watch

Watch the `/lib` directory

    npm run build:lib:watch

# Contribute

`master` is used to release the version. 

- `master` only accept merge requests from `dev`

`dev` is the developement branch. It should be used by developers for applying their merge requests.

If you wish to implement new functionalities you need to do a merge request including your change on the `dev` branch.

    git checkout dev
    git checkout $(whoami)-dev
    git push -u origin $(whoami)-dev 

You can now start working on your branch. Don't forget to check `Delete branch when merged`.

## Release

Merge `dev` into `master` will release a new version and prepare a new version in `dev`.

To release a new version, edit the [Changelog](CHANGELOG.md) and set the version in `package.json` and merge your change into `master`.

**⚠️ if you are releasing on a git repository instead of a npm repository, **DO NOT** forget to remove `build`, and `dist` from the `.gitignore` ⚠️**

    sed -i "/lib\|dist/d" .gitignore

## License

Copyright (c) 2017 Kopax Ltd. For more information `contact@kopaxgroup.com`. Made with [rollup-umd](https://module.kopaxgroup.com/dev-tools/rollup-umd/tags/0.1.5) 0.1.5
