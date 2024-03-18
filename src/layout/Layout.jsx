import Footer from '../components/Footer'
import Header from '../components/Header'
import DesktopHeader from '../components/DesktopHeader'

const Layout = ({ children }) => {
  return (
    <main className="relative bg-custom w-full overflow-hidden">
      <div className='z-50'>
        <div className="hidden md:block z-10">
          <DesktopHeader />
        </div>
        <div className="block md:hidden">
          <Header />
        </div>
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default Layout
