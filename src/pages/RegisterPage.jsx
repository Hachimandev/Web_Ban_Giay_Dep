// RegisterPage.jsx
import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaUser,
  FaLock,
  FaEnvelope,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleLoginRedirect = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-md p-8">
        {/* Title */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center mb-4">
            <span className="ml-2 text-4xl font-bold text-gray-800">
              ShopGiay
            </span>
          </div>
          <h2 className="text-xl font-semibold mb-2">Đăng ký tài khoản</h2>
          <p className="text-gray-500 text-sm">
            Tạo tài khoản để trải nghiệm mua sắm tuyệt vời
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-m font-bold text-gray-700 mb-1">
              Họ và tên
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-gray-900 focus-within:border-gray-900">
              <FaUser className="text-gray-400 mr-2 text-sm" />
              <input
                type="text"
                placeholder="Nhập họ và tên của bạn"
                className="w-full text-sm text-gray-500 placeholder-gray-400 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-m font-bold text-gray-700 mb-1">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-gray-900 focus-within:border-gray-900">
              <FaEnvelope className="text-gray-400 mr-2 text-sm" />
              <input
                type="email"
                placeholder="Nhập địa chỉ email"
                className="w-full text-sm text-gray-500 placeholder-gray-400 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-m font-bold text-gray-700 mb-1">
              Mật khẩu
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-gray-900 focus-within:border-gray-900 relative">
              <FaLock className="text-gray-400 mr-2 text-sm" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                className="w-full text-sm text-gray-500 placeholder-gray-400 outline-none pr-8"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-orange-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div>
            <label className="block text-m font-bold text-gray-700 mb-1">
              Xác nhận mật khẩu
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-gray-900 focus-within:border-gray-900 relative">
              <FaLock className="text-gray-400 mr-2 text-sm" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Nhập lại mật khẩu"
                className="w-full text-sm text-gray-500 placeholder-gray-400 outline-none pr-8"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-orange-500"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="flex items-start text-sm">
            <input
              type="checkbox"
              id="agree"
              className="mt-1 mr-2 accent-orange-500"
            />
            <label htmlFor="agree" className="text-gray-600">
              Tôi đồng ý với{" "}
              <a href="#" className="text-orange-500 hover:underline">
                Điều khoản dịch vụ
              </a>{" "}
              và{" "}
              <a href="#" className="text-orange-500 hover:underline">
                Chính sách bảo mật
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 rounded-lg transition-colors"
          >
            Đăng ký
          </button>
        </form>

        {/* Hoặc đăng ký bằng */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="px-3 text-gray-400 text-sm">Hoặc đăng ký bằng</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Nút đăng ký Google / Facebook */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center border border-gray-300 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition">
            <FaGoogle className="text-red-500 mr-2" />
            Đăng ký với Google
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition">
            <FaFacebook className="text-blue-600 mr-2" />
            Đăng ký với Facebook
          </button>
        </div>

        {/* Đã có tài khoản */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Đã có tài khoản?{" "}
          <button
            onClick={handleLoginRedirect}
            className="text-orange-500 font-medium hover:underline"
          >
            Đăng nhập ngay
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
