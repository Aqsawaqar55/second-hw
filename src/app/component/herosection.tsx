import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import myimage from '../public/my1.jpg'
function Herosection() {
  return (
    <section>
      <header  className= 'rounded-md mb-20  '>
        <div className='bg-green-950 p-4 flex justify-between rounded-2xl'>
          <h1 className='text-white rounded-3xl'>About me</h1>
        </div>
        <nav>
          <ul >
          <li><Link href="#home" className="hover:text-blue-500 font-bold text-white">Home</Link></li>
          <li><Link href="#skills" className="hover:text-blue-500 font-bold  text-white">About</Link></li>
      <li><Link href="#skills" className="hover:text-blue-500 font-bold  text-white">Skills</Link></li>
      <li><Link href="#projects" className="hover:text-blue-500 font-bold  text-white">Projects</Link></li>
      <li><Link href="#skills" className="hover:text-blue-500 font-bold  text-white">Contact</Link></li>
            
          </ul>
        </nav>
      </header>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='col-span-7 place-self-center ml-12'>  
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
            Hello! I am Aqsa
          </h1>
          <p className='text-white text-lg lg:text-xl'>
            My name is AQSA. I am a student of GIAIC.<br/> I am learning web development, AI, and the metaverse. I am a front-end developer.
          </p>
        </div>
        <div className='col-span-5  ml-16'>
          
           
            <Image 
  src={myimage} 
  alt="WhatsApp Image"
  
  width={200} 
  height={200} 
  className='rounded-full border-4 border-black  '

/>
</div><a href=''>
<div className='text-left'><button className='bg-green-950 text-white hover:bg-blue-500 font-bold text-1xl p-1 ml-5 rounded-md  '>MY CV </button></div></a>

      </div>
      <footer className=' bg-slate-600 rounded-md p-10 mt-8 text-right '>
        <h5 className='text-white text-bold text-2xl hover:text-blue-500 '>email:aqsawaqar253@gmail.com</h5>
        <p className='text-white text-bold text-2xl hover:text-blue-500'>contact:03100208544</p>
        <p className='text-white text-bold text-2xl hover:text-blue-500'>fb:stone.hearted55@yahoo.com</p>
        <p className='text-white text-bold text-2xl hover:text-blue-500'>WhatsApp:03100208544</p>

    
      </footer>
    </section>
  )
}
  
export default Herosection