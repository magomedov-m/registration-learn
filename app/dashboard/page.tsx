import React from 'react'
import DashboadComponent from './dashboadComponent'
import { auth } from '@/utils/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

type Props = object

export default async function page({}: Props) {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect("/auth");
  }
  return (
    <DashboadComponent session={session} />
  )
}