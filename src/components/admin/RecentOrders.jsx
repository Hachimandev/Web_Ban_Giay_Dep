// @ts-nocheck
import { Link } from 'react-router-dom';

const orders = [
    { id: '#DH001', customer: 'Nguyễn Văn A', product: 'Nike Air Max 270', total: '2,890,000 VNĐ', status: 'Hoàn thành', date: '19/10/2024' },
    { id: '#DH002', customer: 'Trần Thị B', product: 'Adidas Ultraboost', total: '3,200,000 VNĐ', status: 'Đang xử lý', date: '19/10/2024' },
    { id: '#DH003', customer: 'Lê Văn C', product: 'Converse Chuck Taylor', total: '1,590,000 VNĐ', status: 'Đang giao', date: '18/10/2024' },
    { id: '#DH004', customer: 'Phạm Hữu D', product: 'Vans Old Skool', total: '1,750,000 VNĐ', status: 'Đã hủy', date: '17/10/2024' },
];

const StatusBadge = ({ status }) => {
    let colorClasses = '';
    switch (status) {
        case 'Hoàn thành':
            colorClasses = 'bg-green-100 text-green-700';
            break;
        case 'Đang xử lý':
            colorClasses = 'bg-yellow-100 text-yellow-700';
            break;
        case 'Đang giao':
            colorClasses = 'bg-blue-100 text-blue-700';
            break;
        case 'Đã hủy':
            colorClasses = 'bg-red-100 text-red-700';
            break;
        default:
            colorClasses = 'bg-gray-100 text-gray-700';
    }
    return (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses}`}>
            {status}
        </span>
    );
};

const RecentOrders = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Đơn hàng gần đây</h2>

                <Link to="/admin/orders" className="text-sm font-medium text-[#F97316] hover:underline">
                    Xem tất cả
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full min-w-max">
                    <thead>
                        <tr className="text-left text-sm text-gray-500 border-b">
                            <th className="py-3 px-4">Mã đơn</th>
                            <th className="py-3 px-4">Khách hàng</th>
                            <th className="py-3 px-4">Sản phẩm (1)</th>
                            <th className="py-3 px-4">Tổng tiền</th>
                            <th className="py-3 px-4">Trạng thái</th>
                            <th className="py-3 px-4">Ngày tạo</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        {orders.map((order) => (
                            <tr key={order.id} className="text-gray-700">
                                <td className="py-3 px-4 font-medium">{order.id}</td>
                                <td className="py-3 px-4">{order.customer}</td>
                                <td className="py-3 px-4">{order.product}</td>
                                <td className="py-3 px-4">{order.total}</td>
                                <td className="py-3 px-4">
                                    <StatusBadge status={order.status} />
                                </td>
                                <td className="py-3 px-4 text-sm text-gray-500">{order.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentOrders;