"use client"

import React, { useState } from 'react'

type Props = object

export default function AuthComponent({}: Props) {
    const [login, setLogin] = useState<boolean>(true);
  return (
    <>
    {
        login ? <div className="max-w-md mx-auto mt-12 bg-white rounded-2xl shadow p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
      <form className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="********"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white font-semibold rounded shadow hover:bg-purple-700"
        >
          Sign In
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Don`t have an account? <button onClick={() => setLogin(false)} className="text-purple-600 hover:underline">Register</button>
      </p>
    </div> : <div className="max-w-md mx-auto mt-12 bg-white rounded-2xl shadow p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
      <form className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="fullname">
            Full Name
          </label>
          <input
            id="fullname"
            type="text"
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="********"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-purple-600 text-white font-semibold rounded shadow hover:bg-purple-700"
        >
          Register
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Already have an account? <button onClick={() => setLogin(true)} className="text-purple-600 hover:underline">Sign In</button>
      </p>
    </div>
    }
    </>
  )
} 