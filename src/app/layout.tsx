// Client Components
"use client"

import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from './navbar'
import { usePathname } from 'next/navigation'
import { SessionProvider } from 'next-auth/react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const disableNavbar = ["/login", "/register"]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  // const [state, setState] = useState(0);
  return (
    <html lang="en">
      {/* <head>
        <title>My App</title>
      </head> */}
      <body className={poppins.className}>
        <SessionProvider>
          {/* Ketika pertama kali di akses setiap page akan menampilkan layout ini dengan children nya */}
          {/* <div>Hello Wrold</div> */}
          {!disableNavbar.includes(pathname) && <Navbar />}
          {/* <div>Layouts {state}</div> */}
          {/* <button onClick={() => setState(state + 1)}>Klik</button> */}
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
