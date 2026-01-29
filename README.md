# This is Dashboard design 

## Project Overview
**Dashboard App** is a responsive admin panel built with **Next.js**, **React**, and **Tailwind CSS**.  
The dashboard provides a clear and interactive UI to manage appointments, call logs, and analytics in real-time.

---

## Features

### 1. Appointment Cards
- Displays total bookings, AI-booked appointments, and alerts.
- Responsive grid layout: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`.

### 2. Call Log
- Shows detailed call list with status badges, duration, and outcomes.
- Filter and search functionality included.
- Mobile-friendly design with scrollable table and responsive cards.

### 3. Appointments Table
- Displays all client appointments with columns:
  - Client Name
  - Phone
  - Email
  - Device
  - Repair Type
  - Date
  - Slot
  - Start Time
- Fully responsive:
  - Desktop → table layout
  - Mobile → card view for each row
- Horizontal scroll enabled for small devices (`overflow-x-auto`).

### 4. Google Fonts
- Integrated via Next.js `next/font/google`:
  - Font used: `Inter`
  - Optimized for performance and App Router compatibility
- Tailwind CSS integration with font variables for global use.

---

## Tech Stack
- **Frontend:** Next.js 13+, React 18
- **Styling:** Tailwind CSS 3+, custom CSS variables
- **Icons:** Lucide-react
- **Animations:** react-countup
- **Authentication & Backend:** (Optional / Future Integration)
- **Deployment:** Vercel / Surge

---

## Responsive Design Strategy
- Mobile-first design.
- Cards and tables adapt using Tailwind `grid-cols-*` and `flex-wrap`.
- Fixed height avoided for dynamic content.
- Scrollable containers for tables with many columns.
- Typography and padding adjusted for readability on small screens.

---


