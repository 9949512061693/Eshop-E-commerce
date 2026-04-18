import React from 'react'
import blog1 from '../../assets/blogs/blog1.png'
import blog2 from '../../assets/blogs/blog2.png'
import blog3 from '../../assets/blogs/blog3.png'
import { useNavigate } from 'react-router-dom';


const blogsData = [
  {
    id: 1,
    date: '24 Jan 2025',
    title: 'How to choose perfect smartwatch',
    image: blog1,
    description: 'Key factors to select a smartwatch that fits your lifestyle and needs.'
  },
  {
    id: 2,
    date: '24 Jan 2025',
    title: 'How to choose perfect Gadget',
    image: blog2,
    description: 'A practical guide to picking reliable gadgets with the best value.'
  },
  {
    id: 3,
    date: '24 Jan 2025',
    title: 'How to choose perfect Vr Headset',
    image: blog3,
    description: 'Tips to choose a VR headset for immersive and comfortable experiences.'
  }
];


const oursHeading = () => (
  <div className='text-center m-10 w-full  max-auto'>
    <div>
      <h1 className='text-3xl font-bold'>Recent News</h1>
      <p className='text-gray-400 font-semibold text-sm'>Explore our Blogs</p>
    </div>
  </div>
);

function BlogsLandingPageBlogs() {
  const navigate = useNavigate();
  return (
    <div>
      {oursHeading()}
      <div className='grid gap-4'>
        {
          blogsData.map(eachBlog => (
            <div
              key={eachBlog.id}
              className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:shadow-lg transition'
            >

              <div data-aos='fade-up'
                className='flex justify-center'>
                <img
                  src={eachBlog.image}
                  alt="Blog image"
                  className='h-[200px] w-full max-w-[250px] object-cover rounded-lg'
                />
              </div>

              <div data-aos='fade-up'
                className='md:col-span-2'>
                <p className='text-sm text-gray-400'>{eachBlog.date}</p>

                <h1 className='text-xl font-semibold mt-1 text-gray-800 dark:text-white'>
                  {eachBlog.title}
                </h1>

                <p className='text-gray-500 dark:text-gray-300 mt-2'>
                  {eachBlog.description}
                </p>

                <button className='mt-3 text-primary font-medium hover:underline' onClick={() => {
                  navigate('/blogs')
                }}>
                  Read More →
                </button>
              </div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BlogsLandingPageBlogs
