// @ts-nocheck
import { useState } from "react";
import { FiUser, FiUsers, FiStar, FiEdit2, FiTrash2 } from "react-icons/fi";

import { FaCrown } from "react-icons/fa";
import Pagination from "../../components/admin/widgets/Pagination";
import StatCardAdmin from "../../components/admin/widgets/StatCardAdmin";
import StatusBadge from "../../components/admin/widgets/StatusBadge";

const CustomerPage = () => {
  const [search, setSearch] = useState("");
  const [page] = useState(1);
  const totalPages = 3;

  const customers = [
    {
      id: "KH001",
      name: "Nguyễn Thị Lan",
      email: "nguyenlan@email.com",
      phone: "0912345678",
      type: "VIP",
      spend: "15,500,000",
      date: "15/03/2023",
      status: "Hoạt động",
    },
    {
      id: "KH002",
      name: "Trần Văn Nam",
      email: "tranman@email.com",
      phone: "0987654321",
      type: "Thường",
      spend: "8,200,000",
      date: "22/07/2023",
      status: "Hoạt động",
    },
    {
      id: "KH003",
      name: "Lê Thị Hoa",
      email: "khoa@email.com",
      phone: "0934567890",
      type: "Mới",
      spend: "2,800,000",
      date: "05/01/2024",
      status: "Hoạt động",
    },
    {
      id: "KH004",
      name: "Phạm Minh Tuấn",
      email: "phantuan@email.com",
      phone: "0912343567",
      type: "Thường",
      spend: "5,600,000",
      date: "18/11/2023",
      status: "Không hoạt động",
    },
    {
      id: "KH005",
      name: "Võ Thị Mai",
      email: "vomai@email.com",
      phone: "0976543210",
      type: "VIP",
      spend: "22,300,000",
      date: "08/02/2023",
      status: "Hoạt động",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold text-gray-800">Quản lý khách hàng</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          + Thêm khách hàng
        </button>
      </div>
      <p className="text-gray-500 mb-6">
        Quản lý thông tin và theo dõi hoạt động của khách hàng
      </p>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <StatCardAdmin
          title="Tổng khách hàng"
          value="2,847"
          icon={<FiUsers size={22} className="text-blue-600" />}
          iconBg="bg-blue-100"
        />
        <StatCardAdmin
          title="Hoạt động"
          value="2,156"
          icon={<FiUser size={22} className="text-green-600" />}
          iconBg="bg-green-100"
        />
        <StatCardAdmin
          title="Khách VIP"
          value="184"
          icon={<FaCrown size={22} className="text-yellow-600" />}
          iconBg="bg-yellow-100"
        />
        <StatCardAdmin
          title="Mới tháng này"
          value="127"
          icon={<FiStar size={22} className="text-purple-600" />}
          iconBg="bg-purple-100"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm khách hàng..."
          className="border rounded-lg px-3 py-2 w-64 focus:ring-2 focus:ring-orange-400 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="border rounded-lg px-3 py-2 text-gray-600">
          <option>Tất cả trạng thái</option>
          <option>Hoạt động</option>
          <option>Không hoạt động</option>
        </select>
        <select className="border rounded-lg px-3 py-2 text-gray-600">
          <option>Loại khách hàng</option>
          <option>VIP</option>
          <option>Thường</option>
          <option>Mới</option>
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
              <th className="text-left p-3">Khách hàng</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Số điện thoại</th>
              <th className="text-left p-3">Loại</th>
              <th className="text-left p-3">Tổng chi tiêu</th>
              <th className="text-left p-3">Ngày tham gia</th>
              <th className="text-left p-3">Trạng thái</th>
              <th className="text-left p-3">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr key={c.id} className="border-b hover:bg-gray-50 text-sm">
                <td className="p-3 font-medium text-gray-800 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold">
                    {c.name.charAt(0)}
                  </div>
                  {c.name}
                </td>
                <td className="p-3 text-gray-600">{c.email}</td>
                <td className="p-3 text-gray-600">{c.phone}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      c.type === "VIP"
                        ? "bg-yellow-100 text-yellow-700"
                        : c.type === "Mới"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {c.type}
                  </span>
                </td>
                <td className="p-3">{c.spend}</td>
                <td className="p-3">{c.date}</td>
                <td className="p-3">
                  <StatusBadge status={c.status} />
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
        infoText={`Hiển thị 1 đến 10 trong tổng số 2,847 kết quả`}
        page={page}
        totalPages={totalPages}
      />
    </div>
  );
};

export default CustomerPage;
