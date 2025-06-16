# 🧠 AI-Enhanced Note Editor

A modern note-taking app with auto-save, Google login, and AI-powered enhancements.


<p align="center">
  <strong>Home Page</strong><br />
  <img src="https://github.com/user-attachments/assets/56b66724-1ca6-4fe1-adc4-9df1df604520" width="600" alt="Home 2" />
</p>

<p align="center">
  <strong>Home Page (After Login View)</strong><br />
  <img src="https://github.com/user-attachments/assets/805ca1f4-abb5-44c5-a49f-9ede481a31eb" width="600" alt="Home" />
</p>

<p align="center">
  <strong>Login Page</strong><br />
  <img src="https://github.com/user-attachments/assets/dbf8ee34-563e-4a71-8882-54ba355fe1ee" width="600" alt="Login" />
</p>

<p align="center">
  <strong>Dashboard</strong><br />
  <img src="https://github.com/user-attachments/assets/5547b9a9-678c-45b3-842a-b01b7411698d" width="600" alt="Dashboard" />
</p>

<p align="center">
  <strong>Create New Note</strong><br />
  <img src="https://github.com/user-attachments/assets/83966312-72c4-4060-8a3c-22e780d0aaa5" width="600" alt="Create New Note" />
</p>


## ✨ Features

- Google OAuth login
- Rich-text note editor with auto-save
- AI-powered note summarization
- Real-time streaming responses from OpenAI
- Built with Laravel, React, Inertia.js, and Tailwind CSS


## 🛠 Tech Stack

- Backend: Laravel 12
- Frontend: React + Inertia.js
- Auth: Google OAuth via Laravel Socialite
- AI: OpenAI GPT-4.1 Nano (Streaming)
- Styling: Tailwind CSS

## 🔧 Setup Instructions

```bash
git clone https://github.com/Dulon18/AI-Note-Editor.git
cd ai-note-editor
cp .env.example .env
composer install
php artisan key:generate
npm install && npm run dev
php artisan migrate


