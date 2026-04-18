
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import { CartContext } from '../../Context/Cartcontext'

function ProductCard(props) {
    const { productDetails } = props;
    const navigate = useNavigate();
    const { addCartProducts, removeCartProducts } = useContext(CartContext);
    return (
        <li data-aos='fade-up' data-aos-delay={200 + productDetails.id} className='py-3 px-2 dark:bg-gray-600 shadow-md hover:shadow-blue-500/40 dark:hover:shadow-gray-400 hover:shadow-xl transition duration-300 rounded-lg' 
        onClick={() => navigate(`/shop/${productDetails.id}`)}>
            <div>
                <img src={productDetails.thumbnail} alt="Product Image" className='w-full' />
                <p className='text-gray-400 text-sm dark:text-white/40 font-bold'>{productDetails.brand}</p>
                <h1 className='text-gray-700 dark:text-gray-200 text-lg md:text-xl font-bold'>{productDetails.title}</h1>
                <p className='text-gray-500 dark:text-gray-100/70 text-sm font-semibold'>{productDetails.description}</p>
                <div className='flex gap-2 mt-2 items-center'>
                    <p className='text-black text-lg font-bold dark:text-gray-100'>₹ {Number((productDetails.price * 93.0023).toFixed(2))}</p>
                    <p className="text-xl text-lg font-bold text-red-400 line-through">
                        ₹ {Number(((productDetails.price * 93.0023) + (productDetails.price / (1 - productDetails.discountPercentage / 100))).toFixed(2))}
                    </p>
                    <p className='text-brand text-brandGreen  font-semibold'>{productDetails.discountPercentage}% OFF</p>
                </div>
                <div className='flex items-center w-full gap-4  mt-3'>
                    <button type='button' onClick={(e) => {e.stopPropagation()
                    removeCartProducts(productDetails.id)}} className='border px-3 py-2 rounded dark:border-white/30 hover:border-none hover:text-white hover:bg-primary'>-</button>
                    <button type='button' onClick={(e) => {
                        e.stopPropagation()
                        addCartProducts(productDetails)}}
                        className='border px-6 py-2 rounded dark:border-white/30 hover:border-none hover:text-white hover:bg-brandGreen'>Add To Cart</button>
                    <button type='button' onClick={(e) =>{
                        e.stopPropagation()
                        addCartProducts(productDetails)}} className='border px-3 py-2 rounded dark:border-white/30 hover:border-none hover:text-white hover:bg-brandGreen'>+</button>
                </div>
            </div>
        </li >
    )
}

export default ProductCard