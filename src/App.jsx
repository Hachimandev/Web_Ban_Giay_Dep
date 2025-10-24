import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";

import CustomerLayout from "./components/layout/CustomerLayout.jsx";
import AdminLayout from "./components/layout/AdminLayout.jsx";

import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import DashboardPage from "./pages/admin/DashboardPage.jsx";
import ProductsPage from "./pages/admin/ProductsPage.jsx";
import StaffPage from "./pages/admin/StaffPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import CustomerPage from "./pages/admin/CustomerPage.jsx";
import SupplierPage from "./pages/admin/SupplierPage.jsx";

function App() {
  return (
    <Routes>
      <Route element={<CustomerLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route
        path="/admin"
        element={
          <ProtectedRoute roleRequired="ADMIN">
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="staff" element={<StaffPage />} />
        <Route path="staff" element={<StaffPage />} />
        <Route path="customers" element={<CustomerPage />} />
        <Route path="suppliers" element={<SupplierPage />} />
      </Route>

      {/* Có thể thêm route 404 ở đây */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;
