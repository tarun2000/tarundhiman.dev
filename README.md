# Developer Portfolio Website

A modern, Apple-inspired portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Single-view tabbed interface** - Content changes smoothly within one container
- **Smooth animations** - Powered by Framer Motion for premium feel
- **Responsive design** - Works beautifully on all devices
- **Clean & minimal** - Apple-inspired design with light theme
- **Type-safe** - Full TypeScript support

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
my-site/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Main page with tab state
│   └── globals.css      # Global styles
├── components/
│   ├── NavbarTabs.tsx   # Tab navigation
│   ├── ContentContainer.tsx  # Animated content wrapper
│   ├── AboutSection.tsx      # About tab content
│   ├── ExperienceSection.tsx # Experience tab content
│   ├── ExperienceCard.tsx    # Individual experience card
│   ├── ProjectsSection.tsx   # Projects tab content
│   └── ProjectCard.tsx       # Individual project card
└── data/
    ├── experience.ts    # Experience data
    └── projects.ts      # Projects data
```

## Customization

- Update profile information in `components/AboutSection.tsx`
- Modify experience data in `data/experience.ts`
- Add/edit projects in `data/projects.ts`
- Adjust styling in `app/globals.css` and component files

## Build

To create a production build:

```bash
npm run build
npm start
```
