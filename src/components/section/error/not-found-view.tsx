/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";

export default function NotFoundView() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-4 py-12 text-center">
      <h1 className="mb-4 text-5xl font-extrabold text-primaryBlue transition-opacity duration-700 opacity-100">
        404
      </h1>

      <h2 className="mb-4 text-2xl font-semibold text-primaryBlack transition-opacity duration-700 opacity-100">
        Page not found!
      </h2>

      <p className="mb-8 max-w-md text-gray-500 transition-opacity duration-700 opacity-100">
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.
      </p>

      <img
        src="assets/illustrations/illustration-404.svg"
        alt="Page not found!"
        className="mx-auto mb-10 h-auto max-w-xs transition-opacity duration-700 opacity-100"
      />

      <Link
        href="/"
        className="inline-block rounded-md bg-primaryBlue px-6 py-3 text-white font-semibold transition hover:bg-white hover:text-primaryBlue hover:border hover:border-primaryBlue cursor-pointer"
      >
        Go to home
      </Link>
    </div>
  );
}
