// @ts-nocheck
import { useState } from "react";
import {
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiDownload,
  FiFilter,
} from "react-icons/fi";
import Pagination from "../../components/admin/widgets/Pagination";
import StatusBadge from "../../components/admin/widgets/StatusBadge";

const SupplierPage = () => {
  const [search, setSearch] = useState("");
  const [page] = useState(1);
  const totalPages = 25;

  const suppliers = [
    {
      id: "NCC001",
      name: "Công ty TNHH ABC",
      contact: "Nguyễn Văn A",
      phone: "0123456789",
      email: "abc@company.com",
      address: "123 Đường ABC, Quận 1, TP.HCM",
      products: 245,
      status: "Hoạt động",
      date: "15/03/2024",
    },
    {
      id: "NCC002",
      name: "Nhà máy XYZ",
      contact: "Trần Thị B",
      phone: "0987654321",
      email: "xyz@factory.com",
      address: "456 Đường XYZ, Hà Đông, Hà Nội",
      products: 82,
      status: "Hoạt động",
      date: "10/03/2024",
    },
    {
      id: "NCC003",
      name: "Siêu thị DEF",
      contact: "Lê Văn C",
      phone: "0398652741",
      email: "def@market.com",
      address: "789 Đường DEF, Hải Châu, Đà Nẵng",
      products: 156,
      status: "Tạm dừng",
      date: "05/03/2024",
    },
    {
      id: "NCC004",
      name: "Kho hàng GHI",
      contact: "Phạm Thị D",
      phone: "0741852963",
      email: "ghi@warehouse.com",
      address: "321 Đường GHI, Bình Thạnh, TP.HCM",
      products: 70,
      status: "Hoạt động",
      date: "28/02/2024",
    },
    {
      id: "NCC005",
      name: "Vận tải JKL",
      contact: "Hoàng Văn E",
      phone: "0852963741",
      email: "jkl@transport.com",
      address: "654 Đường JKL, Cầu Giấy, Hà Nội",
      products: 32,
      status: "Hoạt động",
      date: "20/02/2024",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold text-gray-800">
          Danh sách nhà cung cấp
        </h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700">
          <FiPlus /> Thêm nhà cung cấp
        </button>
      </div>
      <p className="text-gray-500 mb-6">
        Hiển thị danh sách và trạng thái của các nhà cung cấp
      </p>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm nhà cung cấp..."
          className="border rounded-lg px-3 py-2 w-64 focus:ring-2 focus:ring-orange-400 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="border rounded-lg px-3 py-2 text-gray-600">
          <option>Tất cả trạng thái</option>
          <option>Hoạt động</option>
          <option>Tạm dừng</option>
        </select>
        <select className="border rounded-lg px-3 py-2 text-gray-600">
          <option>Tất cả khu vực</option>
          <option>TP.HCM</option>
          <option>Hà Nội</option>
          <option>Đà Nẵng</option>
        </select>

        <button className="border px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100">
          <FiDownload /> Xuất Excel
        </button>
        <button className="border px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100">
          <FiFilter /> Bộ lọc
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-sm">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="p-3 w-4">
                <input type="checkbox" />
              </th>
              <th className="text-left p-3">Nhà cung cấp</th>
              <th className="text-left p-3">Liên hệ</th>
              <th className="text-left p-3">Địa chỉ</th>
              <th className="text-left p-3">Sản phẩm</th>
              <th className="text-left p-3">Trạng thái</th>
              <th className="text-left p-3">Ngày tạo</th>
              <th className="text-center p-3">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((s) => (
              <tr key={s.id} className="border-b hover:bg-gray-50 text-sm">
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3">
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-800">{s.name}</span>
                    <span className="text-xs text-gray-500">Mã: {s.id}</span>
                  </div>
                </td>
                <td className="p-3">
                  <div className="flex flex-col">
                    <span className="text-gray-800 font-medium">
                      {s.contact}
                    </span>
                    <span className="text-xs text-gray-500">
                      {s.phone} | {s.email}
                    </span>
                  </div>
                </td>
                <td className="p-3 text-gray-600">{s.address}</td>
                <td className="p-3">
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">
                    {s.products} sản phẩm
                  </span>
                </td>
                <td className="p-3">
                  <StatusBadge status={s.status} />
                </td>
                <td className="p-3 text-gray-600">{s.date}</td>
                <td className="p-3 flex justify-center gap-2">
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
        infoText={`Hiển thị 1–5 trong tổng số 124 kết quả`}
        page={page}
        totalPages={totalPages}
      />
    </div>
  );
};

export default SupplierPage;
