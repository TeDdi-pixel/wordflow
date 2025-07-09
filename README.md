This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Structure

This project uses Next.js App Router for routing. The routing structure is organized as follows:

- `app/` - The main directory for all routes
  - `(withNavigation)/` - Route group for pages that include navigation
    - `cards/` - Cards page
    - `create-card-set/` - Create card set page
    - `history/` - History page
    - `library/` - Library page
  - `(withoutNavigation)/` - Route group for pages without navigation
    - `login/` - Login page
  - `page.tsx` - Home page
  - `layout.tsx` - Root layout

### Route Groups

Route groups in Next.js (folders in parentheses like `(withNavigation)`) are used for organizational purposes and don't affect the URL path. For example:

- The URL for the cards page is `/cards`, not `/(withNavigation)/cards`
- The URL for the login page is `/login`, not `/(withoutNavigation)/login`

This approach allows us to share layouts between related routes without affecting the URL structure.

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
# openword
