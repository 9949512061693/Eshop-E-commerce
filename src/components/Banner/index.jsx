import React from 'react'

function Banner(props) {
    const { data } = props
    return (
        <div style={{ backgroundColor: data.bgColor }} className='rounded-3xl'>
            <div className='min-h-[450px] flex justify-center items-center py-12' >
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center 
            rounded-3xl '>
                    {/* First col */}
                    <div data-aos="fade-up"
                        data-aos-delay={300} className='p-6 sm:p-8 text-white'>
                        <p className='text-sm font-semibold'>{data.discount}</p>
                        <h1 className='uppercase text-4xl lg:text-7xl font-bold'>{data.title}</h1>
                        <p className='text-sm font-semibold'>{data.date}</p>
                    </div>
                    {/* Second Col */}
                    <div data-aos="fade-down"
                        data-aos-delay={300} className='h-full flex items-center'>
                        <img src={data.image} alt="HeadSet Image"
                            className='scale-125 w-[250px] md:w-[340px]
                        mx-auto drop-shadow-4xl object-cover' />
                    </div>
                    {/* Third Col */}
                    <div data-aos="fade-up"
                        data-aos-delay={300} className='p-6 sm:p-8 text-white'>
                        <p className='text-sm font-semibold'>{data.title2}</p>
                        <h1 className='uppercase text-4xl lg:text-7xl font-bold'>{data.title3}</h1>
                        <p className='text-sm tacking-wide font-semibold'>{data.description}</p>
                        <button
                            type='button'
                            style={{ color: data.bgColor }}
                            className='bg-white h-[30px] w-[110px] rounded-full mt-2 border border-transparent transition'
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = data.bgColor
                                e.target.style.color = 'white'
                                e.target.style.border = '1px solid white'
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'white'
                                e.target.style.color = data.bgColor
                                e.target.style.border = '1px solid transparent'
                            }}
                        >
                            Shop Now
                        </button>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Banner
