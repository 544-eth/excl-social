import LeftSidebar from '@/app/component/left'
import { BsDot } from 'react-icons/bs'
import { IoIosHeartEmpty } from "react-icons/io";
import { BiBookmark, BiComment, BiRepost, BiShare } from 'react-icons/bi';


const Home = () => {
  return (
    <div className=' w-full h-full flex justify-center items-center relative bg-black'>
        <div className=' max-w-screen-xl w-full h-full flex relative'>
          {/* left side bar for the navigation */}
              <LeftSidebar/> 

              <main className=' ml-[275px] flex w-[600px] h-full min-h-screen flex-col border-l border-r border-[gold]  text-white'>
                <h1 className=' text-xl font-bold p-6'>Home</h1>
                <div className=' flex items-stretch space-x-2 border-t px-4 border-b border-[gold] py-6 relative'>
                  <div className=' w-12 h-12 bg-slate-400 flex-none rounded-full'></div>
                  <div className=' flex flex-col w-full h-full'>
                    
                      <input type="text" name="" id="" className=' w-full h-full border-b p-4 bg-transparent outline-none border-none placeholder:text-2xl placeholder:text-gray-600'  placeholder='Tell us something...' />
                    
                    <div className=' flex w-full justify-between items-center'>
                      <div></div>
                      <div className=' w-full max-w-[100px]'>
                        <button className='  rounded-full text-black bg-[gold] px-4 py-2 w-full text-lg text-center hover:bg-opacity-80 font-bold transition duration-300'>Buzz</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=' flex flex-col'>
                  {
                    Array.from({length:5}).map((_,i) => (
                      <div key={i} className='flex space-x-1 border-[gold] border-t p-4 border-b'>
                        <div>
                          <div className=' w-10 h-10 bg-slate-200 rounded-full'/>
                        </div>
                        <div className=' flex flex-col space-y-6'>
                            <div className=' flex items-center space-x-1'>
                              <div className=' font-bold'>Francis Chukwunwike</div>
                              <div>@Francis</div>
                              <div><BsDot/></div>
                              <div>1 hours ago</div>
                            </div>
                            <div className=' text-justify'>
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas laudantium placeat optio. Excepturi velit recusandae esse, sed impedit vero, ea, magnam facere pariatur a suscipit illo tempora laudantium laboriosam quibusdam hic voluptatibus voluptatum! Perferendis neque unde iusto reiciendis exercitationem ratione repellendus nisi, autem animi accusamus a qui tempora quam fuga facere sequi iure sunt repudiandae soluta aliquid aut voluptatibus culpa accusantium! Doloribus quis vitae voluptatem nulla. Ipsa quibusdam porro odit?
                            </div>
                            <div className=' bg-slate-300 aspect-square w-full h-96 rounded-xl'>

                            </div>
                            <div className=' flex items-center space-x-2 w-full'>
                              <div><BiComment/></div>
                              <div><BiRepost/></div>
                              <div><IoIosHeartEmpty/></div>
                              <div><BiShare/></div>
                              <div><BiBookmark/></div>
                            </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </main>
          {/* <section className=' ml-[275px] text-white'>Right side</section> */}
        </div>
    </div>
  )
}

export default Home
