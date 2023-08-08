"use client"
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from '@nextui-org/react'

export const User = () => {
    const { data: session, status } = useSession()
  const loading = status === "loading"
  return (
    <div>
       {!session && (
            <Button color="danger" onPress={(e) => signIn()}>Sign in</Button>
          )}
      {session?.user && (
        <>
          <Button color="danger" onPress={(e) => signOut()}>Sign out</Button>
        </>
      )}</div>
  )
}
