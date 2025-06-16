# 🧠 AI-Enhanced Note Editor

A modern note-taking app with auto-save, Google login, and AI-powered enhancements.

![home 2](https://github.com/user-attachments/assets/56b66724-1ca6-4fe1-adc4-9df1df604520)

![home](https://github.com/user-attachments/assets/805ca1f4-abb5-44c5-a49f-9ede481a31eb)


![login](https://github.com/user-attachments/assets/dbf8ee34-563e-4a71-8882-54ba355fe1ee)


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


