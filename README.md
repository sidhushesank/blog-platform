# 📝 BlogPlatform - Full-Stack Blogging Application

A modern, feature-rich blogging platform built with **Next.js 15**, **tRPC**, **PostgreSQL**, and **TailwindCSS**. Create, manage, and publish blog posts with an intuitive interface and real-time updates.

![BlogPlatform Banner](https://via.placeholder.com/1200x400/667eea/ffffff?text=BlogPlatform+-+Modern+Blogging+Made+Easy)

---

## ✨ Features

### Core Functionality
- 📝 **Full CRUD Operations** - Create, read, update, and delete blog posts
- 🏷️ **Category Management** - Organize content with custom categories
- ✅ **Draft/Publish Workflow** - Save drafts and publish when ready
- 🔍 **Real-time Search** - Filter posts by title or content
- 📊 **Live Analytics Dashboard** - Track posts, categories, and published content
- 🎨 **Modern UI** - Clean, colorful interface with smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile

### Advanced Features
- 🔢 **Character & Word Counter** - Real-time content length tracking
- 🔗 **URL Preview** - See post URLs before publishing
- ⚡ **Optimistic Updates** - Instant UI feedback with automatic rollback
- 🎯 **Type-Safe APIs** - End-to-end type safety with tRPC
- 🔄 **Real-time Stats** - Dynamic counters that update automatically
- 🎭 **Interactive Cards** - Hover animations and smooth transitions

---

## 🖼️ Screenshots

### Home Page
![Home Page - Hero Section](./screenshots/home1.png)
*Beautiful gradient hero section with animated feature cards*

![Home Page - Features](./screenshots/home2.png)
*Interactive feature cards showcasing platform capabilities*

### Dashboard
![Dashboard](./screenshots/dashboard.png)
*Real-time stats cards, post creation form, and blog post management with search functionality*

### Categories
![Categories Management](./screenshots/categories.png)
*Create and manage content categories with descriptions*

---


---

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library with hooks
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Backend
- **[tRPC](https://trpc.io/)** - End-to-end type-safe APIs
- **[Drizzle ORM](https://orm.drizzle.team/)** - TypeScript-first ORM
- **[PostgreSQL](https://www.postgresql.org/)** - Robust relational database
- **[Neon](https://neon.tech/)** - Serverless PostgreSQL hosting

### State Management & Data Fetching
- **[TanStack Query](https://tanstack.com/query)** - Powerful data synchronization
- **React Hooks** - Built-in state management

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database (or Neon account)
- npm or yarn package manager

### Installation

1. **Clone the repository**
git clone <your-repo-url>
cd blog-platform

2. **Install dependencies**
npm install
3. **Set up environment variables**
cp .env.example .env.local
Add your database URL to `.env.local`:
DATABASE_URL="postgresql://user:password@host:5432/database"

4. **Push database schema**
npm run db:push
5. **Run development server**
npm run dev
6. **Open your browser**

---

## 📁 Project Structure

blog-platform/
├── app/ # Next.js App Router
│ ├── api/trpc/[trpc]/ # tRPC API routes
│ ├── categories/ # Categories page
│ ├── dashboard/ # Dashboard page
│ ├── post/[slug]/ # Dynamic post pages
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Landing page
│ └── providers.tsx # React Query provider
├── components/ # React components
│ ├── BlogForm.tsx # Post creation form
│ ├── BlogList.tsx # Posts listing with search
│ └── Navbar.tsx # Navigation bar
├── db/ # Database configuration
│ ├── index.ts # Database client
│ └── schema.ts # Drizzle schema
├── lib/ # Utilities
│ └── trpc.ts # tRPC client setup
├── server/ # tRPC server
│ ├── index.ts # Server setup
│ └── routers/ # API routers
│ ├── posts.ts # Posts endpoints
│ └── categories.ts # Categories endpoints
└── README.md # This file

---

## 🎯 Key Features Explained

### 1. Real-time Search
Filter blog posts instantly as you type. Search works across post titles and content.

### 2. Dynamic Statistics
Dashboard cards automatically update when you:
- Create or delete posts
- Publish or unpublish content
- Add or remove categories

### 3. Type-Safe APIs with tRPC
No need for API documentation - your IDE autocompletes everything:
const posts = trpc.posts.getAll.useQuery(); // Fully typed!

### 4. Draft/Publish Workflow
- Create posts as drafts
- Preview before publishing
- Toggle published status with one click
- Track published count in real-time

### 5. Responsive Design
Breakpoints configured for:
- Mobile: < 768px (stacked layout)
- Tablet: 768px - 1024px
- Desktop: > 1024px (multi-column layout)

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] Create a new blog post
- [ ] Edit post content
- [ ] Publish/unpublish posts
- [ ] Delete posts
- [ ] Create categories
- [ ] Search functionality
- [ ] View individual posts
- [ ] Check mobile responsiveness

### Test on Mobile
1. Open Chrome DevTools (F12)
2. Click device toggle icon
3. Select iPhone or Android device
4. Test all features

---

## 🎨 Customization

### Change Theme Colors
Edit `tailwind.config.js`:
module.exports = {
theme: {
extend: {
colors: {
primary: '#667eea',
secondary: '#764ba2',
},
},
},
};

### Add New Features
1. Update database schema in `db/schema.ts`
2. Run `npm run db:push`
3. Create tRPC router in `server/routers/`
4. Build UI components

---

## 📊 Database Schema

### Posts Table

{
id: serial (primary key)
title: text
slug: text (unique)
content: text
published: boolean
createdAt: timestamp
}

### Categories Table
{
id: serial (primary key)
name: text
slug: text (unique)
description: text (optional)
createdAt: timestamp
}

---

## 🚢 Deployment

### Deploy to Vercel

1. **Push to GitHub**
git add .
git commit -m "Initial commit"
git push origin main

2. **Connect to Vercel**
- Visit [vercel.com](https://vercel.com)
- Import your repository
- Add environment variables
- Deploy!

3. **Set up Database**
- Create Neon database
- Copy connection string
- Add to Vercel environment variables

---

## 📝 API Routes

### Posts
- `posts.getAll` - Fetch all posts
- `posts.getBySlug` - Get single post by slug
- `posts.create` - Create new post
- `posts.update` - Update post (publish/unpublish)
- `posts.delete` - Delete post

### Categories
- `categories.getAll` - Fetch all categories
- `categories.create` - Create new category
- `categories.delete` - Delete category

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Your Name**
- Portfolio: [your-portfolio.com](https://68e76139f34a7f7d992f222a--effulgent-mochi-76443e.netlify.app/)
- LinkedIn: [linkedin.com/in/yourprofile](https://www.linkedin.com/in/sheshank-sidheshwar-b84166252/)
- GitHub: [@yourusername](https://github.com/sidhushesank)

---

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- tRPC for revolutionizing API development
- Drizzle team for the excellent ORM
- TailwindCSS for beautiful, responsive design

---

## 📧 Support

For support, email your-email@example.com or open an issue on GitHub.

---

**⭐ If you found this project helpful, please give it a star!**

Made with ❤️ using Next.js, tRPC, and PostgreSQL

