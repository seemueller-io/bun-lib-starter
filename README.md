# bun-lib-starter
I have been using this as my personal stack for shipping npm packages for some time and decided to make a "cutout" to share. Be cautious as this project is very new and there are probably things wrong with it. Please submit an issue. I welcome contributors!

> Install [Bun](https://bun.sh/docs/installation): `curl -fsSL https://bun.sh/install | bash` [View install script](https://bun.sh/install)

## AI Generated README
### Bun Library Template

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
  The `package.json` is preconfigured with build, release, and publish scripts,
  allowing you to easily package and publish a new version.

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

### Manual Publish

1. Update the version in `package.json` for your new release.
2. Commit your changes.
3. Publish the new version to npm:
   ```bash
   bun run deploy:dev
   ```

### Releasing with release-it

1. Make sure all your changes are committed.
2. Run the release command:
   ```bash
   bun run release
   ```
3. Follow the prompts provided by release-it. It will:
   - Update the version in your package.
   - Create a new git tag.
   - Commit the version bump.
   - Publish the package to npm (if configured).

This automates the release process and ensures a consistent versioning workflow.

---
## License

MIT License

© 2024 Geoff Seemueller

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

## TODO:
- refactor to project generator interface i.e `npm create bun-lib-starter`
- align release and publish with github workflow

