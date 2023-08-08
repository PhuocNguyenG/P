"use client"
import { Spinner } from '@nextui-org/react'
import React from 'react'

 const SpinnerLoading = () => {
  return (
    <Spinner label="Loading..." color="warning" classNames={{label:"text-primary"}} />
  )
}
export default SpinnerLoading
