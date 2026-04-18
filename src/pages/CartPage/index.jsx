import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { CartContext } from '../../Context/Cartcontext'
import {ThemeContext} from '../../Context/ThemeContext'
import Navbar from '../../components/Navbar'


const CartPage = () => {
  const { cartProducts, addCartProducts, removeCartProducts,deleteCartProduct } = useContext(CartContext);
  const {themeDark} = useContext(ThemeContext);
  const navigate = useNavigate();
  const renderCartProductsView = () => (
      <>
        <ul className='grid gap-5 py-5'>
          {cartProducts.map((eachProduct) => (
            <li key={eachProduct.id} className='py-3 px-2 flex flex-row items-center gap-10 dark:bg-gray-600 shadow-md hover:shadow-blue-500/40 dark:hover:shadow-gray-400 hover:shadow-xl transition duration-300 rounded-lg'>
              
                <img
                  src={eachProduct.thumbnail}
                  alt="Product"
                      className='h-[120px] w-[150px] text-center'
                />
              <div>
              <p className='text-gray-400 text-sm dark:text-white/40 font-bold'>
                {eachProduct.brand}
              </p>

              <h1 className='text-gray-700 dark:text-gray-200 text-lg md:text-xl font-bold'>
                {eachProduct.title}
              </h1>

              <p className='text-gray-500 dark:text-gray-100/70 text-sm font-semibold'>
                {eachProduct.description}
              </p>

              <div className='flex gap-2 mt-2 items-center'>
                <p className='text-black text-lg font-bold dark:text-gray-100'>
                  ₹ {Number((eachProduct.price * 93.0023).toFixed(2))}
                </p>

                <p className="text-lg font-bold text-red-400 line-through">
                  ₹ {Number(((eachProduct.price * 93.0023) + (eachProduct.price / (1 - eachProduct.discountPercentage / 100))).toFixed(2))}
                </p>

                <p className='text-brandGreen font-semibold'>
                  {eachProduct.discountPercentage}% OFF
                </p>
              </div>

              <div className='flex items-center w-full gap-4  mt-3'>
                    <button type='button' onClick={() => removeCartProducts(eachProduct.id)} className='border px-3 py-2 rounded dark:border-white/30 hover:border-none hover:text-white hover:bg-primary'>-</button>
                    <button type='button' onClick={() => deleteCartProduct(eachProduct.id)}
                        className='border px-6 py-2 rounded dark:border-white/30 hover:border-none hover:text-white hover:bg-primary'>Delete</button>
                    <button type='button' onClick={() => addCartProducts(eachProduct)} className='border px-3 py-2 rounded dark:border-white/30 hover:border-none hover:text-white hover:bg-brandGreen'>+</button>
                </div>
            </div>
          </li>
        ))}
      </ul>
              <div className='text-right text-black font-bold'>
             <h1 className ='text-gray-800 dark:text-white/90 m-5 items-center'>Total Amount: <span className='text-3xl'>₹ {TotalAmount().toFixed(2)}</span>/- </h1>
        <button type="button" className="cursor-pointer relative 
         overflow-hidden border border-blue-500 rounded-sm py-1 px-6
         text-blue-500 group hover:border-0">
            <span className="absolute inset-0 bg-green-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10 group-hover:text-white transition-colors duration-300" 
            onClick={()=> navigate('/order')}>
                Place Order
            </span>
                </button>
              </div>
      </>
)

 const TotalAmount = () => {
  return cartProducts.reduce((total, each) => {
    return total + (each.quantity * Number((each.price * 93.0023).toFixed(2)));
  }, 0);
};

  const renderNoProductsView = () => (
    <div className='py-10 flex flex-col justify-center items-center'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png'
        alt="no products"
        className="h-[300px]"
      />
      <h1 className='text-2xl font-bold mt-4 dark:text-white'>
        No Products Found
      </h1>
      <p className="mt-2 text-gray-500">
        We couldn't find any products in the cart. Please go to the shop page and add products.
      </p>
      <button type="button" className="cursor-pointer relative 
         overflow-hidden border border-blue-500 rounded-sm py-1 px-6
         text-blue-500 group hover:border-0 mt-4" 
         onClick ={()=> navigate('/shop')}>
            <span className="absolute inset-0 bg-green-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
            <span className="relative z-10 group-hover:text-white font-bold transition-colors duration-300">
                Shop
            </span>
        </button>
    </div>
  )
  
  return (
    <div className='pb-5'>
      <Navbar />
      {cartProducts.length ===0 ? (renderNoProductsView()):renderCartProductsView()  }
    </div>
  )
}

export default CartPage