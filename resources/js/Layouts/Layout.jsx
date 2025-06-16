import React from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';

export default function Layout({ children }) {
    const { auth } = usePage().props;
    const { post } = useForm();

    const handleLogout = (e) => {
        e.preventDefault();
        post(route('logout'));
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <img src="/robot.png" alt="Bot Icon" className="w-8 h-8" />
                        <h1 className="text-xl font-bold text-blue-600">AI Note Editor</h1>
                    </div>
                    {auth?.user ? (
                        <div className="flex items-center space-x-4">
                            <img
                                src={auth.user.avatar || '/user.png'}
                                alt="Avatar"
                                className="w-10 h-10 rounded-full object-cover border"
                            />
                            <span className="font-bold text-green-500">{auth.user.name}</span>

                            <Link href="/" className="text-sm font-bold text-pink-600 hover:underline">
                                Home
                            </Link>

                            <button
                                onClick={handleLogout}
                                className="text-sm font-bold text-red-600 hover:underline"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-4">
                            <Link
                                href="/"
                                className="text-sm font-bold text-pink-600 hover:underline"
                            >
                                Home
                            </Link>
                            <Link
                                href="/login"
                                className="text-sm font-bold text-blue-600 hover:underline"
                            >
                                Login
                            </Link>
                        </div>
                    )}
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto py-6 px-4">
                {children}
            </main>
        </div>
    );
}
