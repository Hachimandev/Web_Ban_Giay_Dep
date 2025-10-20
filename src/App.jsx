// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.js'
// import ProductDetailPage from './pages/ProductDetailPage.jsx' // (Ví dụ cho tương lai)

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App