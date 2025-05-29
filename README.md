# Volunteer Yatra - Senior Developer Application

## Introduction

Hello, my name is **Dhruv Rekhawat**. I am a freelance developer and technical advisor with over three years of experience building and consulting on a wide range of web applications. I am passionate about creating clean, efficient, and scalable code.

This project serves as a demonstration of my skills and is submitted as part of my application for the **Senior Developer position at Volunteer Yatra**. I have aimed to create a modern, user-friendly, and well-structured application that reflects the quality of work I would bring to your team.

---

## Project Documentation

This documentation provides an overview of the "Volunteer Yatra" Next.js application, detailing its structure, components, types, and styling.

---

## Project Structure

The project is a Next.js application organized using the App Router. The key directories and files are as follows:

```
volunteer-yatra/
├── app/
│   ├── layout.tsx           # Root layout with global font configuration
│   ├── globals.css          # Global stylesheet with Tailwind CSS
│   ├── page.tsx            # Main entry point/homepage
│   ├── loading.tsx         # Loading component for Suspense boundaries
│   └── opportunities/
│       ├── page.tsx        # Browse and filter volunteer opportunities
│       └── [id]/
│           └── page.tsx    # Dynamic detail page for single opportunity
├── components/             # Reusable React components
├── data/                  # Mock data files (e.g., mock-opportunities.ts)
└── public/               # Static assets (fonts, images)
```

### Key Files Description

- **`app/layout.tsx`**: The root layout of the application, which includes the `<body>` and `<html>` tags. It also configures and applies the "Sansation" font globally.
- **`app/globals.css`**: The global stylesheet, which imports Tailwind CSS and defines custom themes (light and dark modes) using CSS variables.
- **`app/page.tsx`**: The main entry point or homepage of the app, which renders the OpportunitiesPage.
- **`app/loading.tsx`**: A loading component that can be used with Next.js Suspense boundaries.
- **`app/opportunities/page.tsx`**: The main page for browsing and filtering volunteer opportunities.
- **`app/opportunities/[id]/page.tsx`**: The dynamic detail page for a single volunteer opportunity.

---

## Data Types

These are the primary data structures used within the application.

### Opportunity

Represents a single volunteering opportunity on the main list page.

```typescript
export interface Opportunity {
  id: string;
  title: string;
  location: string;
  image: string;
  duration: string;
  workType: string;
  amenities: string[];
  isNew: boolean;
  isFavorited: boolean;
  tags: string[];
}
```

### FilterCategory

Represents a category used for filtering opportunities.

```typescript
export interface FilterCategory {
  id: string;
  name: string;
  icon: string;
  isActive: boolean;
}
```

### OpportunityDetail

Represents the detailed information for a single opportunity, as seen on the detail page. This is an expanded version of the Opportunity type.

```typescript
export interface OpportunityDetail {
  id: string;
  title: string;
  location: string;
  images: string[];
  stayAtLeast: string;
  stayUpTo: string;
  skillsRequired: string[];
  description: string;
  whatYouOffer: {
    // Additional properties for what volunteers offer
  };
  whatYouGet: {
    icon: string;
    title: string;
  }[];
  aboutExperience: string;
  rating: number;
  reviewCount: number;
  reviews: {
    id: string;
    rating: number;
    date: string;
    text: string;
    author: string;
    authorSince: string;
  }[];
  host: {
    name: string;
    opportunities: number;
    rating: number;
    yearsHosting: number;
    description: string;
  };
  accommodationType: string;
  capacity: string;
}
```

---

## Pages

### `app/page.tsx`

The main entry point for the application. It simply renders the `OpportunitiesPage` component to display the list of opportunities as the homepage.

### `app/opportunities/page.tsx`

This page displays a list of available volunteering opportunities.

**Features:**
- **State Management**: Uses the `useState` hook to manage categories, opportunities, and the `searchTerm`
- **Filtering**: Opportunities are filtered based on the selected category and the entered search term. The filtering logic is memoized using `useMemo` for performance
- **Interactivity**: Provides functions to handle category changes, toggle the favorite status of an opportunity, update the search term, and navigate to the detail page

**Components Used:**
- `Header`
- `SearchBar`
- `CategoryFilter`
- `OpportunityCard`
- `MobileBottomNav`

### `app/opportunities/[id]/page.tsx`

This page displays the detailed information for a single opportunity.

**Features:**
- **Layout**: Features a fully responsive design with distinct, optimized layouts for mobile and desktop screens
- **State Management**: Uses `useState` to manage:
  - The favorite status (`isFavorited`)
  - The visibility of the full-screen image viewer (`showFullScreenImage`)
  - The current index of the image carousels
- **Interactive Elements**: 
  - Interactive image gallery (carousel on mobile, grid on desktop)
  - Detailed information sections
  - User reviews display
  - Host information
- **Actions**: Users can favorite the opportunity, share it, and proceed to an "Apply Now" call-to-action

---

## Components

Based on the imports in the page files, here are the core reusable components:

### `Header`
The primary header component for the application.

### `SearchBar`
A search input component that allows users to filter opportunities by keywords. It uses a callback function (`onSearch`) to pass the search term to the parent page.

### `CategoryFilter`
A component that displays a list of filterable categories. It uses a callback (`onCategoryChange`) to handle category selection.

### `OpportunityCard`
A card component that renders a summary of a single opportunity. It receives an opportunity object as a prop and includes a callback for favoriting (`onToggleFavorite`).

### `MobileBottomNav`
A navigation bar fixed to the bottom of the screen on mobile devices for improved user experience.

---

## Styling

### `app/globals.css`

The central file for the application's styling.

**Key Features:**
- **Framework**: Built on Tailwind CSS for a utility-first styling approach
- **Theming**: Defines a comprehensive set of CSS variables for theming, with full support for both light mode (`:root`) and dark mode (`.dark`). These variables control colors for:
  - Background
  - Text
  - Borders
  - Custom components
- **Custom Fonts**: Sets up the "Sansation" font family, which is imported locally and configured in `app/layout.tsx`
- **Base Styles**: Applies consistent styling including:
  - Border-border color for all elements
  - Outline-ring for focus states
  - Default `bg-background` and `text-foreground` on the body

---

## Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Development Server

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

### Font Optimization

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load the Sansation font family.

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Next.js GitHub repository](https://github.com/vercel/next.js) - feedback and contributions welcome!

---

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Technical Highlights

This application demonstrates several modern web development practices:

- **Next.js App Router**: Utilizing the latest Next.js routing system
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with desktop optimizations
- **Performance Optimization**: Memoized filtering and lazy loading
- **User Experience**: Intuitive navigation and interactive elements
- **Clean Architecture**: Well-organized component structure and separation of concerns
