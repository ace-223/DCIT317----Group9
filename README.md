# University Lost and Found Management System

A centralized, privacy-first web platform designed to bridge the gap between students who find misplaced items (or turn them in to hall porters and campus security) and owners searching for them across the University of Ghana campus—without exposing personal phone numbers or risking false ownership claims.

---

## Table of Contents
- [Overview](#overview)
- [User Roles & Access Control](#user-roles--access-control)
- [Core Workflows](#core-workflows)
- [System Architecture & Modules](#system-architecture--modules)
- [Getting Started](#getting-started)
- [Team](#team)

---

## Overview

Misplaced items on campus—such as student IDs, laptop chargers, keys, and books—often go unclaimed because recovery efforts are scattered across fragmented WhatsApp groups and physical noticeboards. Sharing personal contact details publicly also exposes students to spam and fraudulent claims.

This system solves both problems through:
- **Domain-Restricted Access:** Verified authentication restricted to official University of Ghana email addresses (`@st.ug.edu.gh` and `@ug.edu.gh`).
- **Blind Verification Clues:** Sensitive identifying details stay hidden from public listings and are used to verify true ownership before contact or pickup details are shared.
- **Automated Smart Matching:** Cross-checks newly logged found items against active lost reports and alerts potential owners automatically.

---

## User Roles & Access Control

| Role | Access Scope | Key Capabilities |
| :--- | :--- | :--- |
| **Regular Users** (Students & Staff) | Verified `@st.ug.edu.gh` / `@ug.edu.gh` accounts | Submit lost reports, post found items, search/filter the catalog, and submit ownership claims. |
| **Custodians / Moderators** (Hall Porters & Campus Security) | Elevated desk/security accounts | Log physical items dropped off at hall lodges or security posts, verify ownership claims, and mark items as returned. |
| **System Administrators** (Group 9 / IT Support) | Full administrative access | Manage user accounts, remove duplicate or expired listings, and monitor recovery analytics. |

---

## Core Workflows

### 1. Reporting a Found Item (Security-First Listing)
1. **Item Logging:** The finder or hall porter submits a listing with the **Category** (`Electronics`, `ID Cards`, `Books/Stationery`, `Keys`, `Accessories`), **Date/Time Found**, and **Campus Location** (e.g., Balme Library, JQB, Night Market, Pent Hall).
2. **Public vs. Hidden Details:**
   - **Publicly Visible:** Category, general campus zone, date found, and a general title or cropped/blurred thumbnail (e.g., *"Black HP Laptop Charger found near JQB"*).
   - **Hidden Verification Clue:** Specific identifying marks entered by the finder (e.g., *"Blue sticker on the power brick"* or *"Student ID ending in 402"*), hidden from public view.
3. **Custody Status:** Indicates whether the finder is holding the item personally or deposited it at a designated collection point (e.g., Commonwealth Hall Porter's Lodge or Main Security Post).

### 2. Reporting a Lost Item & Smart Matching
1. **Lost Report Submission:** A user files a **Lost** ticket containing the item category, approximate location lost, date, and private identifying details.
2. **Automated Keyword & Category Matching:** Whenever a new **Found** item is logged, the engine compares its category, date, and keywords against open **Lost** tickets.
3. **Instant Notification:** When a match exceeds the threshold score, an automated email/in-app alert is sent to the user who reported the item lost.

### 3. Ownership Verification & Safe Handover
1. **Claim Request:** The owner selects **"Claim This Item"** on a matching listing and answers the hidden verification prompt (e.g., describing stickers, scratches, or bag contents).
2. **Verification Review:**
   - **Custodian-Held Items:** Hall porters or campus security compare the claimant's response against the hidden clue and approve or reject the claim.
   - **Student-Held Items:** The finder reviews the claimant's answer anonymously via the dashboard and approves or rejects the request.
3. **Handover & Closure:** Once approved, the system unlocks a masked messaging thread or reveals the exact pickup desk (e.g., Legon Hall Porter's Lodge). After handover, the item is marked as **Returned** and archived from active listings.

---

## System Architecture & Modules

Designed for an 8-week implementation window using a lightweight stack:

| Module | Core Functionality | Technical Implementation |
| :--- | :--- | :--- |
| **1. Authentication Module** | University email sign-up, OTP/email link verification, and role-based access control. | Firebase Auth or Supabase Auth (restricted to `@st.ug.edu.gh` & `@ug.edu.gh`) |
| **2. Item Catalog & Search** | Filterable grid of Lost and Found items by category, date range, and campus zone. | Responsive HTML/CSS/JS or React + PostgreSQL / Firestore |
| **3. Media & Privacy Handler** | Compresses uploaded photos and isolates sensitive fields (IDs, serial numbers) from public cards. | Cloudinary or Supabase Storage with public/private field separation |
| **4. Matching & Alert Engine** | Cross-checks new found listings against active lost tickets using category and keyword overlap. | Backend webhook/trigger dispatching automated email alerts |
| **5. Admin & Audit Dashboard** | Tracks total items logged, recovery rate %, pending claims, and flags inactive posts (>30 days). | Administrative analytics view for Campus Security & audit reviews |

---

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ace-223/DCIT317----Group9.git
   cd DCIT317----Group9
   ```
2. **Configure environment variables:**
   Create a `.env` file in the root directory and add your authentication, database, and storage keys.
3. **Run the application locally:**
   Open `index.html` in your browser or start your local development server (`npm install && npm run dev`).

---

## Team

Developed by **Group 9** — University of Ghana, Legon (DCIT 317: IT Project Management).
