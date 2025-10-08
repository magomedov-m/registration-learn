import { auth } from '@/utils/auth'
import React from 'react'

type Session = typeof auth.$Infer.Session;

export default function NavigationMenu({session}: { session: Session | null }) {
  
  return (
    <header className="bg-white shadow-sm py-4 px-8 flex justify-between items-center">
      <div className="text-xl font-bold text-purple-600">Better-Auth</div>

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
          {
            !session && <li>
            <a
              href="/auth"
              className="hover:text-purple-600 transition-colors"
            >
              Sign In
            </a>
          </li>
          }
        </ul>
      </nav>

      <div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700">
          Get Started
        </button>
      </div>
    </header>
  )
}