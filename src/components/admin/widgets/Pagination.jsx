// @ts-nocheck
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Pagination = ({ infoText, page, totalPages }) => {
    return (
        <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-gray-600">
                {infoText}
            </p>
            <nav className="flex items-center gap-2">
                <button className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-100 disabled:opacity-50" disabled={page === 1}>
                    Trước
                </button>
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        className={`w-8 h-8 rounded-md ${i + 1 === page
                            ? 'bg-[#F97316] text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
                <button className="px-3 py-1 rounded-md text-gray-500 hover:bg-gray-100 disabled:opacity-50" disabled={page === totalPages}>
                    Sau
                </button>
            </nav>
        </div>
    );
};

export default Pagination;