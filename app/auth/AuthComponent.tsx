"use client"

import { signUp, signInSocial, signIn } from '@/utils/actions/auth-actions'
import React, { useState } from 'react'

type Props = object

export default function AuthComponent({}: Props) {
  const [login, setLogin] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      if (login) {
        const result = await signIn(email, password);
      }else {
        const result = await signUp(email, password, name)
      }
    } catch (err) {
      console.error(`Ошибка: ${err}`)
    }
  }

  const handleSocialAuth = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signInSocial("google")
    } catch (err) {
      console.error(`Ошибка при регистрации с google: ${err}`)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      {login ? (
        <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-8">
          <button onClick={handleSocialAuth}
            className="flex items-center justify-center w-full border cursor-pointer border-gray-300 rounded-lg py-2.5 mb-6 hover:bg-gray-50 transition duration-200"
          >
            <p className="text-2xl mr-2" >G</p>
            <span className="font-medium text-gray-700">Продолжить с Google</span>
          </button>

          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
              onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
                Password
              </label>
              <input
              onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button onClick={handleEmailAuth}
              type="submit"
              className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition duration-200"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Don’t have an account?{" "}
            <button
              onClick={() => setLogin(false)}
              className="text-purple-600 font-medium hover:underline"
            >
              Register
            </button>
          </p>
        </div>
      ) : (
        <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-8">
          <button
            className="flex items-center justify-center w-full border border-gray-300 rounded-lg py-2.5 mb-6 hover:bg-gray-50 transition duration-200"
          >
            <p className="text-2xl mr-2" >G</p>
            <span className="font-medium text-gray-700">Продолжить с Google</span>
          </button>

          <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

          <form className="space-y-4" onSubmit={handleEmailAuth}>
            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="fullname">
                Full Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                id="fullname"
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1" htmlFor="password">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition duration-200"
            >
              Register
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Already have an account?{" "}
            <button
              onClick={() => setLogin(true)}
              className="text-purple-600 font-medium hover:underline"
            >
              Sign In
            </button>
          </p>
        </div>
      )}
    </div>
  )
}