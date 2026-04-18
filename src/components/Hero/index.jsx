import SliderImport from "react-slick";
import watch from '../../assets/HeroImages/watch.png'
import smartPhones from '../../assets/HeroImages/smartPhones.png'
import laptops from '../../assets/HeroImages/laptops.png'
import bueatyProducts from '../../assets/HeroImages/bueatyProducts.png'
import furniture from '../../assets/HeroImages/furniture.png'
import clothes from '../../assets/HeroImages/clothes.png'
import shoes from '../../assets/HeroImages/shoes.png'
import bags from '../../assets/HeroImages/bags.png'
import bikes from '../../assets/HeroImages/bikes.png'


const Slider = SliderImport.default || SliderImport;

const heroData = [
    {
        id: 1,
        image: watch,
        subtitle: "Luxury Collection",
        title: "Watches",
        title2: "Timeless Style",
        categories: ["mens-watches", "womens-watches"],
        description: "Explore a curated collection of luxury watches designed for both men and women, combining timeless craftsmanship with modern elegance."
    },
    {
        id: 2,
        image: smartPhones,
        subtitle: "Smart Living",
        title: "Smartphones",
        title2: "Latest Tech",
        categories: ["smartphones"],
        description: "Discover the latest smartphones featuring advanced technology, high performance, and seamless user experience for everyday needs."
    },
    {
        id: 3,
        image: laptops,
        subtitle: "Power & Performance",
        title: "Laptops",
        title2: "Work & Play",
        categories: ["laptops"],
        description: "High-performance laptops built for productivity, gaming, and entertainment, delivering speed, efficiency, and reliability."
    },
    {
        id: 4,
        image: bueatyProducts,
        subtitle: "Beauty Care",
        title: "Beauty",
        title2: "Glow Every Day",
        categories: ["beauty", "skincare"],
        description: "Premium beauty and skincare products crafted to nourish, protect, and enhance your natural glow every day."
    },
    {
        id: 5,
        image: furniture,
        subtitle: "Home Comfort",
        title: "Furniture",
        title2: "Modern Living",
        categories: ["furniture", "home-decoration"],
        description: "Transform your living space with stylish and functional furniture designed for comfort and modern aesthetics."
    },
    {
        id: 6,
        image: clothes,
        subtitle: "Fashion Trends",
        title: "Clothing",
        title2: "Stay Stylish",
        categories: ["mens-shirts", "womens-dresses", "tops"],
        description: "Stay fashionable with a wide range of clothing collections for men and women, combining comfort, quality, and trend."
    },
    {
        id: 7,
        image: shoes,
        subtitle: "Step Forward",
        title: "Shoes",
        title2: "Walk in Style",
        categories: ["mens-shoes", "womens-shoes"],
        description: "Explore stylish and comfortable footwear designed for every occasion, ensuring durability and all-day comfort."
    },
    {
        id: 8,
        image: bags,
        subtitle: "Accessories",
        title: "Bags",
        title2: "Carry Smart",
        categories: ["womens-bags", "mens-bags"],
        description: "Discover versatile and stylish bags perfect for travel, office, and everyday use with functionality and elegance."
    },
    {
        id: 9,
        image: bikes,
        subtitle: "Drive Ahead",
        title: "Vehicles",
        title2: "Power Ride",
        categories: ["automotive"],
        description: "Explore automotive essentials and products designed to enhance your driving experience with performance and reliability."
    }
];

const Hero = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        pauseOnFocus: true,
    }

    return (
        <div className='overflow-hidden w-full rounded-md md:rounded-3xl items-center'>
            <div className="hero-bg-card items-center py-10">
                <Slider {...settings}>
                    {heroData.map((item) => (
                        <div key={item.id} >
                            <div className='grid grid-cols-1 md:grid-cols-2 items-center min-h-[350px]
                                        md:min-h-[650px] items-center'>
                                <div className='flex flex-col justify-center order-1 md:order-0 gap-3 w-full sm:pl-3 text-center sm:text-left z-0'>
                                    <h1 className='text-red-500 dark:text-red-300 text-1xl md:text-2xl text-red font-bold lg:text-2xl'>{item.subtitle}</h1>
                                    <h1 className='text-blue-500 dark:text-blue-300 text-2xl md:text-4xl text-blue font-bold lg:text-6xl'>{item.title}</h1>
                                    <h1 className='text-white dark:text-gray-400 text-4xl md:text-6xl lg:text-8xl font-bold uppercase 
                                            relative z-10 whitespace-nowrap'>
                                        <em>{item.title2}</em>
                                    </h1>
                                    <em className='text-sm font-semibold'>{item.description}</em>
                                    <div className="text-center md:text-left" >
                                        <button type='button' className='relative overflow-hidden border border-blue-500 rounded-sm  h-8 w-20 lg:w-24  text-blue-500 group '>
                                            <span className="absolute inset-0 bg-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
                                            <em className="relative z-10 group-hover:text-white transition-colors duration-300">Shop Now</em>
                                        </button>
                                    </div>

                                </div>
                                <div className='flex justify-center md:justify-end'>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className='h-[300px]  md:h-[350px] lg:h-[450px] sm:scale-105 lg:scale-110 object-cover
                                        mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]'
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div >
        </div>
    )
}

export default Hero