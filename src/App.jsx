import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Routes, Route } from 'react-router-dom'
import { ThemeContext } from './Context/ThemeContext'
import { LoginContext } from './Context/LoginContext'
import { CartContext } from './Context/Cartcontext'

import LandingPage from './pages/LandingPage'
import LoginForm from './pages/LoginForm'
import SignForm from './pages/SignForm'
import AboutPage from './pages/AboutPage'
import ShopPage from './pages/ShopPage'
import BlogsPage from './pages/BlogsPage'
import ProtectedRoutes from './components/ProtectedRoutes'
import CartPage from './pages/CartPage'
import NotFoundPage from './pages/NotFoundPage'
import BlogDetailView from './pages/BlogDetailView'
import ProductDetailsPage from './pages/ProductDetailsPage'
import PlaceOrderPage from './pages/PlaceOrderPage'

function App() {
  const [themeDark, setThemeDark] = useState(false)
  const [islogin, setLogin] = useState(false)
  const [cartProducts, setCartProducts] = useState([])

  const addCartProducts = (product) => {
    setCartProducts((prev) => {
      const existing = prev.find(item => item.id === product.id)

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prev, { ...product, quantity: 1 }]
    })
  }

  // 🔹 Remove Product
  const removeCartProducts = (productId) => {
    setCartProducts((prev) => {
      const existing = prev.find(item => item.id === productId)

      if (!existing) return prev

      if (existing.quantity === 1) {
        return prev.filter(item => item.id !== productId)
      }

      return prev.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    })
  }

  // 🔹 Delete Product
  const deleteCartProduct = (productId) => {
    setCartProducts(prev =>
      prev.filter(item => item.id !== productId)
    )
  }

  // 🔹 Toggle Theme
  const toggleTheme = () => {
    setThemeDark(prev => !prev)
  }

  // 🔹 Apply Theme to DOM
  useEffect(() => {
    document.documentElement.classList.toggle('dark', themeDark)
  }, [themeDark])

  // 🔹 Initialize App (Login + Cart + AOS)
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    })

    // Login from cookies
    const savedLogin = Cookies.get('islogin')
    if (savedLogin === 'true') {
      setLogin(true)
    }

    // Cart from localStorage
    const savedCart = localStorage.getItem('cart')

    let parsedCart = []

    try {
      parsedCart = savedCart ? JSON.parse(savedCart) : []
    } catch {
      parsedCart = []
    }

    const updatedCart = Array.isArray(parsedCart)
      ? parsedCart.map(item => ({
          ...item,
          quantity: item.quantity || 1
        }))
      : []

    setCartProducts(updatedCart)

  }, [])

  // 🔹 Save Cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartProducts))
  }, [cartProducts])

  // 🔹 Toggle Login
  const toggleLogin = () => {
    setLogin(prev => {
      const newValue = !prev

      if (newValue) {
        Cookies.set('islogin', true, { expires: 7 })
      } else {
        Cookies.remove('islogin')
      }

      return newValue
    })
  }

  return (
    <ThemeContext.Provider value={{ themeDark, toggleTheme }}>
      <LoginContext.Provider value={{ islogin, toggleLogin }}>
        <CartContext.Provider
          value={{
            cartProducts,
            addCartProducts,
            removeCartProducts,
            deleteCartProduct
          }}
        >
          <div className="min-h-screen px-4 md:px-6 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">

            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/login' element={<LoginForm />} />
              <Route path='/signUp' element={<SignForm />} />

              <Route path='/shop' element={
                <ProtectedRoutes><ShopPage /></ProtectedRoutes>
              } />

              <Route path='/about' element={
                <ProtectedRoutes><AboutPage /></ProtectedRoutes>
              } />

              <Route path='/blogs' element={
                <ProtectedRoutes><BlogsPage /></ProtectedRoutes>
              } />

              <Route path='/cart' element={
                <ProtectedRoutes><CartPage /></ProtectedRoutes>
              } />

              <Route path='/blogs/:id' element={
                <ProtectedRoutes><BlogDetailView /></ProtectedRoutes>
              } />

              <Route path='/shop/:id' element={
                <ProtectedRoutes><ProductDetailsPage /></ProtectedRoutes>
              } />

              <Route path='/order' element={
                <ProtectedRoutes><PlaceOrderPage /></ProtectedRoutes>
              } />

              <Route path='/*' element={<NotFoundPage />} />
            </Routes>

          </div>
        </CartContext.Provider>
      </LoginContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App