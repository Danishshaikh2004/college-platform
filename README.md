# 🎓 College Finder Platform

A full-stack web application that helps students explore, compare, and analyze colleges based on key metrics like fees, ratings, and placement percentage.

---

## 🚀 Live Demo

👉 (Add after deployment)

---

## 📌 Features

### 🔍 College Listing & Search

* Browse colleges with a clean UI
* Search colleges by name
* Filter by location and fees

---

### 🏫 College Detail Page

* View detailed information of each college
* Includes:

  * 📍 Location
  * 💰 Fees
  * ⭐ Rating
  * 📊 Placement Percentage

---

### ⚖️ Compare Colleges (Core Feature)

* Select multiple colleges
* Compare side-by-side in a table
* Highlights the best college based on rating
* Includes:

  * Fees
  * Rating
  * Placement %

---

### ❤️ Save Colleges (User-Specific)

* Simple login system (client-side)
* Save / unsave colleges
* Data stored per user using localStorage

---

## 🛠️ Tech Stack

### Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL (Neon)

---

## 🧠 Key Design Decisions

* Used **client-side authentication (localStorage)** for simplicity
* Implemented **user-specific saved colleges** using dynamic localStorage keys
* Focused on **decision-making UX** (compare feature)
* Built modular and reusable components

---

## 📂 Project Structure

```
college-platform/
│
├── frontend/   # Next.js application
├── backend/    # Express API
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Danishshaikh2004/college-platform.git
cd college-platform
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

### 4️⃣ Open Application

```
http://localhost:3000
```

---

## 🔐 Authentication Note

This project uses **client-side authentication (localStorage)** for demonstration purposes.
In a production environment, this would be replaced with:

* JWT authentication
* Secure backend sessions
* Database-based user management

---

## 📊 Future Improvements

* Backend authentication (JWT)
* Store saved colleges in database
* Add ranking system for better comparison
* Add college reviews & ratings
* Improve mobile responsiveness

---

## 🎥 Demo Video

👉 (Add Loom video link here)

---

## 👨‍💻 Author

**Danish Shaikh**
GitHub: https://github.com/Danishshaikh2004

---
