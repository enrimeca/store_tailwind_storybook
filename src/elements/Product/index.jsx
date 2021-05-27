import React from 'react'

const Product = ({name, image, description}) => {
  return name 
    ? (    
      <section className="max-w-xs rounded-lg overflow-hidden shadow-lg my-6 mx-auto bg-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 group">
        <img className="h-72 w-full filter grayscale group-hover:filter-none" src={image} alt={name} />
        <article className="px-6 py-4">
          <p className="text-lg text-black font-semibold">{name}</p>
          <p className="text-gray-500 font-medium">{description}</p>
        </article>
      </section> 
      )
    : (
      <div class="max-w-xs rounded-lg overflow-hidden shadow-lg my-4 mx-auto bg-white">
        <div class="animate-pulse">
          <div class="bg-gray-300 h-72 w-80"></div>
          <div class="px-6 py-4 space-y-3 mb-3">
            <div class="h-5 bg-gray-300 rounded w-2/6"></div>
            <div class="h-8 bg-gray-300 rounded"></div>
            <div class="h-8 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    )  
}

export default Product
