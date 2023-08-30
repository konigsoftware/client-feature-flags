# Client Feature Flags

This package provides a simple library for gating experiences on the client using query parameters.

## Installation

Currently this package requires that flag definitions live in `src/flags.ts`. For this reason, it's probably easiest to simply copy the code into a consuming project. Ideally, it would be updated such that a consuming project could use this package as a dependency and provide a config file with flag definitions.

## Usage

### Defining Flags

Flags should be defined in the FeatureFlags enum in `src/flags.ts`. The string value assigned to the enum key is the query parameter that will be used to toggle the flag. For example, FeatureFlags is defined as follows:

```ts
export enum FeatureFlags {
  flag1 = "example_flag",
}
```

### Using Flags

In the example above, a query parameter of `?example_flag=true` would enable the flag and `?example_flag=false` would disable it.

### Parsing Query Parmeters

The `parseQueryParamsToFlags` function must be called on all navigation actions. In React, something like the following would work:

```ts
const router = useRouter();

useEffect(() => {
  parseQueryParamsToFlags(router.query);
}, [router.query]);
```

### Gating Experiences

To conditionally show an experience based on a flag, use the `isFeatureFlagEnabled` function. Another React example:

```tsx
const ExampleComponent = () => {
  const isFlagEnabled = isFeatureFlagEnabled(FeatureFlags.flag1);

  return isFlagEnabled ? <div>Example</div> : null;
};
```

## Considerations

Flags can be leaked in the browser so this solution should not be used to gate sensitive data.
