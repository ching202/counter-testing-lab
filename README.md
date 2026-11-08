# Counter: Exploratory and White Box Testing

React Counter lab with Jest, React Testing Library, recorded DOM exploration,
and code coverage evidence. The original `src/App.tsx` is unchanged.

## Run locally

Tested with Node.js 24 and npm on Windows.

```bash
npm ci
npm run dev
```

## Run the checks

```bash
npm test
npm test -- --coverage
npm run build
npm run lint
```

The suite contains **8 tests**. The recorded run reports **100% statements,
branches, functions, and lines for `App.tsx`**. There are zero instrumented
branches, so that branch percentage does not represent exercised decisions.
Coverage is intentionally scoped to `App.tsx`, the assigned component.

Open `coverage/index.html` after running coverage to inspect the report locally.

## Deliverables

- [Lab write-up](LAB-REPORT.md): charter, action log, source analysis, coverage
  interpretation, and comparison of testing approaches.
- [Test suite](src/App.test.tsx).
- [Test output](evidence/test-output.txt) and [coverage output](evidence/coverage-output.txt).
- [Test screenshot](evidence/test-run.png) and [coverage screenshot](evidence/coverage-report.png),
  showing the recorded command output opened in Notepad.
- [Saved HTML coverage report](evidence/coverage-report/index.html): clone or
  download the project and open locally; GitHub displays HTML as source.
- [Coverage measurements](evidence/coverage-summary.json).
- [Exploration observations](evidence/exploration.json).
- [Verification results](evidence/verification.json).
- [Publishing instructions](PUBLISHING.md).
- [Original assignment](LAB-INSTRUCTIONS.md).

## Setup changes

Added Jest's jsdom environment, Babel transforms for TypeScript/JSX, React Testing
Library, user-event, and jest-dom matchers. `npm test` runs Jest once. Coverage
thresholds require 100% for this small component. TypeScript checking remains
part of `npm run build` because Babel transforms do not type-check.

Removed the starter's direct Linux-only Rolldown binding so Windows can install
the project; Vite resolves its platform-appropriate dependencies. Compatible npm
audit fixes were applied. The remaining audit findings concern development
dependencies; no claim of a clean security audit is made. No forced major-version
dependency changes were applied.

Generated build files and live coverage output are ignored by Git. A saved
coverage report is included for review. `"private": true` in `package.json`
prevents accidental npm package publication; it does **not** make the GitHub
repository private. GitHub visibility must separately be **public**.

## Method and AI assistance

AI assisted with setup, tests, execution, analysis, and writing. The source was
opened during initial inspection, before exploration. Browser execution was
unavailable, so the exploration uses React in jsdom. It is a verified,
code-informed DOM session, not a blind manual browser session by the student.
The write-up explains this limitation.

## Documentation consulted

- [Jest setup](https://jestjs.io/docs/getting-started)
- [React Testing Library setup](https://testing-library.com/docs/react-testing-library/setup/)
