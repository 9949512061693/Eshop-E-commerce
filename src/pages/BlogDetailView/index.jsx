import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import BlogsData from '../../constants/BlogsData'

function BlogDetailView() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = BlogsData.find(each => each.id === Number(id))

  if (!blog) {
    return <h1 className="text-center mt-10">Blog not found</h1>
  }

  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mx-auto py-4">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full  h-[300px] object-cover rounded-lg"
        />

        <p className="text-gray-400 mt-4">
          {blog.date} • {blog.author}
        </p>

        <h1 className="text-3xl font-bold mt-2 dark:text-white">
          {blog.title}
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          {blog.description2}
        </p>

        {/* Advantages */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-green-500">Advantages</h2>
          <ul className="list-disc ml-6 mt-2">
            {blog.advantages.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Disadvantages */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-red-500">Disadvantages</h2>
          <ul className="list-disc ml-6 mt-2">
            {blog.disadvantages.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Conclusion */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Conclusion</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {blog.conclusion}
          </p>
        </div>
        <div className='text-right mt-5'>
        <button type='button' className="cursor-pointer relative 
         overflow-hidden border border-blue-500 rounded-sm py-1 px-6
         text-blue-500 group hover:border-0" onClick={()=> navigate('/blogs')}>
            <span className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Back
            </span></button>
      </div>
      </div>
    </div>
  )
}

export default BlogDetailView