

# R.G.N. Public School – Complete Website Plan

## Overview
A professional, fully responsive demo website for R.G.N. Public School (CBSE, Gaya, Bihar) with a blue & white school theme. All dynamic content powered by mock JSON data, structured for easy future backend integration. Includes a frontend-only admin panel.

---

## Design & Theme
- **Color palette**: Primary blue (#1e40af / #2563eb), white backgrounds, light gray accents
- **Typography**: Clean sans-serif, professional and readable
- **Mobile-first responsive design** across all pages
- **Consistent header** with school name/logo placeholder, navigation menu, and mobile hamburger menu
- **Consistent footer** with contact info, quick links, and social media placeholders

---

## Public Pages

### 1. Home Page
- **Hero section** with school name "R.G.N. Public School", tagline, and a call-to-action button (e.g., "Apply Now")
- **About preview** – short paragraph with "Read More" link
- **Latest News** – 3 dynamic cards from mock data
- **Upcoming Events** – timeline or card layout
- **Quick Links** – Admission, Contact, Academics cards with icons
- **Call-to-action** banner (e.g., "Admissions Open for 2025-26")
- **Footer** with address, phone, email, and links

### 2. About Us Page
- School overview with history
- Mission & Vision in styled cards
- Principal's message with photo placeholder
- Infrastructure highlights grid (Library, Labs, Playground, etc.)

### 3. Academics Page
- Classes offered (Nursery to Class XII) in a grid/table
- CBSE Curriculum overview section
- Co-curricular activities (Sports, Arts, Music, etc.) with icons

### 4. Admission Page
- Admission information panel
- Step-by-step process UI (numbered steps with icons)
- Admission enquiry form (Name, Class, Phone, Email, Message) – frontend validation only, no submission

### 5. News & Events Page
- Grid layout of news/event cards from mock data
- Category filter tabs (All / News / Events)
- Mocked pagination controls

### 6. Gallery Page
- Image grid using stock education placeholder images
- Category tabs (Events / Campus / Activities)
- Lightbox-style image preview on click

### 7. Contact Page
- School address: Gaya - Sherghati Rd, Mahavir Colony, Gaya, Bihar 823001
- Phone: 091995 19154
- Google Maps embed placeholder (iframe)
- Contact form (Name, Email, Subject, Message) – frontend only

---

## Admin Panel (Frontend Only)

### Admin Login Page
- Simple login form UI (email/password fields, no real auth)
- Redirects to dashboard on button click

### Dashboard Layout
- Sidebar navigation with links to all admin sections
- Top bar with admin name placeholder and logout button
- Summary cards on dashboard (Total News, Events, Gallery Items, Enquiries)

### Admin Sections
- **Manage News** – Table with mock entries, Add/Edit/Delete button UIs
- **Manage Events** – Table with mock entries, Add/Edit/Delete button UIs
- **Manage Gallery** – Image upload placeholder UI, grid of uploaded images
- **Manage Notices** – List of notices with add/edit/delete
- **Admission Enquiries** – Read-only data table showing mock form submissions

---

## Data Structure
All mock data stored in organized JSON/TypeScript files (`src/data/`) for:
- News articles
- Events
- Gallery images
- Notices
- Admission enquiries

This makes future API replacement straightforward.

---

## Navigation & Routing
- Public routes: `/`, `/about`, `/academics`, `/admission`, `/news-events`, `/gallery`, `/contact`
- Admin routes: `/admin/login`, `/admin/dashboard`, `/admin/news`, `/admin/events`, `/admin/gallery`, `/admin/notices`, `/admin/enquiries`

