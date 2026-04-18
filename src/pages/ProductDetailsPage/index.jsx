import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { ThemeContext } from '../../Context/ThemeContext'
import { CartContext } from '../../Context/Cartcontext'
import { ThreeDots } from 'react-loader-spinner'

const API_STATUS = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
}

function ProductDetailsPage() {
  const { id } = useParams()
  const { themeDark } = useContext(ThemeContext)
  const { addCartProducts, removeCartProducts } = useContext(CartContext)

  const [product, setProduct] = useState(null)
  const [apiStatus, setApiStatus] = useState(API_STATUS.INITIAL)

  useEffect(() => {
    getProductDetails()
  }, [id])

  const getProductDetails = async () => {
    setApiStatus(API_STATUS.LOADING)
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await response.json()

      if (response.ok) {
        setProduct(data)
        setApiStatus(API_STATUS.SUCCESS)
      } else {
        setApiStatus(API_STATUS.FAILURE)
      }
    } catch (error) {
      setApiStatus(API_STATUS.FAILURE)
    }
  }

  //  Loading View
  const renderLoadingView = () => (
    <div className="flex justify-center items-center h-[60vh]">
      <ThreeDots
        height="50"
        width="50"
        color={themeDark ? "#38bdf8" : "#2563eb"}
      />
    </div>
  )

  //  Failure View
  const renderFailureView = () => (
    <div className='py-10 flex flex-col justify-center items-center'>
      <img
        src={
          themeDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure"
        className="h-[300px]"
      />
      <h1 className='text-2xl font-bold mt-4 dark:text-white'>
        Oops! Something went wrong
      </h1>
      <p className="mt-2 text-gray-500">
        Please try again
      </p>
      <button
        onClick={getProductDetails}
        className="mt-4 px-4 py-2 bg-primary text-white rounded"
      >
        Retry
      </button>
    </div>
  )

  //  Success View
  const renderSuccessView = () => (
    <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-10">

      {/* Image */}
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full rounded-lg shadow"
        />
      </div>

      {/* Details */}
      <div>
        <p className="text-sm text-gray-400">{product.brand}</p>

        <h1 className="text-3xl font-bold mt-1 dark:text-white">
          {product.title}
        </h1>

        <p className="mt-3 text-gray-600 dark:text-gray-300">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">
          <p className="text-2xl font-bold">
            ₹ {(product.price * 93.0023).toFixed(2)}
          </p>

          <p className="line-through text-red-400">
            ₹ {((product.price * 93.0023) + (product.price / (1 - product.discountPercentage / 100))).toFixed(2)}
          </p>

          <p className="text-green-500 font-semibold">
            {product.discountPercentage}% OFF
          </p>
        </div>

        {/* Extra Info */}
        <div className="mt-4 space-y-1 text-sm">
          <p>⭐ Rating: {product.rating}</p>
          <p>📦 Stock: {product.stock}</p>
          <p>🚚 {product.shippingInformation}</p>
          <p>🛡 Warranty: {product.warrantyInformation}</p>
          <p>🔁 Return: {product.returnPolicy}</p>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {product.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-200 rounded text-sm">
              #{tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className='flex items-center w-full gap-4  mt-3'>
                    <button type='button' onClick={() => {
                    removeCartProducts(product.id)}} className='border px-3 py-2 rounded dark:border-white/30 hover:border-none hover:text-white hover:bg-primary'>-</button>
                    <button type='button' onClick={() => {
                        addCartProducts(product)}}
                        className='border px-6 py-2 rounded dark:border-white/30 hover:border-none hover:text-white hover:bg-brandGreen'>Add To Cart</button>
                    <button type='button' onClick={() =>{
                        
                        addCartProducts(product)}} className='border px-3 py-2 rounded dark:border-white/30 hover:border-none hover:text-white hover:bg-brandGreen'>+</button>
                </div>
      </div>

      {/* Reviews */}
      <div className="md:col-span-2 mt-10">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">
          Customer Reviews
        </h2>

        <div className="space-y-4">
          {product.reviews.map((review, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <p className="font-semibold">{review.reviewerName}</p>
              <p className="text-yellow-500">⭐ {review.rating}</p>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )

  //  Controller
  const renderView = () => {
    switch (apiStatus) {
      case API_STATUS.LOADING:
        return renderLoadingView()
      case API_STATUS.SUCCESS:
        return renderSuccessView()
      case API_STATUS.FAILURE:
        return renderFailureView()
      default:
        return null
    }
  }

  return (
    <>
      <Navbar />
      {renderView()}
    </>
  )
}

export default ProductDetailsPage