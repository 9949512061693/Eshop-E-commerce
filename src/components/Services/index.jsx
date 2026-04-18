import React from 'react'
import {
    FaCarSide,
    FaWallet,
} from "react-icons/fa6";
import {
    FaCheckCircle,
    FaHeadphonesAlt
} from "react-icons/fa";

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide size={35} className='text-4xl md:5xl text-primary' />,
        title: 'Free Shipping',
        description: "Free Shipping On All Order",
    },
    {
        id: 2,
        icon: <FaCheckCircle size={35} className="text-4xl md:text-5xl text-primary" />,
        title: 'Safe Money',
        description: '30 Days Money Back',
    },
    {
        id: 3,
        icon: <FaWallet size={35} className="text-4xl md:text-5xl text-primary" />,
        title: 'Secure Payment',
        description: 'All Payments Secure',
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt size={35} className="text-4xl md:text-5xl text-primary" />,
        title: 'Online Support 24/7',
        description: 'Technical Support 24/7',
    }
]

function Services() {
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-6 my-14'>
            {
                ServiceData.map(eachObj => (
                    <div key={eachObj.id} className='flex flex-col md:flex-row items-center gap-4'>
                        {eachObj.icon}
                        <div className='text-center md:text-left'>
                            <h1 className='lg:text-xl font-bold'>{eachObj.title}</h1>
                            <p className='text-gray-400 text-sm'>{eachObj.description}</p>

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Services
