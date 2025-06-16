import React from 'react';
import { Link, usePage } from '@inertiajs/react';

export default function AppLayout({ children }) {
  const { auth } = usePage().props;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
                        <img src="/robot.png" alt="Bot Icon" className="w-8 h-8" />
                        <h1 className="text-xl font-bold text-blue-600">AI Note Editor</h1>
                    </div>
          <nav className="space-x-4">
            <Link href="/" className="text-pink-700 font-bold hover:text-blue-500">Home</Link>
            {auth?.user ? (
              <>
                <Link href="/dashboard" className="text-gray-700 hover:text-blue-500">Dashboard</Link>
                <Link href="/notes" className="text-gray-700 hover:text-blue-500">My Notes</Link>
                <Link method="post" href="/logout" as="button" className="text-red-600 hover:text-red-800">Logout</Link>
              </>
            ) : (
              <Link href="/login" className="text-blue-600 hover:text-blue-800">Login</Link>
            )}
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow px-4 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white text-center py-4 text-sm text-gray-500 border-t">
        &copy; {new Date().getFullYear()} AI Note Editor — Laravel + React + OpenAI
      </footer>
    </div>
  );
}
