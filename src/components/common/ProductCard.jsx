// src/components/common/ProductCard.jsx
import { FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, type = 'button' }) => {
    const { id, img, name, desc, price, rating, reviews } = product;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden group border border-gray-200 flex flex-col">
            <Link to={`/product/${id}`} className="overflow-hidden">
                <img
                    src={img}
                    alt={name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </Link>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 truncate">
                    <Link to={`/product/${id}`} className="hover:text-brand-orange">{name}</Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 truncate">{desc}</p>

                <div className="mt-auto flex justify-between items-center">
                    <span className="text-xl font-bold text-brand-orange">{price}</span>

                    {type === 'button' ? (
                        <button
                            className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors"
                        >
                            Thêm vào giỏ
                        </button>
                    ) : (
                        <div className="flex items-center space-x-1 text-yellow-500">
                            <FiStar className="fill-current" />
                            <span className="text-sm font-semibold text-gray-700">{rating}</span>
                            <span className="text-sm text-gray-500">({reviews})</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;