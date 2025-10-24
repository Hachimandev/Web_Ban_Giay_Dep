// @ts-nocheck
import { useState } from "react";
import { FiEdit, FiTrash2, FiFileText, FiPlus, FiSearch } from "react-icons/fi";
import Pagination from "../../components/admin/widgets/Pagination";

const DiscountPage = () => {
  const [page, setPage] = useState(1);

  const promotions = [
    {
      code: "SUMMER2024",
      name: "Khuyến mãi mùa hè",
      desc: "Giảm giá cho tất cả sản phẩm",
      type: "Phần trăm",
      value: "20%",
      time: "01/06 - 31/08/2024\n3 tháng",
      status: "Đang hoạt động",
    },
    {
      code: "NEWCUST50",
      name: "Khách hàng mới",
      desc: "Ưu đãi cho khách hàng đầu tiên",
      type: "Cố định",
      value: "50,000đ",
      time: "01/01 - 31/12/2024\nCả năm",
      status: "Đang hoạt động",
    },
    {
      code: "FLASH24H",
      name: "Flash Sale 24h",
      desc: "Giảm giá sốc trong 24h",
      type: "Phần trăm",
      value: "30%",
      time: "15/10 - 16/10/2024\n24 giờ",
      status: "Sắp diễn ra",
    },
  ];

  const totalPages = 3;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header actions */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-[#F97316] text-white px-4 py-2 rounded-md hover:bg-orange-500">
            <FiPlus /> Tạo khuyến mãi mới
          </button>
          <button className="flex items-center gap-2 border px-4 py-2 rounded-md hover:bg-gray-100">
            <FiFileText /> Xuất Excel
          </button>
        </div>

        <div className="flex gap-2">
          <div className="relative">
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm khuyến mãi..."
              className="pl-9 pr-3 py-2 border rounded-md text-sm w-60 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <select className="border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400">
            <option>Tất cả trạng thái</option>
            <option>Đang hoạt động</option>
            <option>Sắp diễn ra</option>
            <option>Hết hạn</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th className="p-3">Mã khuyến mãi</th>
              <th className="p-3">Tên chương trình</th>
              <th className="p-3">Loại</th>
              <th className="p-3">Giá trị</th>
              <th className="p-3">Thời gian</th>
              <th className="p-3">Trạng thái</th>
              <th className="p-3 text-center">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {promotions.map((item, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 font-medium">{item.code}</td>
                <td className="p-3">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                </td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${
                      item.type === "Phần trăm"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {item.type}
                  </span>
                </td>
                <td className="p-3">{item.value}</td>
                <td className="p-3 whitespace-pre-line">{item.time}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === "Đang hoạt động"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Sắp diễn ra"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-3 flex justify-center gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FiEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 flex-wrap">
        <p className="text-sm text-gray-600">
          Hiển thị 1–{promotions.length} trong tổng số 25 kết quả
        </p>
        <Pagination
          infoText=""
          page={page}
          totalPages={totalPages}
          onPageChange={(p) => setPage(p)}
        />
      </div>
    </div>
  );
};

export default DiscountPage;
