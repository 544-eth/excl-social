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

              <section className=' w-[20%] sticky top-2 mt-2 flex flex-col flex-grow items-stretch h-full px-6 text-white '>
                  <div className=''>
                    <div className=' relative w-full h-full   py-3 '>
                      <label htmlFor=' searchBox' className=' absolute top-0 right-0 h-full flex items-center justify-center p-3' >
                         <BsSearch className=' w-5 h-5 text-gray-500'/>
                      </label>
                      <input type="text" placeholder='Search' name="" id="searchBox" className=' w-full h-full rounded-full py-4 px-4 outline-none bg-neutral-800 focus:shadow-sm focus:shadow-[gold] transition duration-300'/>
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
                          <div key={i} className=' hover:bg-white/10 p-4 space-x-4 flex justify-between items-center last:rounded-b-xl rounded-xl transition duration-300'>

                            <div className=' flex items-center space-x-1'>
                                <div className=' flex-none bg-neutral-500 w-10 h-10 rounded-full'>

                                </div>
                                <div className=' flex flex-col '>
                                    <div className=' font-bold  '>Other User</div>
                                    <div className=' text-gray-500 text-xs '>@anotherguy0923</div>
                                </div>
                            </div>
                            
                              <button className=' rounded-full px-4 py-2 bg-neutral-100 text-black'>
                                Follow 
                              </button>
                                                        
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
