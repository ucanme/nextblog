import Image from 'next/image'
import Header from "../src/ui/layout/header/header"
import "./globals.css"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <Header />
    </main>
  )
}
