import React from 'react'
import Link from 'next/link';
import { BsDot, BsThreeDotsVertical } from 'react-icons/bs'
import { IoIosHeartEmpty } from "react-icons/io";
import { BiBookmark, BiComment, BiRepost, BiShare } from 'react-icons/bi';

const MainPage = () => {
  return (
    <main className=' flex w-[40%] h-full min-h-screen flex-col border-l border-r border-[gold]  text-white'>
                <h1 className=' text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0'>Home</h1>
                <div className=' flex items-stretch space-x-2 border-t px-4  border-[gold] py-6 relative'>
                  <div className=' w-12 h-12 bg-slate-400 flex-none rounded-full'></div>
                  <div className=' flex flex-col w-full h-full'>
                    
                      <input type="text" name="" id="" className=' w-full h-full border-b p-4 bg-transparent outline-none border-none placeholder:text-2xl placeholder:text-gray-600'  placeholder='Tell us something...' />
                    
                    <div className=' flex w-full justify-between items-center'>
                      <div></div>
                      <div className=' w-full max-w-[100px]'>
                        <button className='  rounded-full text-black bg-[gold] px-4 py-2  text-lg text-center hover:bg-opacity-80 font-bold transition duration-300'>Buzz</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=' flex flex-col'>
                  {
                    Array.from({length:5}).map((_,i) => (
                      <div key={i} className='flex space-x-1 border-[gold] border-t p-4 '>
                        <div>
                          <div className=' w-10 h-10 bg-slate-200 rounded-full'/>
                        </div>
                        <div className=' flex flex-col '>
                            <div className=' flex items-center justify-between'>
                              <div className=' flex items-center space-x-1 w-full'>
                                <div className=' font-bold'>Francis Chukwunwike</div>
                                <div className=' text-gray-500'>@Francis</div>
                                <div className=' text-gray-500'><BsDot/></div>
                                <div className=' text-gray-500'>1 hours ago</div>
                              </div>
                              <div>
                                <BsThreeDotsVertical/>
                              </div>                             
                            </div>
                            <div className=' text-base '>
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas laudantium placeat optio. Excepturi velit recusandae esse, sed impedit vero, ea, magnam facere pariatur a suscipit illo tempora laudantium laboriosam quibusdam hic voluptatibus voluptatum! Perferendis neque unde iusto reiciendis exercitationem ratione repellendus nisi, autem animi accusamus a qui tempora quam fuga facere sequi iure sunt repudiandae soluta aliquid aut voluptatibus culpa accusantium! Doloribus quis vitae voluptatem nulla. Ipsa quibusdam porro odit?
                            </div>
                            <div className=' bg-slate-300 aspect-square w-full mt-2 h-96 rounded-xl'>

                            </div>
                            <div className=' flex items-center justify-around w-full mt-4 text-[23px]'>                             
                              <Link href='/'>
                                  <BiComment/>
                              </Link>
                              <Link href='/'>
                                  <BiRepost/>
                              </Link>
                              <Link href='/'>
                                  <IoIosHeartEmpty/>
                              </Link>
                              <Link href='/'>
                                  <BiShare/>
                              </Link>
                              <Link href='/'>
                                  <BiBookmark/>
                              </Link>
                              
                            </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
    </main>
  )
}

export default MainPage
