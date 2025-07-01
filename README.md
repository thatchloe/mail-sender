# Email Writing Assistant

This is a Vite + React app for generating professional emails with AI assistance.

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Deploy on Vercel

1. Push this repository to GitHub (or your preferred git provider).
2. Import the project into [Vercel](https://vercel.com/).
3. Vercel will detect the Vite app and use the provided `vercel.json` for configuration.
4. Your app will be deployed at your Vercel domain.

---

**Note:**
- The app expects a `window.claude.complete` function for AI email generation. You will need to implement or polyfill this for production use (e.g., by connecting to an API route or third-party service). 