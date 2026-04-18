import React from 'react'
import { FaBullseye, FaEye, FaCheckCircle, FaHandshake } from "react-icons/fa";
import { MdOutlineShoppingCart, MdSupportAgent } from "react-icons/md";
import Navbar from '../../components/Navbar'
import about from '../../assets/About/about.png'

const weFocus = ['Quality-tested products',
    'Affordable pricing',
    'User-friendly browsing experience',
    'Fast and reliable service']

const whyWeChose = ['✔ Carefully curated, high-quality products',
    '✔ Competitive and transparent pricing',
    '✔ Smooth and user-friendly interface',
    '✔ Dedicated customer support',
    '✔ Continuous improvement based on user feedback']

function AboutPage() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white py-10 px-4 md:px-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">About 
                        <em>
                            <span className='text-primary font-semibold ml-2 tracking-widest 
                            text-2xl uppercase sm:text-3xl' >ESHOP
                            </span>
                        </em>
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto dark:text-gray-300">
                        Your trusted destination for quality products and a seamless shopping experience.
                    </p>


                </div>
                <img src={about} alt='about image' className='h-[200px] md:h-[350px] text-center mx-auto rounded-lg mb-4' />
                {/* About Section */}
                <div className="max-w-5xl mx-auto mb-16 ">
                    <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        Welcome to Eshop, your trusted destination for quality products and a seamless online shopping experience. We are dedicated to bringing together a diverse range of carefully selected products that cater to modern lifestyles, ensuring both convenience and value for our customers.

                        Founded in 2020, Eshop was built with a simple idea—to make online shopping reliable, accessible, and enjoyable for everyone. Whether you're looking for everyday essentials or trending products, we aim to provide options that suit your needs without compromising on quality or affordability.

                        At Eshop, we believe that shopping is more than just purchasing—it’s about trust, experience, and satisfaction. That’s why we continuously work to improve our platform, expand our offerings, and deliver a smooth and secure shopping journey.
                    </p>
                </div>

                {/* Grid Sections */}
                <div className="grid gap-8 max-w-6xl mx-auto">

                    {/* Mission */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <div className="flex">
                            <h2 className="text-xl font-semibold mr-2">Our Mission</h2>
                            <FaBullseye className="text-blue-500 text-3xl mb-4" />
                        </div>
                        <p className="text-gray-500 dark:text-gray-300">
                            Our mission is to simplify online shopping by providing high-quality products at
                            competitive prices while ensuring a smooth and reliable user experience. We aim to
                            build lasting relationships with our customers through trust, transparency, and
                            consistent service excellence.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <div className='flex'>
                            <h2 className="text-xl font-semibold mr-2">Our Vision</h2>
                            <FaEye className="text-purple-500 text-3xl mb-4" />
                        </div>
                        <p className="text-gray-500 dark:text-gray-300">
                            Our vision is to become a leading and trusted e-commerce platform that customers rely on
                            for both quality and convenience. We aspire to continuously innovate, expand our product range,
                            and create a digital shopping environment that feels intuitive and satisfying for every user.
                        </p>
                    </div>

                    {/* What We Offer */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <div className='flex'>
                            <h2 className="text-xl font-semibold mr-2">What We Offer</h2>
                            <MdOutlineShoppingCart className="text-green-500 text-3xl mb-4" />
                        </div>
                        <p className="text-gray-500 dark:text-gray-300">
                            At Eshop, we offer a wide range of products designed to meet the
                            needs of modern consumers. Our collection includes carefully curated
                            items across categories such as electronics, lifestyle products, and everyday essentials.
                        </p>
                        <p className='text-gray-600 dark:text-white/90 mt-2'>We focus on:</p>
                        <ul className='list-disc pl-5 ml-5 text-gray-500 dark:text-gray-300 mb-2'>
                            {
                                weFocus.map((data, index) => (
                                    <li key={index}>{data}</li>
                                ))
                            }
                        </ul>
                        <p className='text-gray-500 dark:text-gray-300'>
                            Every product on our platform is selected with attention to detail,
                            ensuring it meets our standards before reaching you.
                        </p>
                    </div>

                    {/* Why Choose Us */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <div className='flex'>
                            <h2 className="text-xl font-semibold mr-2">Why Choose Eshop</h2>
                            <FaCheckCircle className="text-yellow-500 text-3xl mb-4" />
                        </div>


                        <p className="text-gray-500 mb-1 dark:text-gray-300">
                            Choosing Eshop means choosing reliability, quality, and customer-first service.
                        </p>
                        <p className='text-gray-600 dark:text-white/90 mb-2 '>Here’s what sets us apart:</p>
                        <ul className='text-gray-500 dark:text-gray-300 ml-5 mb-2'>
                            {
                                whyWeChose.map((data, index) => (
                                    <li key={index}>{data}</li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* Commitment */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <div className='flex'>
                            <h2 className="text-xl font-semibold mr-2">Our Commitment</h2>
                            <FaHandshake className="text-red-500 text-3xl mb-4" />
                        </div>
                        <p className="text-gray-500 dark:text-gray-300">
                            We are committed to delivering excellence in everything we do.
                            From sourcing trusted products to ensuring timely service, our goal is to
                            provide a dependable shopping platform you can trust.
                            We also believe in responsible practices and strive to
                            support sustainable and ethical sourcing wherever possible.
                            Your satisfaction is at the core of our decisions, and we
                            continuously work to exceed expectations.
                        </p>
                    </div>

                    {/* Support */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition">
                        <div className='flex'>
                            <h2 className="text-xl font-semibold mr-2">Customer Support</h2>
                            <MdSupportAgent className="text-indigo-500 text-3xl mb-4" />
                        </div>
                        <p className="text-gray-500 dark:text-gray-300">
                            Our team is always ready to assist you and ensure your shopping experience is smooth and hassle-free.
                        </p>
                    </div>

                </div>

                {/* Thank You Section */}
                <div className="text-center mt-16 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-semibold mb-4">Thank You ❤️</h2>
                    <p className="text-gray-500 dark:text-gray-300">
                        Thank you for choosing Eshop. Your trust motivates us to grow,
                        improve, and serve you better every day.
                        We are excited to be part of your shopping journey and look
                        forward to becoming your preferred online destination.
                    </p>
                </div>

            </div>
        </>
    )
}

export default AboutPage