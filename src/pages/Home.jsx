import React from 'react'


const Home = () => {
  return (
    
    <div>
       
   <section className="py-24 sm:py-16 md:py-20 lg:py-24">
     <div className="container mx-auto px-4 sm:px-8">
       <div className="flex flex-col items-center justify-between space-y-8 md:space-y-0 md:flex-row">
         
         <div className="md:w-1/2 order-2 md:order-1">
           <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-8">Awesome Startup Name</h1>
           <p className="text-lg max-w-md">Made with 1 prompt using the new <a target="_blank" className="underline" href="https://huggingface.co/fblgit/una-cybertron-7b-v2-bf16">cybertron-7b-v2</a>.<br/>Sed rhoncus ante in risus viverra aliquam. Fusce ultrices tellus eu nisl malesuada, vitae dapibus odio pulvinar. Integer a dui sed dolor cursus ornare eget quis enim.</p>
           <a href="#" className="mt-8 inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-700 rounded">Get Started</a>
         </div>

         
         <div className="md:w-1/2 order-1 md:order-2">
           <img src="https://source.unsplash.com/random" alt="Hero Image" className="object-cover h-full rounded shadow-lg w-full max-w-xl sm:max-w-none" />
         </div>
       </div>
     </div>
   </section>

 
   <section className="py-20 bg-gray-50">
     <div className="container mx-auto px-4 sm:px-8">
       <h2 className="text-3xl font-bold text-center mb-12">Our Latest Articles</h2>
       <div className="grid grid-cols-1 gap-y-16 md:gap-x-8 lg:gap-x-0 lg:grid-cols-3">
         
         <article className="mb-10 px-4 sm:px-0">
           <div className="flex flex-col items-center">
             <img src="https://source.unsplash.com/random" alt="Article Image 1" className="object-cover w-full h-64 rounded shadow-lg mb-8" />
             <h3 className="text-2xl font-bold mb-2">How to Start a Successful Startup</h3>
             <p className="max-w-md text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus ante in risus viverra aliquam. Fusce ultrices tellus eu nisl malesuada, vitae dapibus odio pulvinar. Integer a dui sed dolor cursus ornare eget quis enim.</p>
           </div>
         </article>

         
         <article className="mb-10 px-4 sm:px-0">
           <div className="flex flex-col items-center">
             <img src="https://source.unsplash.com/random" alt="Article Image 2" className="object-cover w-full h-64 rounded shadow-lg mb-8" />
             <h3 className="text-2xl font-bold mb-2">10 Essential Tips for Entrepreneurs</h3>
             <p className="max-w-md text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus ante in risus viverra aliquam. Fusce ultrices tellus eu nisl malesuada, vitae dapibus odio pulvinar. Integer a dui sed dolor cursus ornare eget quis enim.</p>
           </div>
         </article>

         
         <article className="mb-10 px-4 sm:px-0">
           <div className="flex flex-col items-center">
             <img src="https://source.unsplash.com/random" alt="Article Image 3" className="object-cover w-full h-64 rounded shadow-lg mb-8" />
             <h3 className="text-2xl font-bold mb-2">The Ultimate Guide to Building a Successful Team</h3>
             <p className="max-w-md text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus ante in risus viverra aliquam. Fusce ultrices tellus eu nisl malesuada, vitae dapibus odio pulvinar. Integer a dui sed dolor cursus ornare eget quis enim.</p>
           </div>
         </article>
       </div>
     </div>
   </section>

  
   <section className="py-20 bg-gray-50">
     <div className="container mx-auto px-4 sm:px-8">
       <h2 className="text-3xl font-bold text-center mb-12">What People Are Saying</h2>
       <div className="grid grid-cols-1 gap-y-16 md:gap-x-8 lg:gap-x-0 lg:grid-cols-2">
         
         <div className="flex items-center justify-between space-x-4 mb-10 px-4 sm:px-0">
           <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-white text-xl font-bold uppercase">JM</div>
           <div className="flex flex-col space-y-2 max-w-md">
             <blockquote className="text-lg font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus ante in risus viverra aliquam.</blockquote>
             <cite className="text-gray-500 text-sm">- John Miller</cite>
           </div>
         </div>

         
         <div className="flex items-center justify-between space-x-4 mb-10 px-4 sm:px-0">
           <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-white text-xl font-bold uppercase">AC</div>
           <div className="flex flex-col space-y-2 max-w-md">
             <blockquote className="text-lg font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus ante in risus viverra aliquam.</blockquote>
             <cite className="text-gray-500 text-sm">- Anna Cooper</cite>
           </div>
         </div>
       </div>
     </div>
   </section>
    </div>
   
  )
}

export default Home
