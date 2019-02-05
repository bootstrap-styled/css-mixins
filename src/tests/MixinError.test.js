import MixinError from '../MixinError';

describe('MixinError', () => {
  it('should be throwable', () => {
    expect(() => { throw new MixinError('error'); }).toThrowError(new MixinError('error'));
  });
  it('should have message', () => {
    const err = new MixinError('error');
    expect(err.message).toEqual('error');
  });
});
