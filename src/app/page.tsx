import LeftSidebar from '@/app/component/left'
import MainPage from './component/main'
import RightSection from './component/right'




const Home = () => {
  return (
    <div className=' w-full h-full flex justify-center items-center relative bg-black'>
        <div className=' max-w-screen-[70vw] w-full h-full flex relative'>
          {/* left side bar for the navigation */}
              <LeftSidebar/> 

          {/* middle side of the page */}
              <MainPage/>
              
          {/* right side bar of the page */}
              <RightSection/>
              
        </div>
    </div>
  )
}

export default Home
