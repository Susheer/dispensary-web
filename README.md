
# 🏥 Clinic Web App - Prescription Viewer

This application enables patients to securely view prescriptions pushed from a mobile app, without the need for a full-fledged database. The backend is built using **Node.js + Express**, and the frontend uses **Next.js + Tailwind CSS**. Data is stored in lightweight **JSON files**, making this ideal for small clinics or local setups.

---

## ✨ Features

### ✅ Current Features

- 📦 Lightweight backend using JSON file storage (no database)
- 🔐 Secure user login with **JWT-based authentication**
- 🧾 Upload and store up to **100 prescriptions** from a mobile app
- 🗂️ Auto-delete oldest prescriptions when limit exceeds
- 🖥️ Web-based dashboard to **view prescriptions**
- 🧪 Schema validation with AJV for incoming prescriptions
- 💡 Admin utility scripts for testing, resetting data

---

## 🔄 Application Flow

### 🔧 Setup
1. Mobile app creates users and pushes prescriptions via REST API.
2. Web server stores users and prescriptions in separate `.json` files.
3. Web frontend allows users to log in and view their prescriptions.

### 📲 Mobile App Responsibilities
- Create a user via `POST /api/users`
- Log in using credentials to obtain a JWT
- Push prescriptions to `/api/prescriptions` (max 100)

### 🖥️ Web Portal Responsibilities
- Authenticate users with JWT
- Fetch prescriptions via API
- Display prescriptions in a responsive UI

---

## 🧱 Tech Stack

| Layer      | Technology        |
|------------|-------------------|
| Backend    | Node.js, Express  |
| Frontend   | Next.js, Tailwind CSS |
| Storage    | JSON files (users.json, prescriptions.json) |
| Auth       | JWT, bcrypt       |

---

## 🚀 Possible Future Enhancements

- 📦 Move to a lightweight database like SQLite or Firebase
- 📅 Add prescription date filters
- 📥 Support for file attachments (PDFs, reports)
- 📱 Mobile push notifications when prescription is added
- 📝 Role-based access (Admin, Doctor, Patient)
- 🔒 Multi-factor authentication for login
- 🌐 Multi-language UI support

---

## 🗂️ Repository Structure

```
/backend
  /routes
  /controllers
  /utils
  /data
  server.js

/frontend
  /pages
  /components
  /styles
```

---

## 📘 Getting Started

> Detailed developer setup instructions are in the [Developer Guide](clinic-web-app-developer-guide.md)  
> Task-based issue list is in the [GitHub Issues](github-issues-clinic-web-app.md)

