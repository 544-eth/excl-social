import LeftSidebar from '@/app/component/left'
import MainPage from './component/main'
import { BsSearch } from 'react-icons/bs'



const Home = () => {
  return (
    <div className=' w-full h-full flex justify-center items-center relative bg-black'>
        <div className=' max-w-screen-[70vw] w-full h-full flex relative'>
          {/* left side bar for the navigation */}
              <LeftSidebar/> 

          {/* middle side of the page */}
              <MainPage/>
              
          {/* right side bar of the page */}

              <section className=' flex flex-col items-stretch h-screen sticky overflow-scroll px-6  text-white '>
                  <div className='sticky top-0 '>
                    <div className=' relative w-full h-full   py-3 '>
                      <label htmlFor=' searchBox' className=' absolute top-0 right-0 h-full flex items-center justify-center p-3' >
                         <BsSearch className=' w-5 h-5 text-gray-500'/>
                      </label>
                      <input type="text" placeholder='Search' name="" id="searchBox" className=' w-full h-full rounded-full py-4 px-4 outline-none bg-neutral-800 focus:border-[gold] focus:border  ' />
                    </div>
                  </div>

                  <div className=' flex flex-col rounded-xl bg-neutral-800 relative my-4'>
                    <h3 className=' text-[20px] font-extrabold px-4 my-2 '>Happening now!</h3>
                      <div>
                        {Array.from({length: 5}).map((_, i) =>(
                          <div key={i} className=' hover:bg-white/10 p-4 last:rounded-b-xl rounded-xl transition duration-300'>
                            <div className=' font-bold'>#trending ${i + 1}</div>
                            <div className=' text-xs text-neutral-400'>35.7k</div>
                          </div>
                        ))
                        }
                      </div>                     
                  </div>

                  <div className=' flex flex-col rounded-xl bg-neutral-800 relative my-4'>
                    <h3 className=' text-[20px] font-extrabold px-4 my-2 '>Other people</h3>
                      <div>
                        {Array.from({length: 5}).map((_, i) =>(
                          <div key={i} className=' hover:bg-white/10 p-4 last:rounded-b-xl rounded-xl transition duration-300'>
                            <div className=' font-bold'>#trending ${i + 1}</div>
                            <div className=' text-xs text-neutral-400'>35.7k</div>
                          </div>
                        ))
                        }
                      </div>                     
                  </div>
                  <div className=' flex flex-col rounded-xl bg-neutral-800 relative my-4'>
                    <h3 className=' text-[20px] font-extrabold px-4 my-2 '>Other people</h3>
                      <div>
                        {Array.from({length: 5}).map((_, i) =>(
                          <div key={i} className=' hover:bg-white/10 p-4 last:rounded-b-xl rounded-xl transition duration-300'>
                            <div className=' font-bold'>#trending ${i + 1}</div>
                            <div className=' text-xs text-neutral-400'>35.7k</div>
                          </div>
                        ))
                        }
                      </div>                     
                  </div>
                  <div className=' flex flex-col rounded-xl bg-neutral-800 relative my-4'>
                    <h3 className=' text-[20px] font-extrabold px-4 my-2 '>Other people</h3>
                      <div>
                        {Array.from({length: 5}).map((_, i) =>(
                          <div key={i} className=' hover:bg-white/10 p-4 last:rounded-b-xl rounded-xl transition duration-300'>
                            <div className=' font-bold'>#trending ${i + 1}</div>
                            <div className=' text-xs text-neutral-400'>35.7k</div>
                          </div>
                        ))
                        }
                      </div>                     
                  </div>
                  <div></div>
              </section>
        </div>
    </div>
  )
}

export default Home
