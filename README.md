# React Native SVG strict TypeScript API reproduction

Minimal TypeScript project using React Native 0.87.1 and react-native-svg 15.15.5. The fixture in `src/CircleNativeComponent.ts` copies the relevant private-import pattern from upstream's `src/fabric/CircleNativeComponent.ts`.

## Reproduce

```sh
yarn install
yarn typecheck
```

`yarn typecheck` intentionally fails: TypeScript checks the source fixture and cannot resolve the private RN Codegen/native-component imports under the strict API. The project keeps `skipLibCheck: true`, as React Native recommends, to show that it does not suppress these source-file diagnostics.

Check the public-import equivalent:

```sh
yarn typecheck:fixed
```

This verifies the import migration against the same React Native and library versions.
