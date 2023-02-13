import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full   flex justify-center items-center pt-8'
    >
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-gray-300'>Contact</p>
                <p className='text-cyan-700 py-4'>Send me a message</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-cyan-500 border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </div>
    </div>
  )
}
export default Contact