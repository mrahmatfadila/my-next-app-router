import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Home - Rahmat',
  description: 'Aplikasi untuk belajar Next Js',
  authors: [{ name: "Muhamad Rahmat Fadila", url: "http://localhost:3000" }],
  icons: {
    icon: 'https://cdn-icons-png.flaticon.com/512/4436/4436481.png'
  },
  openGraph: {
    title: 'Home - Rahmat',
  }
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
    </main>
  )
}
