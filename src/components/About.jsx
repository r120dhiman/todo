import React from 'react'

const Aboutapp = () => {
  return (
    <div className='flex justify-center w-full'>
    <div className='flex justify-center flex-col w-[75%] align-middle items-center text-center gap-6'>
   <h1 className=' w-fit text-[30px] font-bold '>About Us</h1>
<div>
Welcome to  <strong>Simple TODO</strong>—your go-to solution for efficient task management! Our mission is to help you stay organized and boost your productivity with a user-friendly interface that makes managing your to-dos a breeze.
</div>
<h2 className=' text-[20px] font-semibold '>Built with Modern Technologies</h2>
<p>
At the heart of Simple TODO is React, a powerful JavaScript library that enables seamless user interactions and real-time updates. We leverage its component-based architecture to ensure a smooth experience as you manage your tasks.

To enhance the visual appeal, we've incorporated Tailwind CSS, a utility-first CSS framework that allows for rapid styling and customization. This means you get a clean, responsive design that looks great on any device, without compromising performance.</p>

<h2 className=' text-[20px] font-semibold'>Smart Data Management</h2>
<p>
One of the standout features of Simple TODO is its use of local storage. This means your tasks are safely stored in your browser, so you won’t lose any important information—even if you refresh the page! Your to-do list is always just a click away, ensuring that your productivity stays uninterrupted.</p>

<h2 className=' text-[20px] font-semibold'>Our Commitment</h2>
<p>
We're dedicated to providing a simple yet powerful tool to help you manage your tasks effectively. Whether you’re juggling personal projects, work responsibilities, or everyday errands, Simple TODO is here to help you stay on top of it all.

Thank you for choosing Simple TODO! We hope you enjoy using our app as much as we enjoyed creating it. Happy tasking!</p>
    </div></div>
  )
}

export default Aboutapp
