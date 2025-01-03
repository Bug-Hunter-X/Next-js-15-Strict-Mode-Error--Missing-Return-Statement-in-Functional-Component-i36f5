# Next.js 15 Strict Mode Error: Missing Return Statement

This repository demonstrates a subtle error that can occur in Next.js 15 when using strict mode.  If a functional component is missing a return statement, it will throw an error during rendering, even though the error message might not be immediately obvious.

## Bug

The `pages/about.js` file is missing a `return` statement in the `About` component.  Next.js 15, in strict mode, will throw an error related to this omission.  The error message might be misleading initially, but it boils down to the missing `return` statement.

## Solution

The solution is straightforward: add a `return` statement to the `About` component, even if it's just returning `null`.

## How to reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Observe the error in your console.  Then, make the change in `pages/about.js` to fix the error.
