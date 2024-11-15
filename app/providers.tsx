// app/providers.tsx
'use client'
import "./globals.css"
import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
    return (
        // <NextUIProvider className="h-full" >
            <div>
                {children}
            </div>
        // </NextUIProvider>
    )
}