import Nav from '@components/Nav'
import '@styles/globals.css'

export const metadata = {
  title: 'Promptopia',
  description: 'Discover and Share AI Propmts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient' />
          
          <main className='app'>
            <Nav />
            {children}
            </main>
        </div>
      </body>
    </html>
  )
}
