# bootstrap-styled-mixins

Bootstrap mixins and utilities in javascript for bootstrap-styled.

**Master**

[![build status](https://module.kopaxgroup.com/bootstrap-styled/bootstrap-styled-mixins/badges/master/build.svg)](https://module.kopaxgroup.com/bootstrap-styled/bootstrap-styled-mixins/commits/master)
[![coverage report](https://module.kopaxgroup.com/bootstrap-styled/bootstrap-styled-mixins/badges/master/coverage.svg)](https://module.kopaxgroup.com/bootstrap-styled/bootstrap-styled-mixins/commits/master)

**Dev**

[![build status](https://module.kopaxgroup.com/bootstrap-styled/bootstrap-styled-mixins/badges/dev/build.svg)](https://module.kopaxgroup.com/bootstrap-styled/bootstrap-styled-mixins/commits/dev)
[![coverage report](https://module.kopaxgroup.com/bootstrap-styled/bootstrap-styled-mixins/badges/dev/coverage.svg)](https://module.kopaxgroup.com/bootstrap-styled/bootstrap-styled-mixins/commits/dev)

## Table of Contents

  - [Installation](#installation)
  - [Changelog](#changelog)
  - [Mixins and Utilities](#mixins-and-utilities)
  - [Quick start](#quick-start)
  - [License](#license)

---

## Installation

```bash
$ npm install bootstrap-styled-mixins --save
```
    
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

## License

Licensed under the MIT License, Copyright © 2017-present Yeutech Company Limited.

See [LICENSE](LICENSE.md) for more information.
