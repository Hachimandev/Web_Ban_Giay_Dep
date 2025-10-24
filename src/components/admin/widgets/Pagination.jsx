// @ts-nocheck
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ infoText, page, totalPages, onPageChange }) => {
  const getVisiblePages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (page <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (page >= totalPages - 3) {
        pages.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(1, "...", page - 1, page, page + 1, "...", totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-between mt-6 flex-wrap">
      <p className="text-sm text-gray-600 mb-2 md:mb-0">{infoText}</p>

      <nav className="flex items-center gap-1 flex-wrap">
        <button
          className="px-2 py-1 rounded-md text-gray-500 hover:bg-gray-100 disabled:opacity-50"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
        >
          <FiChevronLeft className="inline mr-1" /> Trước
        </button>

        {getVisiblePages().map((p, idx) =>
          p === "..." ? (
            <span key={idx} className="px-2 text-gray-500">
              ...
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              className={`w-8 h-8 rounded-md ${
                p === page
                  ? "bg-[#F97316] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {p}
            </button>
          )
        )}

        <button
          className="px-2 py-1 rounded-md text-gray-500 hover:bg-gray-100 disabled:opacity-50"
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
        >
          Sau <FiChevronRight className="inline ml-1" />
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
