# 🛍️ Eshop – Frontend E-commerce Web Application (React)

A modern and responsive **frontend-only e-commerce web application** built using React.
This project demonstrates a complete shopping flow — from browsing products to placing an order — without a custom backend, focusing on clean UI, smooth user experience, and effective state management.

---

## 🚀 Overview

**Eshop** is a fully functional frontend application where users can:

- Explore products across multiple categories
- View detailed product information
- Add and manage items in a cart
- Login to access protected pages
- Place orders with email confirmation
- Read blogs and explore content
- Switch between light and dark themes

This project was developed as part of my journey as a **Full Stack Developer**, with a strong focus on building scalable and user-friendly frontend applications.

---

## ⚠️ Note

This is a **frontend-only project**.

- No custom backend is used
- Product data is fetched from a public API (**DummyJSON**)
- Authentication is simulated using cookies
- Cart data is managed using localStorage
- Order confirmation is handled via **EmailJS**

This project focuses on frontend architecture, UI/UX, and state management.

---

## ✨ Key Features

### 🔐 Authentication System

- Simple login & signup with form validation
- Login state managed using **cookies**
- Protected routes to restrict access

### 🛒 Shopping Experience

- Product listing with **search and category filters**
- Dynamic product detail pages
- Add / remove / update cart items
- Real-time total price calculation

### 💳 Checkout System

- Order form with contact and delivery details
- Displays complete order summary
- Sends order confirmation using

### 📦 Cart Management

- Persistent cart using **localStorage**
- Quantity control and product removal
- Clean and responsive UI

### 📰 Blogs Section

- Blog listing page
- Detailed blog view with structured content

### 🌗 UI & Experience

- Dark / Light mode toggle
- Smooth animations using **AOS**
- Loading states and error handling
- Fully responsive design

---

## 🧠 Tech Stack

**Frontend:**

- React (Hooks)
- Vite

**Styling:**

- Tailwind CSS

**Routing & State Management:**

- React Router DOM
- Context API

**Other Libraries:**

- EmailJS
- AOS (animations)
- React Slick (carousel)
- js-cookie
- react-loader-spinner

---

## 📁 Project Structure

```
src/
│
├── components/        # Reusable UI components (Navbar, ProductCard, etc.)
├── pages/             # All pages (Landing, Shop, Cart, Blogs, etc.)
├── Context/           # Context API (Cart, Theme, Login)
├── assets/            # Images and static files
├── constants/         # Static data (Blogs, etc.)
└── App.jsx            # Main routing and providers
```

---

## 🔄 Application Flow

1. User visits the landing page
2. Logs in to access protected pages
3. Browses products in the shop
4. Views product details
5. Adds items to cart
6. Proceeds to checkout
7. Places order → email confirmation sent

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone <your-repo-link>

# Navigate to project folder
cd eshop

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🌐 Deployment

You can deploy this project using:

- Vercel
- Netlify
- GitHub Pages

---

## 📌 Future Improvements

- Backend integration (Node.js / Express / MongoDB)
- Authentication with JWT
- Payment gateway integration
- Order history & user profile
- Wishlist functionality

---

## 👨‍💻 Author

**Addanki Adinarayana Anand Swaroop**
Frontend Developer

- GitHub: https://github.com/9949512061693
- LinkedIn: https://www.linkedin.com/in/anandswaroop30/

---

## 🙌 Final Note

This project demonstrates my ability to build a **complete frontend application simulating real-world e-commerce features**, including routing, state management, API integration, and user interaction.

The focus was on writing clean, maintainable code and delivering a smooth and responsive user experience.

---

⭐ If you found this project useful, feel free to explore and share your feedback!
