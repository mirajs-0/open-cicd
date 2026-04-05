# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pokedex.spec.js >> Pokedex >> front page can be opened
- Location: e2e-tests/pokedex.spec.js:4:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('ivysaur')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('ivysaur')

```

# Test source

```ts
  1  | const { test, describe, expect } = require('@playwright/test')
  2  | 
  3  | describe('Pokedex', () => {
  4  |   test('front page can be opened', async ({ page }) => {
  5  |     await page.goto('')
> 6  |     await expect(page.getByText('ivysaur')).toBeVisible()
     |                                             ^ Error: expect(locator).toBeVisible() failed
  7  |     await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  8  |   })
  9  | 
  10 |   test('navigation to ivysaur page works', async ({ page }) => {
  11 |     await page.goto('')
  12 |     await page.getByText('ivysaur').click()
  13 |     await expect(page.getByText('chlorophyll')).toBeVisible()
  14 |   })
  15 | })
```