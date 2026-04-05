# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pokedex.spec.js >> Pokedex >> navigation to ivysaur page works
- Location: e2e-tests/pokedex.spec.js:10:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByText('ivysaur')

```

# Test source

```ts
  1  | const { test, describe, expect } = require('@playwright/test')
  2  | 
  3  | describe('Pokedex', () => {
  4  |   test('front page can be opened', async ({ page }) => {
  5  |     await page.goto('')
  6  |     await expect(page.getByText('ivysaur')).toBeVisible()
  7  |     await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  8  |   })
  9  | 
  10 |   test('navigation to ivysaur page works', async ({ page }) => {
  11 |     await page.goto('')
> 12 |     await page.getByText('ivysaur').click()
     |                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  13 |     await expect(page.getByText('chlorophyll')).toBeVisible()
  14 |   })
  15 | })
```