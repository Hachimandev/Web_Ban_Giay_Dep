// @ts-nocheck
const StatusBadge = ({ status }) => {
    let colorClasses = '';
    const normalizedStatus = status.toLowerCase();

    if (normalizedStatus.includes('làm việc') || normalizedStatus.includes('còn hàng')) {
        colorClasses = 'bg-green-100 text-green-700';
    } else if (normalizedStatus.includes('nghỉ phép') || normalizedStatus.includes('hết hàng')) {
        colorClasses = 'bg-red-100 text-red-700';
    } else if (normalizedStatus.includes('nghỉ') || normalizedStatus.includes('chờ')) {
        colorClasses = 'bg-yellow-100 text-yellow-700';
    } else {
        colorClasses = 'bg-gray-100 text-gray-700';
    }

    return (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses}`}>
            {status}
        </span>
    );
};

export default StatusBadge;