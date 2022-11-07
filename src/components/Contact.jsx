import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#eeeff0] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/4a614ff0-62e4-4bf7-a62c-3dc24a385d2d" className='flex flex-col max-w-[600px'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-700 text-black'>Contact</p>
                <p className='text-grey-300 py-4'> Sunbmit the form below or email me Jio_R95@icloud.com</p>
            </div>
            <input className='bg-[#c30a0a] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p2 bg-[#c30a0a]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#c30a0a] p-2' name='message' rows="10" placeholder='Message'></textarea>
            <button className='text-black border-2 hover:bg-red-600 hover:border-white-600 px-4 py-3 my8 mx-autoflex items-center'>Contact Me!</button>
        </form>
      
    </div>
  )
}

export default Contact
