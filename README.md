# Client Feature Flags

This package provides a simple library for gating experiences on the client using query params.

## Notes

Currently this package requires that flag definitions live in `src/flags.ts`. Ideally, it would be updated such that a consuming project could provide a config file with flag definitions. If this is done, then this can be published.
