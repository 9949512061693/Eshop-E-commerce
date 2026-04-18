import { useState, useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';
import { LoginContext } from '../../Context/LoginContext';
import { CartContext } from '../../Context/Cartcontext'

import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaBars } from "react-icons/fa6";

import { IoLogOutOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

import LogoutPopUp from '../LogoutPopUp' 

const MenuLinks = [
    { id: 1, name: "Home", link: '/' },
    { id: 2, name: "Shop", link: '/shop' },
    { id: 3, name: 'About', link: '/about' },
    { id: 4, name: 'Blogs', link: '/blogs' },
]

const Navbar = () => {
    const [value, setValue] = useState('');
    const [showlinks, setShowlinks] = useState(false)
    const { themeDark, toggleTheme } = useContext(ThemeContext);
    const { islogin, toggleLogin } = useContext(LoginContext);
    const { cartProducts } = useContext(CartContext)
    const navigate = useNavigate();

    return (
        <>
            <div className="border-b py-2 border-gray-400 dark:border-gray-200 text-black dark:text-white duration-200 relative top-0 left-0 right-0 z-40">
                <div className='py-2'>
                    <div className="px-2 sm:px-2 flex items-center justify-between">

                        {/* Logo & Links */}
                        <div className='flex items-center'>
                            <span onClick={() => navigate('/')}
                                className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl cursor-pointer'>
                                Eshop
                            </span>

                            <ul className='hidden md:block'>
                                {MenuLinks.map(each => (
                                    <li key={each.id} className='inline-block'>
                                        <span
                                            onClick={() => navigate(each.link)}
                                            className='px-2 lg:px-4 font-semibold text-gray-500 hover:text-black hover:text-lg cursor-pointer dark:hover:text-white transition duration-200'>
                                            {each.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Section */}
                        <div className='flex items-center gap-3'>

                            {/* Search */}
                            <div className='relative hidden md:block group flex items-center gap-0'>
                                <input
                                    type='search'
                                    placeholder='Search'
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    className='search-bar'
                                />
                                <IoMdSearch size={25}
                                    className='text-gray-500 group-hover:text-blue-500 absolute top-1/2 -translate-y-1/2 right-3 dark:text-gray-300' />
                            </div>

                            {/* Mobile Menu */}
                            <FaBars size={25} className='block md:hidden'
                                onClick={() => setShowlinks(!showlinks)} />

                            {/* Cart */}
                            <button type='button'
                                className='cursor-pointer group relative'
                                onClick={() => navigate('/cart')}>
                                <FaCartShopping size={25}
                                    className='text-gray-600 group-hover:text-blue-500 dark:text-gray-200 group-hover:h-10' />
                                <div className='absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                                    {cartProducts.length}
                                </div>
                            </button>

                            {/* Theme */}
                            <button onClick={toggleTheme}>
                                {themeDark
                                    ? <MdLightMode size={25} className='text-white' />
                                    : <MdDarkMode size={25} className='text-gray-600' />
                                }
                            </button>

                            {/*  DESKTOP LOGIN / LOGOUT */}
                            {islogin ? (
                                <LogoutPopUp
                                    trigger={
                                        <button type="button"
                                            className="hidden cursor-pointer md:block relative overflow-hidden border border-blue-500 rounded-sm h-8 w-20 lg:w-24 text-blue-500 group hover:border-0">
                                            <span className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                                Logout
                                            </span>
                                        </button>
                                    }
                                    onConfirm={() => {
                                        toggleLogin()
                                        navigate('/login')
                                    }}
                                />
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => navigate('/login')}
                                    className="hidden cursor-pointer md:block relative overflow-hidden border border-blue-500 rounded-sm h-8 w-20 lg:w-24 text-blue-500 group hover:border-0">
                                    <span className="absolute inset-0 bg-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                        Login
                                    </span>
                                </button>
                            )}

                            {/*  MOBILE LOGIN / LOGOUT */}
                            {islogin ? (
                                <LogoutPopUp
                                    trigger={
                                        <button className="block cursor-pointer md:hidden relative overflow-hidden rounded-sm lg:w-24 h-8 px-2 text-blue-500 group hover:border-0">
                                            <span className="absolute inset-0 bg-primary -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                                <IoLogOutOutline size={25} />
                                            </span>
                                        </button>
                                    }
                                    onConfirm={() => {
                                        toggleLogin()
                                        navigate('/login')
                                    }}
                                />
                            ) : (
                                <button
                                    onClick={() => navigate('/login')}
                                    className="block cursor-pointer md:hidden relative overflow-hidden rounded-sm lg:w-24 h-8 px-2 text-blue-500 group hover:border-0">
                                    <span className="absolute inset-0 bg-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
                                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                                        <CiLogin size={25} />
                                    </span>
                                </button>
                            )}

                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {showlinks && (
                <ul className='block md:hidden py-2 flex flex-col'>
                    {MenuLinks.map(each => (
                        <li key={each.id}>
                            <span
                                onClick={() => navigate(each.link)}
                                className='px-2 lg:px-4 font-semibold text-gray-500 hover:text-black hover:text-lg cursor-pointer dark:hover:text-white transition duration-200'>
                                {each.name}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Navbar