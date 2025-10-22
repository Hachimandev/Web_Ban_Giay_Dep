// @ts-nocheck
import {
    FiDollarSign, FiShoppingCart, FiPackage, FiUsers
} from 'react-icons/fi';
import StatCard from '../../components/admin/StatCard';
import SalesChart from '../../components/admin/charts/SalesChart';
import CategoryChart from '../../components/admin/charts/CategoryChart';
import RecentOrders from '../../components/admin/RecentOrders';

const DashboardPage = () => {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Tổng doanh thu"
                    value="2.4 tỷ VNĐ"
                    change="+12.5% so với tháng trước"
                    changeType="positive"
                    icon={<FiDollarSign />}
                    iconBgColor="bg-green-500"
                />
                <StatCard
                    title="Tổng đơn hàng"
                    value="1,247"
                    change="+8.2% so với tháng trước"
                    changeType="positive"
                    icon={<FiShoppingCart />}
                    iconBgColor="bg-blue-500"
                />
                <StatCard
                    title="Sản phẩm tồn kho"
                    value="3,456"
                    change="-2.1% so với tháng trước"
                    changeType="negative"
                    icon={<FiPackage />}
                    iconBgColor="bg-yellow-500"
                />
                <StatCard
                    title="Khách hàng mới"
                    value="892"
                    change="+15.3% so với tháng trước"
                    changeType="positive"
                    icon={<FiUsers />}
                    iconBgColor="bg-orange-500"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
                    <SalesChart />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <CategoryChart />
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <RecentOrders />
            </div>
        </div>
    );
};

export default DashboardPage;