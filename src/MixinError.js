export default class MixinError extends Error {
  constructor(args) {
    super(args);
    Error.captureStackTrace(this, MixinError);
  }
}
