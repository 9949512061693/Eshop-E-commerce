import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import BlogsData from '../../constants/BlogsData'

function BlogsPage() {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className='grid md:grid-cols-3 gap-4 py-4'>
                {
                    BlogsData.map(eachBlog => (
                        <div
                            key={eachBlog.id}
                            className='flex flex-col gap-6 items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 hover:shadow-lg transition'
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
                                className=''>
                                <p className='text-sm text-gray-400'>{eachBlog.date}</p>

                                <h1 className='text-xl font-semibold mt-1 text-gray-800 dark:text-white'>
                                    {eachBlog.title}
                                </h1>

                                <p className='text-gray-500 dark:text-gray-300 mt-2'>
                                    {eachBlog.description}
                                </p>

                                <button className='mt-3 text-primary font-medium hover:underline' onClick={() => navigate(`/blogs/${eachBlog.id}`)}>
                                    Read More →
                                </button>
                            </div>

                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default BlogsPage
