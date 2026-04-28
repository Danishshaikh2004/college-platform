# 🎓 College Finder Platform

A full-stack web application that helps students explore, compare, and analyze colleges based on key metrics like fees, ratings, and placement percentage.

---

## 🚀 Live Demo

👉 (Add after deployment)

---

## 📌 Features

### 🔍 1. College Listing & Search

* Browse colleges with a clean UI
* Search colleges by name
* Filter by location and fees

---

### 🏫 2. College Detail Page

* View detailed information of each college
* Includes:

  * Location
  * Fees
  * Rating
  * Placement Percentage

---

### ⚖️ 3. Compare Colleges (Core Feature)

* Select multiple colleges
* Compare side-by-side in a table
* Highlights best college based on rating
* Includes:

  * Fees
  * Rating
  * Placement %

---

### ❤️ 4. Save Colleges (User-Specific)

* Simple login system (client-side)
* Save/unsave colleges
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
* Built modular components for scalability and maintainability

---

## 📂 Project Structure

college-platform/
│
├── frontend/   # Next.js application
├── backend/    # Express API
└── README.md

---

## ⚙️ Setup Instructions

### 1. Clone Repository

git clone https://github.com/your-username/college-platform.git
cd college-platform

---

### 2. Backend Setup

cd backend
npm install
npm run dev

---

### 3. Frontend Setup

cd frontend
npm install
npm run dev

---

### 4. Open Application

http://localhost:3000

---

## 🔐 Authentication Note

This project uses **client-side authentication** for demonstration purposes.
In a production environment, this would be replaced with:

* JWT authentication
* Secure backend sessions
* Database-based user management

---

## 📊 Future Improvements

* Backend authentication (JWT)
* Save colleges in database (user-specific)
* Add ranking system for better comparison
* Add reviews & ratings
* Improve mobile responsiveness
* Add pagination & sorting

---

## 🎥 Demo Video

👉 (Add Loom video link here)

---

## 👨‍💻 Author

Danish Shaikh
GitHub: https://github.com/your-username

---
