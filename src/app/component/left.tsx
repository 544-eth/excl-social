
import Link from 'next/link';
import { TbHomeDot } from "react-icons/tb";
import { LuBell } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { CiBookmarkPlus } from "react-icons/ci";
import { FiClipboard } from "react-icons/fi";
import { IoSettings } from "react-icons/io5";
import { CgBee } from "react-icons/cg";
import { BsThreeDots } from 'react-icons/bs';
import { IoWalletOutline } from "react-icons/io5";



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
    title: 'Clips',
    icon:  FiClipboard
  },
  {
    title: 'Wallet',
    icon: IoWalletOutline
  },
  {
    title: 'Settings',
    icon: IoSettings
  },
]

const LeftSidebar = () => {
  return (
    
        <div className=' w-[25%] sticky top-0 flex flex-col items-stretch h-screen py-2 px-8'>
                  
                  <div className=' flex flex-col items-stretch h-full text-white space-y-4  '>
                    <Link href='/'>
                      <CgBee className=' text-2xl rotate-[20deg] hover:rotate-[60deg] transition duration-300 text-[gold]'/>
                    </Link>
                    {NAVIGATION_ITEMS.map((item) => (
                      <Link 
                      key={item.title} href={`/${item.title.toLowerCase()}`} 
                      className=' hover:bg-white/30 text-[23px] focus:font-semibold transition duration-300 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6' >
                        <div>
                          
                          <item.icon />
                        </div>
                        {item.title !== "Twitter" && <div>{item.title}</div>}
                      </Link> 
                    ))
                      
                    }
                    <button className='  rounded-full text-black bg-[gold] text-2xl p-4 w-[70%] text-center hover:bg-opacity-80 transition duration-300'>Buzz</button>
                  </div>


                    <button className=' flex items-center space-x-16 rounded-full p-4 my-4 w-fit bg-transparent text-2xl text-center hover:bg-white/10 transition duration-300 justify-between text-white'>

                      <div className=' flex items-center space-x-2 ' >
                          <div className=' rounded-full bg-slate-400 w-12 h-12'></div>
                          <div className=' text-left text-sm'>
                            <div className=' font-semibold'>Francis</div>
                            <div className=' text-xs text-gray-500'>@Francis</div>
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
