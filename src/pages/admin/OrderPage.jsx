// @ts-nocheck
import { useState } from "react";
import {
  FiShoppingCart,
  FiTruck,
  FiClock,
  FiDollarSign,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";
import Pagination from "../../components/admin/widgets/Pagination";
import StatCardAdmin from "../../components/admin/widgets/StatCardAdmin";
import StatusBadge from "../../components/admin/widgets/StatusBadge";

const OrderPage = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const totalPages = 3;

  const orders = [
    {
      id: "DH001",
      customer: "Nguyễn Văn A",
      date: "15/10/2024",
      total: "1,250,000đ",
      payment: "Chuyển khoản",
      status: "Đã giao",
    },
    {
      id: "DH002",
      customer: "Trần Thị B",
      date: "12/10/2024",
      total: "890,000đ",
      payment: "Thanh toán khi nhận hàng",
      status: "Đang giao",
    },
    {
      id: "DH003",
      customer: "Phạm Minh C",
      date: "09/10/2024",
      total: "2,350,000đ",
      payment: "Chuyển khoản",
      status: "Đã hủy",
    },
    {
      id: "DH004",
      customer: "Lê Thị D",
      date: "05/10/2024",
      total: "3,100,000đ",
      payment: "Chuyển khoản",
      status: "Đã giao",
    },
    {
      id: "DH005",
      customer: "Võ Văn E",
      date: "03/10/2024",
      total: "540,000đ",
      payment: "Thanh toán khi nhận hàng",
      status: "Chờ xử lý",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold text-gray-800">Quản lý đơn hàng</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Tạo đơn hàng mới
        </button>
      </div>
      <p className="text-gray-500 mb-6">
        Theo dõi, quản lý và xử lý các đơn hàng của khách hàng
      </p>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCardAdmin
          title="Tổng đơn hàng"
          value="1,248"
          icon={<FiShoppingCart size={22} className="text-blue-600" />}
          iconBg="bg-blue-100"
        />
        <StatCardAdmin
          title="Đang giao"
          value="243"
          icon={<FiTruck size={22} className="text-yellow-600" />}
          iconBg="bg-yellow-100"
        />
        <StatCardAdmin
          title="Đã giao"
          value="924"
          icon={<FiDollarSign size={22} className="text-green-600" />}
          iconBg="bg-green-100"
        />
        <StatCardAdmin
          title="Chờ xử lý"
          value="81"
          icon={<FiClock size={22} className="text-orange-600" />}
          iconBg="bg-orange-100"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm đơn hàng..."
          className="border rounded-lg px-3 py-2 w-64 focus:ring-2 focus:ring-orange-400 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="border rounded-lg px-3 py-2 text-gray-600">
          <option>Tất cả trạng thái</option>
          <option>Chờ xử lý</option>
          <option>Đang giao</option>
          <option>Đã giao</option>
          <option>Đã hủy</option>
        </select>
        <select className="border rounded-lg px-3 py-2 text-gray-600">
          <option>Phương thức thanh toán</option>
          <option>Chuyển khoản</option>
          <option>Thanh toán khi nhận hàng</option>
        </select>
        <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
          Bộ lọc
        </button>
        <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
          Xuất Excel
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="text-left p-3">Mã đơn hàng</th>
              <th className="text-left p-3">Khách hàng</th>
              <th className="text-left p-3">Ngày đặt</th>
              <th className="text-left p-3">Tổng tiền</th>
              <th className="text-left p-3">Thanh toán</th>
              <th className="text-left p-3">Trạng thái</th>
              <th className="text-left p-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b hover:bg-gray-50 text-sm">
                <td className="p-3 font-medium text-gray-800">{o.id}</td>
                <td className="p-3 text-gray-700">{o.customer}</td>
                <td className="p-3 text-gray-600">{o.date}</td>
                <td className="p-3 text-gray-800 font-semibold">{o.total}</td>
                <td className="p-3 text-gray-600">{o.payment}</td>
                <td className="p-3">
                  <StatusBadge status={o.status} />
                </td>
                <td className="p-3 flex gap-2">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FiEdit2 />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        infoText={`Hiển thị 1 đến 10 trong tổng số 1,248 kết quả`}
        page={page}
        totalPages={totalPages}
        onPageChange={(p) => setPage(p)}
      />
    </div>
  );
};

export default OrderPage;
