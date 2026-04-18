import React, { useState, useContext } from 'react'
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../Context/Cartcontext'

const indianCities = [
  "Mumbai","Delhi","Bengaluru","Hyderabad","Chennai","Kolkata",
  "Pune","Ahmedabad","Visakhapatnam","Vijayawada","Guntur",
  "Tirupati","Coimbatore","Kochi","Madurai","Mysuru",
  "Nagpur","Indore","Bhopal","Jaipur","Lucknow",
  "Kanpur","Chandigarh","Surat","Vadodara","Rajkot",
  "Warangal","Nellore","Kakinada","Rajahmundry",
  "Amritsar","Jalandhar","Dehradun","Shimla","Srinagar",
  "Guwahati","Patna","Ranchi","Bhubaneswar","Cuttack",
  "Agra","Varanasi"
]

function PlaceOrderPage() {
  const { cartProducts } = useContext(CartContext)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    contact: '',
    city: '',
    deliveryType: 'ship',
    offers: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  //  Total calculation
  const totalAmount = cartProducts.reduce((total, item) => {
    return total + item.price * item.quantity * 93.0023
  }, 0)

  //  Submit
  const handleSubmit = (e) => {
    e.preventDefault()

    const productDetails = cartProducts
      .map(item => `${item.title} (x${item.quantity})`)
      .join(', ')

    const templateParams = {
      to_email: formData.contact,
      products: productDetails,
      total: totalAmount.toFixed(2),
      city: formData.city,
      delivery: formData.deliveryType
    }

    emailjs.send(
      'service_xxxxx',     
      'template_xxxxx',     
      templateParams,
      'public_key_xxxxx'
    )
    .then(() => {
      alert('Order placed! Email sent ✅')
    })
    .catch(() => {
      alert('Failed to send email ❌')
    })
  }

  return (
    <div className='flex flex-col items-center py-4'>
      <h1 className='text-3xl font-bold'>Checkout</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* Contact */}
        <section className='flex flex-col'>
          <label>Contact</label>
          <input
            name="contact"
            type='text'
            placeholder='Enter Email or Phone'
            value={formData.contact}
            onChange={handleChange}
            className='w-[350px] border p-2'
            required
          />
        </section>

        {/* Offers */}
        <section className='flex gap-2'>
          <input
            type='checkbox'
            name="offers"
            id="sendNews"
            checked={formData.offers}
            onChange={handleChange}
          />
          <label htmlFor='sendNews'>Email me with news and offers</label>
        </section>

        {/* Delivery */}
        <section>
          <p className='mb-2 font-semibold'>Delivery</p>

          <div className='flex gap-4'>
            <label className='flex items-center gap-1'>
              <input
                type='radio'
                name="deliveryType"
                value="ship"
                checked={formData.deliveryType === 'ship'}
                onChange={handleChange}
              />
              Ship
            </label>

            <label className='flex items-center gap-1'>
              <input
                type='radio'
                name="deliveryType"
                value="pickup"
                checked={formData.deliveryType === 'pickup'}
                onChange={handleChange}
              />
              Pickup
            </label>
          </div>
        </section>

        {/* City */}
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          className='h-[35px] border rounded'
          required
        >
          <option value="" className='text-gray-500'>Select City</option>
          {indianCities.map((city, index) => (
            <option key={index} value={city} className='text-gray-500'>{city}</option>
          ))}
        </select>

        {/* Order Summary */}
        <div className="border p-3 rounded w-[350px]">
          <h2 className="font-bold mb-2">Order Summary</h2>
          {cartProducts.map(item => (
            <p key={item.id}>
              {item.title} × {item.quantity}
            </p>
          ))}
          <p className="mt-2 font-bold">
            Total: ₹ {totalAmount.toFixed(2)}
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="cursor-pointer relative 
         overflow-hidden border border-blue-500 rounded-sm py-1 px-6
         text-blue-500 group hover:border-0"
        >
          <span className="absolute inset-0 bg-green-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300" 
            onClick={()=> navigate('/order')}>
                Place Order
            </span>
        </button>

      </form>
      <button type='button' className="cursor-pointer relative 
         overflow-hidden border border-blue-500 rounded-sm w-[120px] py-1
         text-blue-500 group hover:border-0 mt-4" onClick={()=> navigate('/cart')}>
            <span className="absolute inset-0 bg-red-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300" 
            onClick={()=> navigate('/order')}>
                Back To Cart
            </span></button>
    </div>
  )
}

export default PlaceOrderPage