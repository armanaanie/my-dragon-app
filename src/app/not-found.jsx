'use client';

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-7xl font-extrabold text-gray-900">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-2 rounded-2xl bg-black text-white hover:bg-gray-800 transition"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 rounded-2xl border border-gray-300 hover:bg-gray-100 transition"
          >
            Go Back
          </button>
        </div>

        <div className="mt-10 text-sm text-gray-400">
          Error Code: 404_NOT_FOUND
        </div>
      </div>
    </div>
  );
}
