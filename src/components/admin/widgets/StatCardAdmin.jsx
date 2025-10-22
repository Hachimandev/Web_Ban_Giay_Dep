// @ts-nocheck
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const StatCardAdmin = ({ title, value, icon, trend, trendType, iconBg }) => {
    const isPositive = trendType === 'positive';

    return (
        <div className="bg-white p-5 rounded-lg shadow-sm flex items-center gap-5 transition-all hover:shadow-md">
            <div className={`p-3 rounded-full ${iconBg}`}>
                {icon}
            </div>
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <p className="text-2xl font-bold text-gray-800 my-1">{value}</p>
                {trend && (
                    <div className={`flex items-center text-xs font-medium ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {isPositive ? <FiArrowUp size={14} /> : <FiArrowDown size={14} />}
                        <span className="ml-1">{trend}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StatCardAdmin;