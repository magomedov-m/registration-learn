/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Props = object

export default function DashboadComponent({}: Props) {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Welcome to Your Dashboard!</h1>
          <p className="text-gray-500">Manage your account and explore better-auth features</p>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src="/profile-placeholder.png"
            alt="John Doe"
            className="w-10 h-10 rounded-full"
          />
          <div className="text-right">
            <p className="font-medium">John Doe</p>
            <p className="text-gray-500 text-sm">email@gmail.com</p>
          </div>
          <button className="ml-4 px-4 py-2 bg-white border border-gray-300 rounded shadow hover:bg-gray-100">
            Sign Out
          </button>
        </div>
      </div>

      {/* Authentication Status */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8">
        <h2 className="font-semibold text-lg mb-4">Authentication Status</h2>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <span className="font-medium">Status:</span>{" "}
            <span className="text-green-500 font-semibold">Authenticated</span>
          </div>
          <div>
            <span className="font-medium">Provider:</span> Better-Auth
          </div>
          <div>
            <span className="font-medium">User ID:</span> 1234566
          </div>
          <div>
            <span className="font-medium">Email Verified:</span> Yes
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
          <div className="bg-purple-100 p-2 rounded mb-4">
            {/* Можно вставить иконку */}
          </div>
          <h3 className="font-semibold mb-2">Social Login</h3>
          <p className="text-gray-500 text-sm">
            Seamlessly authenticate with Google, GitHub, and other social providers.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
          <div className="bg-green-100 p-2 rounded mb-4">
            {/* Иконка */}
          </div>
          <h3 className="font-semibold mb-2">User Management</h3>
          <p className="text-gray-500 text-sm">
            Manage user accounts, profiles, and authentication settings.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
          <div className="bg-purple-100 p-2 rounded mb-4">
            {/* Иконка */}
          </div>
          <h3 className="font-semibold mb-2">Secure Access</h3>
          <p className="text-gray-500 text-sm">
            Protected routes and secure authentication flow with better-auth.
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8 flex flex-wrap gap-4">
        <button className="px-4 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700">
          Update Profile
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          Save Settings
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          Export Data
        </button>
      </div>

      {/* Footer Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
          &larr; Back to Home
        </button>
        <button className="px-4 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700">
          Manage Account
        </button>
      </div>
    </div>
  )
}