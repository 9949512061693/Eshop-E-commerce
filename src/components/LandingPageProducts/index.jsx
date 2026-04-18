
import product1 from '../../assets/products/product1.png'
import product2 from '../../assets/products/product2.png'
import product3 from '../../assets/products/product3.png'
import product4 from '../../assets/products/product4.png'
import product5 from '../../assets/products/product5.png'
import product6 from '../../assets/products/product6.png'
import product7 from '../../assets/products/product7.png'

const products = [
    {
        id: 1,
        title: 'Rocky Mountain',
        image: product2,
        description: 'Premium smartwatch with sleek design and smart everyday performance.',
        price: 1499,
        aosDelay: 0,
    }, {
        id: 2,
        image: product1,
        title: 'Boat Headphone',
        description: 'Immersive sound with deep bass and all- day comfort for music lovers.',
        price: 1299,
        aosDelay: 200,
    }, {
        id: 3,
        image: product3,
        title: 'Goggles',
        description: 'Modern headset with crisp audio and a bold, stylish finish.',
        price: 999,
        aosDelay: 400,
    }, {
        id: 4,
        image: product4,
        title: 'Printed',
        description: 'Lightweight headphones with a clean design and balanced sound output.',
        price: 699,
        aosDelay: 600,
    }, {
        id: 5,
        image: product5,
        title: 'Boat Headphone',
        description: 'Powerful wireless headphones built for rich sound and long listening hours.',
        price: 2999,
        aosDelay: 800,
    }, {
        id: 6,
        image: product6,
        title: 'Goggles',
        description: 'Classic wired headphones delivering clear sound and durable build.',
        price: 2299,
        aosDelay: 1000,
    }, {
        id: 7,
        image: product7,
        title: 'Rocky Mountain',
        description: 'Minimalist headphones with smooth audio and a premium matte look.',
        price: 3999,
        aosDelay: 1200,
    }
]

const oursHeading = () => (
    <div className='text-center m-10 w-full  max-auto'>
        <div>
            <h1 className='text-3xl font-bold'>Our Products</h1>
            <p className='text-gray-400 font-semibold text-sm'>Explore our Products</p>
        </div>
    </div>
)

function LandingPageProducts() {
    return (
        <>
            {oursHeading()}

            <div className='max-w-6xl mx-auto px-4 mb-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center'>

                    {products.map(eachProduct => (
                        <div
                            key={eachProduct.id}
                            data-aos="fade-up"
                            data-aos-delay={eachProduct.aosDelay}
                            className='flex flex-col items-center  w-full max-w-[250px] relative group rounded-lg shadow-md p-3 hover:shadow-xl dark:hover:shadow-white transition'
                        >
                            <img
                                src={eachProduct.image}
                                alt='product image'
                                className='h-[200px] object-cover rounded'
                            />
                            <div className='absolute inset-0 bg-black/30 backdrop-blur-sm 
                                flex items-center justify-center opacity-0 group-hover:opacity-90 transition duration-400'>

                                <button className='text-white bg-primary px-4 py-1 rounded-lg'>
                                    Add to Cart
                                </button>

                            </div>
                            <div className='w-full text-left'>
                                <h2 className='text-lg text-gray-600 dark:text-gray-100 font-semibold'>
                                    {eachProduct.title}
                                </h2>

                                <p className='text-sm text-gray-400 dark:text-gray-200'>
                                    {eachProduct.description}
                                </p>

                                <h1 className='text-xl text-gray-800 dark:text-white font-bold mt-2'>
                                    ₹{eachProduct.price}
                                </h1>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default LandingPageProducts
