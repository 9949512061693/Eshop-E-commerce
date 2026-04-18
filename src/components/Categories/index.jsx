import earphone from '../../assets/category/earphone.png'
import watches from '../../assets/category/watches.png'
import macbook from '../../assets/category/macbook.png'
import gaming from '../../assets/category/gaming.png'
import VRheadSet from '../../assets/category/VRheadSet.png'
import speaker from '../../assets/category/speaker.png'

function Category() {
    return (
        <div className='py-8 flex flex-col gap-8'>
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8 '>
                {/*First Card*/}
                <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 
                     text-white rounded-3xl relative h-[320px] flex flex-end">
                    <div className='mb-4'>
                        <p className='mb-[2px] text-gray-400'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>with</p>
                        <p className='text-4xl xl:text-5xl font-bold
                    opacity-20 mb-2'>Earphone</p>
                        <button type='button' className='bg-primary text-white h-[30px] w-[110px]
                        absolute z-10 rounded-3xl hover:bg-transparent hover:border-1 hover:text-brandWhite hover:border-brandWhite'>Browse</button>

                    </div>
                    <img src={earphone} alt='category image' className='w-[320px] absolute bottom-0' />
                </div>
                {/*Second Card*/}
                <div className="py-10 pl-5  bg-gradient-to-br from-brandYellow/90 to-brandYellow/70 
                     text-white rounded-3xl relative h-[320px] flex flex-end">
                    <div className='mb-0'>
                        <p className='mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl font-semibold mb-[2px]'>with</p>
                        <p className='text-4xl xl:text-5xl font-bold
                    opacity-50 mb-2'>Gadgets</p>
                        <button type='button' className='bg-white text-brandYellow h-[30px] w-[110px] 
                        rounded-3xl hover:bg-transparent hover:border-1 hover:border-white hover:text-white'>Browse</button>

                    </div>
                    <img src={watches} alt='category image' className='w-[320px] absolute -top-2 -right-10 lg:top-[40px]' />
                </div>
                {/*Third container*/}

                <div className="md:col-span-2 items-center  py-10 pl-5 bg-gradient-to-br from-primary/90 to-primary/70 
                     text-white rounded-3xl relative h-[320px] flex flex-end">
                    <div className='mb-0'>
                        <p className='text-sm mb-[2px] text-white'>Enjoy</p>
                        <p className='text-2xl md:text-2xl font-semibold mb-[2px]'>with</p>
                        <p className='text-xl md:text-4xl xl:text-5xl font-bold
                    opacity-50 mb-2'>Laptop</p>
                        <button type='button' className='bg-white text-primary h-[30px] w-[90px]
                         rounded-3xl hover:bg-transparent hover:border-1 hover:border-white hover:text-white'>Browse</button>
                    </div>
                    <img src={macbook} alt='category image' className='w-[250px]  md:absolute md:right-1  md:w-[350px]' />
                </div>
            </div>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 '>
                    <div className="md:col-span-2 items-center  py-10 pl-5 bg-gradient-to-br from-brandWhite/90 to-brandWhite/70 
                     text-white rounded-3xl relative h-[320px] flex flex-end">
                        <div className='mb-0'>
                            <p className='text-sm mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl md:text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-xl md:text-4xl xl:text-5xl font-bold
                    opacity-50 mb-2'>Gaming Device</p>
                            <button type='button' className='bg-primary text-white h-[30px] w-[90px] 
                            rounded-3xl hover:bg-transparent hover:text-primary hover:border-1 hover:border-primary'>Browse</button>

                        </div>
                        <img src={gaming} alt='category image' className='w-[250px] md:absolute md:right-1  md:w-[350px]' />
                    </div>
                    {/*second Card*/}
                    <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 
                     text-white rounded-3xl relative h-[320px] flex flex-end">
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:text-5xl font-bold
                    opacity-20 mb-2'>VR HeadSet</p>
                            <button type='button' className=' text-white absolute z-1 h-[30px] w-[110px]
                             rounded-3xl bg-transparent border 
                            border-white hover:bg-white hover:text-brandGreen'>Browse</button>

                        </div>
                        <img src={VRheadSet} alt='category image' className='w-[320px] absolute bottom-0' />
                    </div>
                    {/*Third Card*/}
                    <div className="py-10 pl-5  bg-gradient-to-br from-brandBlue/90 to-brandBlue/70 
                     text-white rounded-3xl relative h-[320px] flex flex-end">
                        <div className='mb-0'>
                            <p className='mb-[2px] text-white'>Enjoy</p>
                            <p className='text-2xl font-semibold mb-[2px]'>with</p>
                            <p className='text-4xl xl:text-5xl font-bold
                    opacity-50 mb-2'>Speakers</p>
                            <button type='button' className='bg-white text-brandBlue h-[30px] w-[110px] 
                            rounded-3xl hover:bg-transparent hover:text-white hover:border-1 hover:border-white'>Browse</button>

                        </div>
                        <img src={speaker} alt='category image' className='w-[280px] absolute -top-2 -right-8 lg:top-[40px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
