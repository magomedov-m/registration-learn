import React from 'react'

type Props = object

export default function NavigationMenu({}: Props) {
  return (
    <header className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
      {/* Logo / Brand */}
      <div className="text-xl font-bold text-purple-600">Better-Auth</div>

      {/* Navigation Menu */}
      <nav>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <a
              className="hover:text-purple-600 transition-colors"
            >
              Main
            </a>
          </li>
          <li>
            <a
              href="/dashboard"
              className="hover:text-purple-600 transition-colors"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/signin"
              className="hover:text-purple-600 transition-colors"
            >
              Sign In
            </a>
          </li>
        </ul>
      </nav>

      {/* Optional Profile / CTA */}
      <div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700">
          Get Started
        </button>
      </div>
    </header>
  )
}