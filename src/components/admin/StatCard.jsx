import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.value
 * @param {string} props.change
 * @param {'positive' | 'negative'} props.changeType
 * @param {React.ReactNode} props.icon
 * @param {string} props.iconBgColor
 */
const StatCard = ({ title, value, change, changeType, icon, iconBgColor }) => {
    const isPositive = changeType === 'positive';

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-center">
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <p className="text-3xl font-bold text-gray-800 my-2">{value}</p>
                <div className={`flex items-center text-xs ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {isPositive ? <FiArrowUp size={14} /> : <FiArrowDown size={14} />}
                    <span className="ml-1 font-medium">{change}</span>
                </div>
            </div>
            <div className={`p-4 rounded-full ${iconBgColor} text-white`}>
                {icon}
            </div>
        </div>
    );
};

export default StatCard;