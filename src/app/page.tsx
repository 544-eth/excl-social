import React from 'react'
import Link from 'next/link';
import { TbHomeDot } from "react-icons/tb";
import { FiHash } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { BsThreeDots } from 'react-icons/bs';





const NAVIGATION_ITEMS = [
  {
    title:'Twitter',
    icon: FaXTwitter
    
  },

  {
    title: 'Home',
    icon: TbHomeDot 
  },
  {
    title: 'Explore',
    icon: FiHash
  },
  {
    title: 'Notification',
    icon: LuBell
  },
  {
    title: 'Messages',
    icon: AiOutlineMessage
  },
  {
    title: 'Bookmarks',
    icon:  CiBookmarkPlus
  },
  {
    title: 'Profile',
    icon: FaRegUser
  },
  {
    title: 'Settings',
    icon: IoSettings
  },
]


const Home = () => {
  return (
    <div className=' w-full h-screen  flex justify-center items-center relative bg-black'>
        <div className=' max-w-screen-xl w-full h-full flex relative'>
          {/* left side bar for the navigation */}
          <section className=' fixed w-[275px] flex flex-col items-stretch h-screen text-white '>
              <div className=' flex flex-col  items-stretch h-full text-white space-y-4 mt-4 '>

                {NAVIGATION_ITEMS.map((item) => (
                  <Link key={item.title} href={`/${item.title.toLowerCase()}`} className=' hover:bg-white/20 hover:font-semibold transition duration-300 flex text-[25px] items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6' >
                    <div>
                      <item.icon/>
                    </div>
                    {item.title !== "Twitter" && <div>{item.title}</div>}
                  </Link>
                ))
                  
                }
                <button className='  rounded-full text-black bg-[gold] p-4 text-2xl m-4 text-center hover:bg-opacity-80 transition duration-300'>Buzz</button>
              </div>


              <button className=' flex items-center space-x-2 rounded-full m-4 bg-transparent text-2xl text-center hover:bg-opacity-70 transition duration-300'>
                <div className=' rounded-full bg-slate-400 w-9 h-9'>

                </div>

                <div className=' text-left text-xs'>
                  <div className=' font-semibold'>Francis</div>
                  <div className=' text-xs'>@Francis</div>
                </div>

                <div className=''>
                  <BsThreeDots/>
                </div>
              </button>
          </section>
          {/* <main className=' text-white'>Home Title</main>
          <section className=' text-white'>Right side</section> */}
        </div>
    </div>
  )
}

export default Home
