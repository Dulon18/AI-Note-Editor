import React from 'react';

export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-2xl font-bold text-blue-700 mb-4">Login to AI Note Editor</h1>
                <p className="text-sm text-gray-600 mb-6">Sign in with your Google account</p>

                <a
                    href="/auth/redirect"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full inline-flex items-center"
                >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="w-5 h-5 mr-2"
                    />
                    Continue with Google
                </a>
            </div>
        </div>
    );
}
