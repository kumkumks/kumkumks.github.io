import Header from './component/header'
import Project from './pages/project'
import Footer from './component/footer'
import Contact from './component/contact'

const App = () => {
  return (
    <div className='min-h-screen w-full overflow-x-hidden bg-[#f6f2ff] text-slate-900 '>
      {/* <Navbar /> */}
      <Header />
      <Contact />
      <Project />
      <Footer />
    </div>
  )
}

export default App