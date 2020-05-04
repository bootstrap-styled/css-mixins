## [2.1.3](https://github.com/bootstrap-styled/css-mixins/compare/v2.1.2...v2.1.3) (2020-05-04)


### Bug Fixes

* **dependencies:** upgrade all dependencies ([b503ee3](https://github.com/bootstrap-styled/css-mixins/commit/b503ee3a686e40bd2b857b4fdec18321ed70cc91))
* **documentation:** fix documentation using wrong version fo react-styleguidist ([67efadc](https://github.com/bootstrap-styled/css-mixins/commit/67efadcf3b6036c2a5be50f19f6e0a3274ad38f8))

## [2.1.2](https://github.com/bootstrap-styled/css-mixins/compare/v2.1.1...v2.1.2) (2019-12-02)


### Bug Fixes

* **generateUtility:** key was not generated when equal to 0 resulting in class such as .border-0 being incorrectly generated ([597e1ae](https://github.com/bootstrap-styled/css-mixins/commit/597e1ae2310cdae1d68798994dea77772b3f6c3f))

## [2.1.1](https://github.com/bootstrap-styled/css-mixins/compare/v2.1.0...v2.1.1) (2019-12-01)


### Bug Fixes

* **dependencies:** upgrade all dependencies ([79ef08c](https://github.com/bootstrap-styled/css-mixins/commit/79ef08ce2256c0a9da96f2b8e5193a729c35658b))
* **utilities:** using 2 arguments in generateUtility instead of options object ([9b4fd9c](https://github.com/bootstrap-styled/css-mixins/commit/9b4fd9cfd9bbb7bd5f364a3cab0c71aa5156c195))

# [2.1.0](https://github.com/bootstrap-styled/css-mixins/compare/v2.0.8...v2.1.0) (2019-11-30)


### Bug Fixes

* **utilities:** added utilities mixins ([b81272d](https://github.com/bootstrap-styled/css-mixins/commit/b81272de079aa01b893fbe077eb9894d1a2dfa12))


### Features

* **utilities:** added utilities mixins ([01c7905](https://github.com/bootstrap-styled/css-mixins/commit/01c790516356afea985d465dc29067d053431165))

## [2.0.8](https://github.com/bootstrap-styled/css-mixins/compare/v2.0.7...v2.0.8) (2019-11-29)


### Bug Fixes

* **dependencies:** upgrade all dependencies ([3dc61cf](https://github.com/bootstrap-styled/css-mixins/commit/3dc61cf9191eae6d101102e45bd904b25e9eeaf7))

## [2.0.7](https://github.com/bootstrap-styled/css-mixins/compare/v2.0.6...v2.0.7) (2019-06-17)


### Bug Fixes

* **dependencies:** upgrade all dependencies ([80d8d0d](https://github.com/bootstrap-styled/css-mixins/commit/80d8d0d))

## [2.0.6](https://github.com/bootstrap-styled/css-mixins/compare/v2.0.5...v2.0.6) (2019-02-05)


### Bug Fixes

* **merge:** resolv conflict. ([e9d0ba4](https://github.com/bootstrap-styled/css-mixins/commit/e9d0ba4))

## [2.0.5](https://github.com/bootstrap-styled/css-mixins/compare/v2.0.4...v2.0.5) (2019-01-03)


### Bug Fixes

* **button:** using background instead of background for linear-gradient used within buttons ([fde55e6](https://github.com/bootstrap-styled/css-mixins/commit/fde55e6))

## [2.0.4](https://github.com/bootstrap-styled/css-mixins/compare/v2.0.3...v2.0.4) (2019-01-03)


### Bug Fixes

* **button:** fixed linear-gradient values ([c0b640c](https://github.com/bootstrap-styled/css-mixins/commit/c0b640c))
* **dependencies:** upgrade all dependencies ([8e58fb9](https://github.com/bootstrap-styled/css-mixins/commit/8e58fb9))

## [2.0.3](https://github.com/bootstrap-styled/css-mixins/compare/v2.0.2...v2.0.3) (2018-12-21)


### Bug Fixes

* **grid:** fix grid having wrong css for col-* ([b6b0f94](https://github.com/bootstrap-styled/css-mixins/commit/b6b0f94))

## [2.0.2](https://github.com/bootstrap-styled/css-mixins/compare/v2.0.1...v2.0.2) (2018-12-21)


### Bug Fixes

* **hover:** added .active, .focus class to hover mixins. Improve many test without immutable ([2344363](https://github.com/bootstrap-styled/css-mixins/commit/2344363))

## [2.0.1](https://github.com/bootstrap-styled/css-mixins/compare/v2.0.0...v2.0.1) (2018-12-20)


### Bug Fixes

* **grid:** fix grid framework ([4968348](https://github.com/bootstrap-styled/css-mixins/commit/4968348))

# [2.0.0](https://github.com/bootstrap-styled/css-mixins/compare/v1.3.3...v2.0.0) (2018-12-20)


### Bug Fixes

* **grid:** Update grid breakpoint to reflect v4.1.3 of bootstrap v4 ([37ae5c9](https://github.com/bootstrap-styled/css-mixins/commit/37ae5c9)), closes [#16](https://github.com/bootstrap-styled/css-mixins/issues/16)
* **grid:** Update grid breakpoint to reflect v4.1.3 of bootstrap v4 ([830912f](https://github.com/bootstrap-styled/css-mixins/commit/830912f)), closes [#16](https://github.com/bootstrap-styled/css-mixins/issues/16)


### BREAKING CHANGES

* **grid:** `$grid-gutter-widths` was replaced with `$grid-gutter-width`. `pull` and `push`
modified have been modified with `order-$infix-$i` and `order-$infix-last` according to
https://getbootstrap.com/docs/4.1/layout/grid/#order-classes

## [1.3.3](https://github.com/bootstrap-styled/css-mixins/compare/v1.3.2...v1.3.3) (2018-12-18)


### Bug Fixes

* **makeContainer:** respect the makeContainer https://github.com/twbs/bootstrap/blob/502b6c8ed6088fa99192f3068b22457fb57af67d/scss/mixins/_grid.scss#L8 and does not add position: relative to <Col /> by default ([7a61d83](https://github.com/bootstrap-styled/css-mixins/commit/7a61d83)), closes [/github.com/twbs/bootstrap/blob/502b6c8ed6088fa99192f3068b22457fb57af67d/scss/mixins/_grid.scss#L8](https://github.com//github.com/twbs/bootstrap/blob/502b6c8ed6088fa99192f3068b22457fb57af67d/scss/mixins/_grid.scss/issues/L8)

## [1.3.2](https://github.com/bootstrap-styled/css-mixins/compare/v1.3.1...v1.3.2) (2018-12-18)


### Bug Fixes

* **button:** fix some css from https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_buttons.scss#L17 for https://github.com/bootstrap-styled/bootstrap-styled/issues/50 ([fae688f](https://github.com/bootstrap-styled/css-mixins/commit/fae688f)), closes [/github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_buttons.scss#L17](https://github.com//github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_buttons.scss/issues/L17)

## [1.3.1](https://github.com/bootstrap-styled/css-mixins/compare/v1.3.0...v1.3.1) (2018-12-16)


### Bug Fixes

* **greenkeeper:** fix sonar running on greenkeeper test ([ce21fda](https://github.com/bootstrap-styled/css-mixins/commit/ce21fda))

# [1.3.0](https://github.com/bootstrap-styled/css-mixins/compare/v1.2.0...v1.3.0) (2018-12-16)


### Features

* **rollup:** updated rollup and added greenkeeper ([6d513fb](https://github.com/bootstrap-styled/css-mixins/commit/6d513fb))

# [1.2.0](https://github.com/bootstrap-styled/css-mixins/compare/v1.1.2...v1.2.0) (2018-12-07)


### Features

* **babel:** upgrade to babel 7, upgrade many dependencies, using [@bootstrap-styled](https://github.com/bootstrap-styled)/color ([a16fabe](https://github.com/bootstrap-styled/css-mixins/commit/a16fabe))

## [1.1.2](https://github.com/bootstrap-styled/css-mixins/compare/v1.1.1...v1.1.2) (2018-12-05)


### Bug Fixes

* **documentation:** added new doc dependencies and improved documentation. ([aae9ee3](https://github.com/bootstrap-styled/css-mixins/commit/aae9ee3))
* **documentation:** corrected typo in introduction ribbon. ([8a14b7c](https://github.com/bootstrap-styled/css-mixins/commit/8a14b7c))

## [1.1.1](https://github.com/bootstrap-styled/css-mixins/compare/v1.1.0...v1.1.1) (2018-12-03)


### Bug Fixes

* **button:** changed to allow gradient colors as background. ([3c579d1](https://github.com/bootstrap-styled/css-mixins/commit/3c579d1))
* **linter:** added stylelint to improve css linting. ([a0406b5](https://github.com/bootstrap-styled/css-mixins/commit/a0406b5))
* **merge:** resolv. ([492103d](https://github.com/bootstrap-styled/css-mixins/commit/492103d))
* **variables utils:** deleted and moved to more appropriate package [@bootstrap-styled](https://github.com/bootstrap-styled)/bootstrap-styled ([374f3c7](https://github.com/bootstrap-styled/css-mixins/commit/374f3c7))

# [1.1.0](https://github.com/bootstrap-styled/css-mixins/compare/v1.0.2...v1.1.0) (2018-11-14)


### Features

* **doc:** added documentation and updated some dependencies ([8f5ad65](https://github.com/bootstrap-styled/css-mixins/commit/8f5ad65))
* **doc:** merge ([47bdc4c](https://github.com/bootstrap-styled/css-mixins/commit/47bdc4c))

## [1.0.2](https://github.com/bootstrap-styled/css-mixins/compare/v1.0.1...v1.0.2) (2018-11-05)


### Bug Fixes

* **release:** GitHub release https://github.com/bootstrap-styled/css-mixins ([08c2eec](https://github.com/bootstrap-styled/css-mixins/commit/08c2eec))

## [1.0.1](https://module.kopaxgroup.com/bootstrap-styled/css-mixins/compare/v1.0.0...v1.0.1) (2018-11-05)


### Bug Fixes

* **publish:** release to gh ([55dea0d](https://module.kopaxgroup.com/bootstrap-styled/css-mixins/commit/55dea0d))

# 1.0.0 (2018-10-03)


### Bug Fixes

* **.gitignore:** following new standard ([0019f64](https://module.kopaxgroup.com/bootstrap-styled/css-mixins/commit/0019f64))
* **.npmignore:** following tnew starndard ([70eac97](https://module.kopaxgroup.com/bootstrap-styled/css-mixins/commit/70eac97))
* fix CI ([41ac827](https://module.kopaxgroup.com/bootstrap-styled/css-mixins/commit/41ac827))
* **CI:** tryign to fix ci ([d213199](https://module.kopaxgroup.com/bootstrap-styled/css-mixins/commit/d213199))
* **gitlab-ci.yml:** Updated image link. ([4fb39f2](https://module.kopaxgroup.com/bootstrap-styled/css-mixins/commit/4fb39f2))
* **package.json:** added scope [@bootstrap-styled](https://module.kopaxgroup.com/bootstrap-styled) and renamed [@bootstrap-styled](https://module.kopaxgroup.com/bootstrap-styled)/mixins ([3d2cd7b](https://module.kopaxgroup.com/bootstrap-styled/css-mixins/commit/3d2cd7b))
* **package.json:** added scope [@bootstrap-styled](https://module.kopaxgroup.com/bootstrap-styled) and renamed [@bootstrap-styled](https://module.kopaxgroup.com/bootstrap-styled)/mixins ([68b4d68](https://module.kopaxgroup.com/bootstrap-styled/css-mixins/commit/68b4d68))
* **package.json:** added webpack ([b023cba](https://module.kopaxgroup.com/bootstrap-styled/css-mixins/commit/b023cba))


### Features

* **commitizen:** initialized project as commitizen and added badge in README ([61507c5](https://module.kopaxgroup.com/bootstrap-styled/css-mixins/commit/61507c5))
* **flex:** added justify-content-evenly ([c382535](https://module.kopaxgroup.com/bootstrap-styled/css-mixins/commit/c382535))

# Changelog

All notable changes to this project will be documented in this file.

## [?NEXT?] - ????-??-??

- TODO: write changelog before preparing next tag

## [v1.0.4] - 2018-04-16

- Automatic changelog.

## [1.0.2] - 2018-04-12

- Removed wrong attributed argument to function `getSpacingUtilities` in `utilities/spacing`.

## [1.0.1] - 2018-02-19

- Corrected mistaked in `defaultProps` of mixin `a`.
- Added the `.overflow` class to `body` tag in `globalStyles`.

## [1.0.0] - 2017-09-26

- Downgrade `color` to 1.0.3.

## [0.0.5] - 2017-09-25

- Upgraded `bootstrap-styled-utils` from 0.0.4 to 0.0.6.

## [0.0.4] - 2017-09-25

- Upgraded `bootstrap-styled-utils` from 0.0.2 to 0.0.4.

## [0.0.3] - 2017-09-25

- Removed `math-utils` dependency.
- Upgraded to `bootstrap-styled-utils` from 0.0.1 to 0.0.2.

## [0.0.2] - 2017-09-25

- Added `getTransitionUtilities` to default exports in transition utility.

## [0.0.1] - 2017-09-25

- First release.
