import React from 'react';
import AppLayout from '@/Layouts/AppLayout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Home() {
  const { auth } = usePage().props;
  const isLoggedIn = !!auth.user;

  return (
    <>
      <Head title="Home" />
      <AppLayout>
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <div className="bg-white p-8 rounded-2xl shadow-md max-w-2xl w-full">
            <div className="flex justify-center items-center mb-6">
              <img
                src="/robot.png"
                alt="AI Robot"
                className="w-16 h-16 object-contain animate-bounce"
              />
            </div>
            <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
              Welcome to <span className="text-purple-600">AI Note Editor</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Your intelligent companion for organizing and enhancing your notes,
              powered by <span className="font-semibold text-gray-800">Laravel</span>,{' '}
              <span className="font-semibold text-gray-800">React</span>, and{' '}
              <span className="font-semibold text-gray-800">OpenAI</span>.
            </p>

            {isLoggedIn ? (
              <Link
                href="/notes/create"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow transition"
              >
                ✍️ Create a New Note
              </Link>
            ) : (
              <Link
                href="/login"
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow transition"
              >
                🔐 Login with Google to Start
              </Link>
            )}
          </div>
        </div>
      </AppLayout>
    </>
  );
}
