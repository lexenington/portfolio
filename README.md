# Portfolio

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

**Live site:** [lexenington.github.io/portfolio](https://lexenington.github.io/portfolio/)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Blog:** MDX with gray-matter
- **Deployment:** GitHub Pages

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000/portfolio](http://localhost:3000/portfolio) to view the site.

## Project Structure

```
src/
├── app/                  # Next.js app router pages
│   ├── blog/             # Blog pages
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/
│   ├── layout/           # Header, Footer, Container
│   └── sections/         # Hero, About, Projects, etc.
├── config/
│   ├── site.ts           # Site metadata & social links
│   └── content.ts        # About content & experience
├── content/
│   └── blog/             # Blog posts (MDX files)
├── lib/
│   ├── github.ts         # GitHub API integration
│   └── mdx.ts            # MDX utilities
└── types/
    └── index.ts          # TypeScript types
```

## Adding a Blog Post

1. Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Your Blog Post Title"
date: "2024-12-29"
description: "A brief description of your post."
tags: ["tag1", "tag2"]
---

# Your Content Here

Write your blog post using markdown...

## Subheading

- Bullet points
- More content

**Bold text** and *italic text*
```

2. The filename becomes the URL slug:
   - `my-new-post.mdx` → `/blog/my-new-post/`

3. Deploy your changes (see below)

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title |
| `date` | Yes | Publication date (YYYY-MM-DD) |
| `description` | Yes | Short summary for previews |
| `tags` | No | Array of tags |

## Updating Content

### Personal Info
Edit `src/config/site.ts`:
- Name, title, description
- Email and social links

### About & Experience
Edit `src/config/content.ts`:
- About section text and skills
- Work experience and education

### Projects
Projects are fetched from GitHub automatically:
- **With GITHUB_TOKEN:** Fetches pinned repositories
- **Without token:** Falls back to starred repositories

## Deployment

### Deploy to GitHub Pages

```bash
# Build and deploy
npm run deploy
```

This builds the site and pushes to the `gh-pages` branch.

### GitHub Pages Setup

1. Go to repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / **root**
4. Save

### Workflow

1. Make changes to code
2. Commit & push: `git add . && git commit -m "message" && git push`
3. Deploy: `npm run deploy`

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run deploy` | Build and deploy to GitHub Pages |
| `npm run lint` | Run ESLint |

## License

MIT
