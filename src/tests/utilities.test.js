import { zip, generateUtility } from '../utilities';

describe('bootstrap utilities mixins', () => {
  describe('zip', () => {
    it('should zip', () => {
      expect(zip([
        '10px',
        '50px',
        '100px',
      ], [
        'short',
        'mid',
        'long',
      ])).toEqual([
        ['10px', 'short'],
        ['50px', 'mid'],
        ['100px', 'long'],
      ]);
      expect(zip([
        '10px',
        '50px',
        '100px',
      ], [
        'short',
        'mid',
      ])).toEqual([
        ['10px', 'short'],
        ['50px', 'mid'],
      ]);
      expect(zip([
        '10px',
        '50px',
        '100px',
      ], [
        'short',
        'mid',
        'long',
      ], [
        'north',
        'est',
      ])).toEqual([
        ['10px', 'short', 'north'],
        ['50px', 'mid', 'est'],
      ]);
    });
  });
  const utilities = new Map([
    ['align', {
      property: 'vertical-align',
      class: 'align',
      values: [
        'baseline',
        'top',
        'middle',
        'bottom',
        'text-bottom',
        'text-top',
      ],
    }],
    ['float', {
      responsive: true,
      property: 'float',
      values: [
        'left',
        'right',
        'none',
      ],
    }],
    ['width', {
      property: 'max-width',
      class: 'w',
      values: new Map([
        [25, '25%'],
        [50, '50%'],
        [75, '75%'],
        [100, '100%'],
        ['auto', 'auto'],
      ]),
    }],
    ['max-width', {
      property: 'max-width',
      class: 'mw',
      values: new Map([
        [100, '100%'],
      ]),
    }],
    ['shadow', {
      property: 'box-shadow',
      class: 'shadow',
      values: new Map([
        ['sm', '3px'],
        [null, '4px'],
        ['lg', '5px'],
        ['none', 'none'],
      ]),
    }],
    ['rounded-top', {
      property: [
        'border-top-left-radius',
        'border-top-right-radius',
      ],
      class: 'rounded-top',
      values: new Map([
        [null, '4px'],
      ]),
    }],
  ]);
  it('should generate align utility', () => {
    const css = generateUtility({
      $utility: utilities.get('align'),
    });
    expect(css).toEqual(`.align-baseline {
      vertical-align: baseline !important;
    }
.align-top {
      vertical-align: top !important;
    }
.align-middle {
      vertical-align: middle !important;
    }
.align-bottom {
      vertical-align: bottom !important;
    }
.align-text-bottom {
      vertical-align: text-bottom !important;
    }
.align-text-top {
      vertical-align: text-top !important;
    }`);
  });
  it('should generate float utility', () => {
    const css = generateUtility({
      $utility: utilities.get('float'),
      $infix: '-sm',
    });
    expect(css).toEqual(`.float-sm-left {
      float: left !important;
    }
.float-sm-right {
      float: right !important;
    }
.float-sm-none {
      float: none !important;
    }`);
  });
  it('should generate shadow utility', () => {
    const css = generateUtility({
      $utility: utilities.get('shadow'),
    });
    expect(css).toEqual(`.shadow-sm {
      box-shadow: 3px !important;
    }
.shadow {
      box-shadow: 4px !important;
    }
.shadow-lg {
      box-shadow: 5px !important;
    }
.shadow-none {
      box-shadow: none !important;
    }`);
  });
  it('should generate rounded-top utility', () => {
    const css = generateUtility({
      $utility: utilities.get('rounded-top'),
    });
    expect(css).toEqual(`.rounded-top {
      border-top-left-radius: 4px !important;
border-top-right-radius: 4px !important;
    }`);
  });
  it('should generate rounded-top utility with infix -print', () => {
    const css = generateUtility({
      $utility: utilities.get('rounded-top'),
      $infix: '-print',
    });
    expect(css).toEqual(`.rounded-top-print {
      border-top-left-radius: 4px !important;
border-top-right-radius: 4px !important;
    }`);
  });
});
