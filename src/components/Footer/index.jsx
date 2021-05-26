import React from 'react';
import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/instagram.png'
import Twitter from '../../assets/images/twitter.png'

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 lg:grid-cols-3 bg-gray-200 dark:bg-gray-500 pt-2 pb-4 lg:py-8 text-center">
      <section className="mt-3 lg:mt-0">
        <h1 className="font-bold text-base dark:text-gray-200">APIREYNA EIRL</h1>
      </section>
      <section className="mt-3 lg:mt-0">
        <address className="font-bold text-base dark:text-gray-200">Dirección: Jr. Larco 456 - Chiclayo</address>
      </section>
      <section className="flex justify-center lg:col-span-1 mt-3 lg:mt-0">
        <figure className="pr-4">
          <img className="h-8" src={Facebook} alt="Facebook" />
        </figure>
        <figure className="pr-4">
          <img className="h-8" src={Instagram} alt="Instagram" />
        </figure>
        <figure className="pr-4">
          <img className="h-8" src={Twitter} alt="Twitter" />
        </figure>
      </section>
    </footer>
  )
}

export default Footer
