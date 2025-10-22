// src/pages/adminpages/StaffPage.jsx
// @ts-nocheck
import {
    FiUsers, FiUserCheck, FiUserX, FiUserPlus,
    FiPlus, FiSearch, FiChevronDown, FiUpload, FiFilter,
    FiEye, FiEdit2, FiTrash2
} from 'react-icons/fi';
import StatCardAdmin from '../../components/admin/widgets/StatCardAdmin';
import StatusBadge from '../../components/admin/widgets/StatusBadge';
import Pagination from '../../components/admin/widgets/Pagination';

// Dữ liệu mẫu
const staff = [
    { id: 1, nvId: 'NV001', name: 'Nguyễn Thị Mai', email: 'mai.nguyen@shopgiay.com', img: 'https://placehold.co/40x40/E2E8F0/94A3B8?text=M', department: 'Bán hàng', role: 'Nhân viên', joinedDate: '15/03/2023', status: 'Đang làm việc' },
    { id: 2, nvId: 'NV002', name: 'Trần Văn Hùng', email: 'hung.tran@shopgiay.com', img: 'https://placehold.co/40x40/E2E8F0/94A3B8?text=H', department: 'Kho', role: 'Trưởng kho', joinedDate: '20/01/2023', status: 'Đang làm việc' },
    { id: 3, nvId: 'NV003', name: 'Lê Thị Hương', email: 'huong.le@shopgiay.com', img: 'https://placehold.co/40x40/E2E8F0/94A3B8?text=H', department: 'Marketing', role: 'Chuyên viên', joinedDate: '10/05/2023', status: 'Nghỉ phép' },
];

const StaffPage = () => {
    return (
        <div className="space-y-6">
            {/* 1. Header trang */}
            <div>
                <h1 className="text-3xl font-bold text-gray-800">Quản lý Nhân Viên</h1>
                <p className="text-gray-500 mt-1">Quản lý thông tin và quyền hạn nhân viên</p>
            </div>

            {/* 2. Thẻ thống kê */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCardAdmin title="Tổng nhân viên" value="24" icon={<FiUsers size={22} className="text-blue-600" />} iconBg="bg-blue-100" trend="+2 tháng này" trendType="positive" />
                <StatCardAdmin title="Đang làm việc" value="22" icon={<FiUserCheck size={22} className="text-green-600" />} iconBg="bg-green-100" trend="+1.7%" trendType="positive" />
                <StatCardAdmin title="Nghỉ phép" value="2" icon={<FiUserX size={22} className="text-yellow-600" />} iconBg="bg-yellow-100" trend="-0.5%" trendType="negative" />
                <StatCardAdmin title="Nhân viên mới" value="3" icon={<FiUserPlus size={22} className="text-orange-600" />} iconBg="bg-orange-100" trend="+Tháng này" trendType="positive" />
            </div>

            {/* 3. Toolbar Bảng */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Search */}
                    <div className="relative w-full md:w-1/3">
                        <input
                            type="text"
                            placeholder="Tìm kiếm nhân viên..."
                            className="w-full border rounded-lg py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#F97316]/50"
                        />
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    </div>

                    {/* Filters & Actions */}
                    <div className="flex items-center gap-3 w-full md:w-auto flex-wrap">
                        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                            Tất cả phòng ban <FiChevronDown size={16} />
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                            Tất cả trạng thái <FiChevronDown size={16} />
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                            <FiUpload size={16} /> Xuất Excel
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-[#F97316] text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors">
                            <FiPlus size={18} /> Thêm Nhân Viên
                        </button>
                    </div>
                </div>
            </div>

            {/* 4. Bảng Dữ Liệu */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1000px]">
                        {/* Table Header */}
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="p-4 w-10"><input type="checkbox" className="rounded" /></th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-600">Nhân viên</th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-600">Mã NV</th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-600">Phòng ban</th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-600">Chức vụ</th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-600">Ngày vào</th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-600">Trạng thái</th>
                                <th className="p-4 text-left text-sm font-semibold text-gray-600">Thao tác</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {staff.map((person) => (
                                <tr key={person.id} className="border-b hover:bg-gray-50">
                                    <td className="p-4"><input type="checkbox" className="rounded" /></td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <img src={person.img} alt={person.name} className="w-10 h-10 rounded-full object-cover" />
                                            <div>
                                                <p className="font-medium text-gray-800">{person.name}</p>
                                                <p className="text-xs text-gray-500">{person.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4 text-sm text-gray-600">{person.nvId}</td>
                                    <td className="p-4 text-sm text-gray-600">{person.department}</td>
                                    <td className="p-4 text-sm text-gray-600">{person.role}</td>
                                    <td className="p-4 text-sm text-gray-600">{person.joinedDate}</td>
                                    <td className="p-4"><StatusBadge status={person.status} /></td>
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
            <Pagination infoText="Hiển thị 1-10 trong tổng số 24 kết quả" page={1} totalPages={3} />
        </div>
    );
};

export default StaffPage;