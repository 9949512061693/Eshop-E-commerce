import React, {useContext} from 'react'
import { ThemeContext } from '../../Context/ThemeContext';
import Navbar from '../../components/Navbar'

function NotFoundPage() {
    const {themeDark} = useContext(ThemeContext);
  return (
    <>
        <Navbar />
        <div className='py-5 flex flex-col justify-center items-center'>
            <img src={themeDark ? ('https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'):
             ('https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png')} alt="not found image"
             className="h-[350px] w-[350px]" />
             <h1 className='text-2xl font-bold m-4 text-gray-900 dark:text-white/90'>Page Not Found</h1>
             <p className="font-semibold">We are sorry, the Page you requested could not be found.</p> 
        </div>
    </>
  )
}

export default NotFoundPage