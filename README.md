# Khalid Kanane — Portfolio

> Full-Stack Developer | Next.js | TypeScript | Laravel | PostgreSQL

## 👋 About

Welcome to my personal portfolio.

I am a Full-Stack Developer interested in building modern, scalable and user-friendly web applications.

This project is also my learning project for improving my skills with Next.js, TypeScript, Supabase, GitHub Actions and modern deployment workflows.

## 🚀 Goals

The main goals of this project are:

* Build a professional developer portfolio
* Learn Next.js and TypeScript
* Practice modern frontend development
* Use Supabase and PostgreSQL for cloud data storage
* Learn authentication and database security
* Practice Git and GitHub workflows
* Implement CI with GitHub Actions
* Deploy a production application
* Learn the complete development workflow from development to production

## 🛠️ Technologies

### Frontend

* Next.js
* TypeScript
* Tailwind CSS
* Framer Motion

### Database & Backend Services

* Supabase
* PostgreSQL
* Supabase Authentication

### Development & DevOps

* Git
* GitHub
* GitHub Actions
* Vercel

## ✨ Features

* Responsive portfolio
* About section
* Skills section
* Projects showcase
* Project details
* Education and experience
* Contact section
* Supabase database
* Authentication
* Admin dashboard
* Project management
* CI workflow with GitHub Actions
* Production deployment

## 🏗️ Architecture

```text
                    GitHub
                       │
                       ▼
              GitHub Actions
                       │
                 CI / Checks
                       │
                       ▼
                    Vercel
                       │
                       ▼
                 Next.js App
                  │        │
                  │        │
                  ▼        ▼
             Supabase    Users
                  │
                  ▼
              PostgreSQL
```

## 📁 Project Structure

```text
portfolio/
├── app/
├── components/
├── lib/
├── public/
├── .github/
│   └── workflows/
├── README.md
├── package.json
├── tsconfig.json
└── .gitignore
```

## 💻 Getting Started

Clone the repository:

```bash
git clone <YOUR_REPOSITORY_URL>
cd portfolio
```

Install dependencies:

```bash
npm install
```

Create your environment file:

```bash
.env.local
```

Add the required environment variables.

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🔐 Environment Variables

The application uses environment variables for Supabase configuration.

Example:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

Do not commit `.env.local` to GitHub.

## 🧪 Development

Before pushing changes:

```bash
npm run lint
npm run build
```

GitHub Actions also runs automated checks on pushes and pull requests.

## 🚀 Deployment

The application is deployed using Vercel.

The production deployment is connected to the GitHub repository so that changes can be automatically deployed after they pass the configured checks.

## 📚 Learning Journey

This project is being developed progressively.

### Phase 1

* Git & GitHub
* Next.js
* TypeScript
* Tailwind CSS

### Phase 2

* Portfolio development
* Responsive design
* Project pages

### Phase 3

* Supabase
* PostgreSQL
* Authentication
* Admin dashboard

### Phase 4

* GitHub Actions
* CI
* Production deployment
* Domain & DNS
* HTTPS

## 📌 Project Status

**Status:** In Development 🚧

The project is being developed step by step as part of my Full-Stack development learning journey.

## 📄 License

This project is for personal and educational purposes.
