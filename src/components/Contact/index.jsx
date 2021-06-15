import React from 'react'

const Contact = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <section className="mx-6 md:mx-16 lg:mx-auto py-3 max-w-4xl">
        <h1 className="section-title mt-12">Contact</h1>
        <form action="">
          <label htmlFor="name">
            <span className="font-bold dark:text-gray-200">NAMES</span>
            <input className="form-control" type="text" placeholder="Nombres" id="name" />
          </label>
          <label htmlFor="email">
            <span className="font-bold dark:text-gray-200">EMAIL</span>
            <input className="form-control" type="email" placeholder="Correo electrónico" id="email" />
          </label>
          <label htmlFor="comment">
            <span className="font-bold dark:text-gray-200">COMMENTS</span>
            <textarea className="form-control" name="" cols="30" rows="10" id="comment"></textarea>
          </label>
          <button className="block bg-red-600 hover:bg-red-800 text-white font-medium uppercase text-base tracking-widest mx-auto py-2 px-4 rounded my-4" type="submit">Send</button>
        </form>
      </section>
    </section>
    
  )
}

export default Contact
