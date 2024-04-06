import Navbar from '@/components/Navbar'
import './global.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'RU cs Projects',
  description: 'A collection of projects created by students in the RU cs program',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
