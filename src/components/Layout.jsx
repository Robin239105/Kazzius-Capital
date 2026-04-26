import { Outlet } from 'react-router-dom'
import Navigation from './layout/Navigation'
import Footer from './layout/Footer'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
