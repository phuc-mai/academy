# Academy - Full Stack Online Learning Platform

Welcome to Academy, a full stack online learning platform inspired by Udemy. This project is built using modern technologies including Next.js 14, TypeScript, React, MySQL, Prisma, Clerk, React-Hook-Form, Stripe, Tailwind CSS, Shadcn UI, and UploadThing. This project is perfect for both beginner and experienced developers who want to master Next.js 14 App Router and build a comprehensive online learning platform.

## Key Features

- **Master Server side & Client side rendering**
- **Manage MySQL database with Prisma ORM and Aiven cloud data**
- **Create & Edit Courses with Curriculum using React Hook Form with Zod validation**
- **Upload & store images, videos, and file attachments with UploadThing**
- **Reorder section position with Drag n’ Drop**
- **Create API for CRUD operations**
- **Search & Filter Courses by title and category**
- **Purchase Courses using Stripe**
- **Sign up & Sign in Authentication using Clerk**
- **Rich text editor for course and curriculum descriptions**
- **Instructor performance dashboard with charts**
- **Mark sections as Completed or Uncompleted**
- **Progress Calculation of each Course**
- **Video processing using Mux**
- **Display video player using Mux**

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- MySQL
- Aiven cloud data account (optional for cloud data management)

### Setup Project

1. Clone the repository:

    ```bash
    git clone https://github.com/phuc-mai/academy.git
    cd academy
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following variables:

    ```env
    DATABASE_URL=your_mysql_database_url
    NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
    CLERK_API_KEY=your_clerk_api_key
    STRIPE_PUBLIC_KEY=your_stripe_public_key
    STRIPE_SECRET_KEY=your_stripe_secret_key
    MUX_TOKEN_ID=your_mux_token_id
    MUX_TOKEN_SECRET=your_mux_token_secret
    UPLOADTHING_SECRET=your_uploadthing_secret
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

### Authentication

Set up authentication using Clerk for user management and authentication.

### Course Management

Create, edit, and delete courses with a comprehensive curriculum. Use React Hook Form with Zod validation for form handling.

### File Upload

Upload and store images, videos, and file attachments with UploadThing.

### Course Ordering

Reorder course sections with Drag n’ Drop functionality.

### Payment Integration

Integrate Stripe for purchasing courses.

### Performance Dashboard

Monitor instructor performance with a detailed dashboard and charts.

### Video Processing

Process and display videos using Mux.

## Technologies Used

- **Next.js 14**
- **TypeScript**
- **React**
- **MySQL**
- **Prisma**
- **Clerk**
- **React-Hook-Form**
- **Stripe**
- **Tailwind CSS**
- **Shadcn UI**
- **UploadThing**
- **Mux**


