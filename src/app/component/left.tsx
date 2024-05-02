
import Link from 'next/link';
import { TbHomeDot } from "react-icons/tb";
import { LuBell } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { CgBee } from "react-icons/cg";
import { BsThreeDots } from 'react-icons/bs';


const NAVIGATION_ITEMS = [
  
  {
    title: 'Home',
    icon: TbHomeDot 
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

const LeftSidebar = () => {
  return (
    
        <div className=' fixed w-[275px] flex flex-col h-screen  my-4'>
                  
                  <div className=' flex flex-col items-stretch h-full text-white space-y-4  '>
                    <Link href='/'>
                      <CgBee className=' text-2xl rotate-[20deg] hover:rotate-[60deg] transition duration-300 text-[gold]'/>
                    </Link>
                    {NAVIGATION_ITEMS.map((item) => (
                      <Link 
                      key={item.title} href={`/${item.title.toLowerCase()}`} 
                      className=' hover:bg-white/30 text-[23px] hover:font-semibold transition duration-300 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6' >
                        <div>
                          
                          <item.icon />
                        </div>
                        {item.title !== "Twitter" && <div>{item.title}</div>}
                      </Link> 
                    ))
                      
                    }
                    <button className='  rounded-full text-black bg-[gold] p-4 text-2xl m-4 text-center hover:bg-opacity-80 transition duration-300'>Buzz</button>
                  </div>


                    <button className=' flex items-center space-x-2 rounded-full p-4 m-4 bg-transparent text-2xl text-center hover:bg-white/10 transition duration-300 justify-between text-white'>

                      <div className=' flex items-center space-x-2 ' >
                          <div className=' rounded-full bg-slate-400 w-12 h-12'></div>
                          <div className=' text-left text-sm'>
                            <div className=' font-semibold'>Francis</div>
                            <div className=' text-xs'>@Francis</div>
                          </div>
                      </div>

                      <div className=''>
                        <BsThreeDots/>
                      </div>
                    </button>
              </div>
    
  )
}

export default LeftSidebar
