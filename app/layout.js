import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Contain all the design works',
}

export default function RootLayout({ children }) {
  return (

    <div className='bg-black text-white'>
      <Navigation/>
      <body className={inter.className}>{children}</body>
    </div>
  )
}
