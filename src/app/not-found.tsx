import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-6">
      <div className="text-center max-w-xl">
        {/* 404 SVG */}
        <div className="flex justify-center mb-8">
          <svg
            width="320"
            height="220"
            viewBox="0 0 320 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Circle */}
            <circle cx="160" cy="110" r="90" fill="#F3F4F6" />

            {/* 4 */}
            <path
              d="M55 135V105L95 55H115V135H95V120H55V100L90 55H55V135Z"
              fill="#111827"
            />

            {/* 0 */}
            <ellipse
              cx="160"
              cy="105"
              rx="35"
              ry="55"
              stroke="#111827"
              strokeWidth="18"
            />

            {/* 4 */}
            <path
              d="M205 135V105L245 55H265V135H245V120H205V100L240 55H205V135Z"
              fill="#111827"
            />

            {/* Small decorative stars */}
            <circle cx="40" cy="65" r="5" fill="#9CA3AF" />
            <circle cx="280" cy="75" r="5" fill="#9CA3AF" />
            <circle cx="60" cy="165" r="4" fill="#D1D5DB" />
            <circle cx="265" cy="165" r="4" fill="#D1D5DB" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold">
          404 — Missed that lift
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          The page you wanted is not in the library. Head back to the floor and
          pick a workout that exists.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 rounded-lg bg-gray-900 px-7 py-3
                     text-white font-medium transition hover:bg-gray-700"
        >
          ← Back to workouts
        </Link>
      </div>
    </div>
  );
}
