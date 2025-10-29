This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Deployment (Vercel)

### Deploy via Git (recommended)
1. Create a new repository on your Git provider (GitHub/GitLab/Bitbucket).
2. Push this project:
   ```bash
   git remote add origin <your-repo-url>
   git branch -M main
   git push -u origin main
   ```
3. Import the repo into Vercel: `New Project` → select your repo → framework auto-detected as Next.js → Deploy.

### Deploy via Vercel CLI
1. Install the CLI:
   ```bash
   npm i -g vercel
   ```
2. Link the project and deploy:
   ```bash
   vercel
   # then for production
   vercel deploy --prod
   ```

### Environment Variables
- Add any required variables in Vercel: Project Settings → Environment Variables.
- For local development, create `.env.local` in the project root. Variables in `.env.local` are loaded automatically by Next.js.

This repository includes a `vercel.json` to ensure correct framework detection and build commands.
