'use client'

import Image from "next/image"
import { useState } from "react"

interface TechIconProps {
  name: string
  logo: string
}

export default function TechIcon({ name, logo }: TechIconProps) {
  const [hasError, setHasError] = useState(false)
  
  const handleError = () => {
    setHasError(true)
  }
  
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/10 flex items-center justify-center mb-2 group-hover:from-blue-500/20 group-hover:to-indigo-500/20 transition-all duration-300 hover:scale-110 hover:shadow-md">
        {hasError ? (
          <span className="text-xl font-bold text-primary">{name.charAt(0)}</span>
        ) : (
          <Image
            src={logo || "/placeholder.svg"}
            alt={name}
            width={32}
            height={32}
            className="object-contain"
            onError={handleError}
          />
        )}
      </div>
      <span className="text-sm">{name}</span>
    </div>
  )
}
