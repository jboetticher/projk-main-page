This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Notes

Much of the project uses MUI, which is fine, but it's all client side rendering. While this project
makes use of a lot of the features that Next provides for us, it would be more efficient to build all
components from scratch so that most of it can be rendered on the server.

As it currently stands, server side rendering (SSR) is moot in this project due to the use of MUI.