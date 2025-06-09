import Link from 'next/link';
import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-2">Page Not Found</p>
      <p className="text-gray-400 mb-6">The page you’re looking for doesn’t exist or was moved.</p>
      <Link href="/" className="px-6 py-2 bg-blue-600 hover:bg-blue-500 transition rounded-full text-white font-semibold cursor-pointer ">
        Go Back Home
      </Link>
    </div>
  );
}