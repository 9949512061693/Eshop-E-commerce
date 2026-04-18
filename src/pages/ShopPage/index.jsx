import React, { useEffect, useState, useContext } from 'react'
import Navbar from '../../components/Navbar'
import ProductCard from '../../components/ProductCard';
import { ThemeContext } from '../../Context/ThemeContext';
import { ThreeDots } from 'react-loader-spinner'

const categories = [
    {
        name: "Electronics",
        subCategories: [
            "smartphones",
            "laptops",
            "tablets",
            "mobile-accessories"
        ]
    },
    {
        name: "Fashion",
        subCategories: [
            "mens-shirts",
            "mens-shoes",
            "mens-watches",
            "womens-dresses",
            "womens-shoes",
            "womens-watches",
            "womens-bags",
            "womens-jewellery"
        ]
    },
    {
        name: "Watches",
        subCategories: [
            "mens-watches",
            "womens-watches"
        ]
    },
    {
        name: "Beauty & Personal Care",
        subCategories: [
            "beauty",
            "fragrances",
            "skincare"
        ]
    },
    {
        name: "Home & Living",
        subCategories: [
            "furniture",
            "home-decoration",
            "lighting"
        ]
    },
    {
        name: "Groceries",
        subCategories: [
            "groceries"
        ]
    },
    {
        name: "Automotive",
        subCategories: [
            "automotive",
            "motorcycle"
        ]
    }
];

const API_STATUS = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
}

function ShopPage() {
    const [productData, setProductData] = useState([]);
    const [inputVal, setInputVal] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [apiStatus, setApiStatus] = useState(API_STATUS.INITIAL);
    const {themeDark} = useContext(ThemeContext);

    useEffect(() => {
        setApiStatus(API_STATUS.LOADING);
        getTheProducts();
    }, []);

    const getTheProducts = async () => {
        const response = await fetch('https://dummyjson.com/products?limit=194');
        const data = await response.json();
        if (response.ok){
            setProductData(data.products);
            setApiStatus(API_STATUS.SUCCESS);
        }
        else{
         setApiStatus(API_STATUS.FAILURE);   
        }
    }

    const renderInputandFilterCard = () => (
        <div className='flex gap-4 flex-wrap py-4'>
            <input
                type='text'
                placeholder='Search products...'
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className='border px-3 py-2 rounded-lg w-[350px] dark:bg-gray-400 focus:outline-none'
            />
            <select
                className='text-black border rounded dark:bg-gray-400 dark:text-white/70'
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="">All</option>
                {
                    categories.map(each => (
                        <option key={each.name} value={each.name}>
                            {each.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )

    const filteredProducts = productData.filter(product => {
        const matchSearch = product.title
            .toLowerCase()
            .includes(inputVal.toLowerCase());

        const matchCategory =
            selectedCategory === '' ||
            categories
                .find(cat => cat.name === selectedCategory)
                ?.subCategories.includes(product.category);

        return matchSearch && matchCategory;
    });

    const renderSuccessView = () => (
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center py-5'>
            {
                filteredProducts.map(eachObj => (
                   <ProductCard key={eachObj.id} productDetails={eachObj} />
                ))
            }
        </ul>
    )

    const renderFailureView = () => (
        <div className='py-5 flex flex-col justify-center items-center'>
            <img src={themeDark ? ('https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'):
             ('https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png')} alt="not found image"
             className="h-[350px] w-[350px]" />
             <h1 className='text-2xl font-bold m-4 text-gray-900 dark:text-white/90'>Oops! Something Went Worng</h1>
             <p className="font-semibold">We are having some trouble to complete you request. Please Try again</p> 
             <button type='button' onClick= {()=> {getTheProducts()} }>Retry</button>
        </div>
    )

    const renderLoadingView =() => (
        <div className="loader-container flex justify-center mt-10">
  <ThreeDots
    height="50"
    width="50"
    color={themeDark ? "#38bdf8" : "#2563eb"}
    visible={true}
  />
  </div>
    )

    function renderProductsContaier() {
        switch(apiStatus){
            case API_STATUS.SUCCESS:
                return renderSuccessView();
            case API_STATUS.LOADING:
                return renderLoadingView();
            case API_STATUS.FAILURE:
                return renderFailureView();
            default :
                return ;
        }
    }

    return (
        <div>
            <Navbar />
            {renderInputandFilterCard()}
            {renderProductsContaier()}
            
        </div>
    )
}

export default ShopPage