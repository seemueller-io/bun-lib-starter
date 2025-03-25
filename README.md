# Bun Template Library

This repository is a template for building a library **and** a CLI using Bun.
It’s meant to be used via the **"Use this Repository as a Template"** button on
GitHub.

## Overview

- **Library & CLI:**  
  The `src/` folder contains both library functionality (`src/lib.ts`) and a
  command line interface (`src/cli.ts`).

- **Build Process:**  
  Use the provided npm scripts (e.g., `bun run build`, `bun run test`) to build,
  test, and run your project.

- **Package Setup:**  
  The `package.json` is preconfigured with build and publish scripts, allowing
  you to easily package and publish a new version.

## Making a Change

1. Use the repository template to create your own project.
2. Modify the source code in `src/` (for example, update `src/lib.ts` or
   `src/cli.ts` as needed).
3. Test your changes locally:
   ```bash
   bun run test
   ```
4. Build the project:
   ```bash
   bun run build
   ```

## Publishing a New Version

1. Update the version in `package.json` for your new release.
2. Commit your changes.
3. Publish the new version to npm:
   ```bash
   bun run deploy:dev
   ```

## License

MIT © 2024 Geoff Seemueller
