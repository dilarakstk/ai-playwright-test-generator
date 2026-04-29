# 🚀 AI Playwright Test Generator

AI-powered Playwright test generator using **Node.js + Playwright + Ollama (Qwen3)**.

---

## 📌 What This Project Does

This project automatically:

- Sends a prompt to a local AI model (Ollama)
- Generates Playwright test code
- Removes unnecessary text (no markdown, no explanation)
- Saves the test into `/tests` folder
- Runs the test automatically

---

## 🧠 Example

Prompt:
Go to Google and check page title

Generated test:

import { test, expect } from '@playwright/test';

test('google test', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle('Google');
});

---

## ⚙️ Tech Stack

- Node.js
- Playwright
- Axios
- Ollama (Qwen3)

---

## ▶️ How to Run

node generateTest.js

---

## 🎯 Why This Project Matters

- Reduces manual test writing
- Demonstrates AI + QA integration
- Shows real-world automation workflow

---

## 👩‍💻 Author

Dilara Kıstak
