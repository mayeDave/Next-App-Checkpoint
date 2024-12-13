import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <h1>About</h1>
      <Image src="/small2.webp" alt="Vercel Logo" width={100} height={100} priority />
    </main>
  )
}

export default about