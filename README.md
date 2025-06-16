# 🧠 AI-Enhanced Note Editor

A modern note-taking app with auto-save, Google login, and AI-powered enhancements.

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
git clone https://github.com/yourusername/ai-note-editor.git
cd ai-note-editor
cp .env.example .env
composer install
php artisan key:generate
npm install && npm run dev
php artisan migrate
