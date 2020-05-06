/**
 * Utility functions that should be exposed to users.
 *
 * These should be relevant to the package (so not too general like
 * `enumerate`), and may need to be used by user to create new plugins (so
 * something for internal use only like package's `debug` shouldn't be
 * exposed).
 */

export * as module from '../lib/module';
export * as subclass from '../lib/subclass';
