// src/pages/adminpages/ProductsPage.jsx
// @ts-nocheck
import {
    FiPackage, FiCheckCircle, FiXCircle, FiList,
    FiPlus, FiSearch, FiChevronDown, FiUpload, FiFilter,
    FiEye, FiEdit2, FiTrash2
} from 'react-icons/fi';
import StatCardAdmin from '../../components/admin/widgets/StatCardAdmin';
import StatusBadge from '../../components/admin/widgets/StatusBadge';
import Pagination from '../../components/admin/widgets/Pagination';

// Dữ liệu mẫu
const products = [
    { id: 1, sku: 'SD-LT-001', name: 'Nike Air Max 270', img: 'https://placehold.co/40x40/E2E8F0/94A3B8?text=Nike', category: 'Giày thể thao', price: '2,890,000đ', stock: 45, status: 'Còn hàng' },
    { id: 2, sku: 'ZR-HH-002', name: 'Giày cao gót Zara', img: 'https://placehold.co/40x40/E2E8F0/94A3B8?text=Zara', category: 'Giày cao gót', price: '1,590,000đ', stock: 23, status: 'Còn hàng' },
    { id: 3, sku: 'SD-LT-003', name: 'Sandal da thật', img: 'https://placehold.co/40x40/E2E8F0/94A3B8?text=Sandal', category: 'Sandal', price: '890,000đ', stock: 0, status: 'Hết hàng' },
];

const ProductsPage = () => {
    return (
        <div className="space-y-6">
            {/* 1. Header trang */}
            <div>
                <h1 className="text-3xl font-bold text-gray-800">Quản lý sản phẩm</h1>
                <p className="text-gray-500 mt-1">Quản lý toàn bộ sản phẩm giày dép</p>
            </div>

            {/* 2. Thẻ thống kê */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCardAdmin title="Tổng sản phẩm" value="1,247" icon={<FiPackage size={22} className="text-blue-600" />} iconBg="bg-blue-100" />
                <StatCardAdmin title="Còn hàng" value="1,089" icon={<FiCheckCircle size={22} className="text-green-600" />} iconBg="bg-green-100" />
                <StatCardAdmin title="Hết hàng" value="158" icon={<FiXCircle size={22} className="text-red-600" />} iconBg="bg-red-100" />
                <StatCardAdmin title="Danh mục" value="12" icon={<FiList size={22} className="text-orange-600" />} iconBg="bg-orange-100" />
            </div>

            {/* 3. Toolbar Bảng */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Search */}
                    <div className="relative w-full md:w-1/3">
                        <input
                            type="text"
                            placeholder="Tìm kiếm sản phẩm..."
                            className="w-full border rounded-lg py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/50"
                        />
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>

                    {/* Filters & Actions */}
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                            Tất cả danh mục <FiChevronDown size={16} />
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                            Trạng thái <FiChevronDown size={16} />
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-[#F97316] text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors">
                            <FiPlus size={18} /> Thêm sản phẩm
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. Bảng Dữ Liệu */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px]">
                        {/* Table Header */}
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="p-4 w-10"><input type="checkbox" className="rounded" /></th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-600">Sản phẩm</th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-600">Danh mục</th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-600">Giá</th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-600">Tồn kho</th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-600">Trạng thái</th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-600">Thao tác</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id} className="border-b hover:bg-gray-50">
                                    <td className="p-4"><input type="checkbox" className="rounded" /></td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <img src={product.img} alt={product.name} className="w-10 h-10 rounded-md object-cover" />
                                            <div>
                                                <p className="font-medium text-gray-800">{product.name}</p>
                                                <p className="text-xs text-gray-500">SKU: {product.sku}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-gray-600">{product.category}</td>
                                    <td className="p-4 text-sm font-medium text-gray-800">{product.price}</td>
                                    <td className="p-4 text-sm text-gray-600">{product.stock}</td>
                                    <td className="p-4"><StatusBadge status={product.status} /></td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <button className="text-blue-600 hover:text-blue-800"><FiEye size={18} /></button>
                                            <button className="text-green-600 hover:text-green-800"><FiEdit2 size={18} /></button>
                                            <button className="text-red-600 hover:text-red-800"><FiTrash2 size={18} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* 5. Pagination */}
            <Pagination infoText="Hiển thị 1-10 trong tổng số 247 kết quả" page={1} totalPages={3} />
        </div>
    );
};

export default ProductsPage;