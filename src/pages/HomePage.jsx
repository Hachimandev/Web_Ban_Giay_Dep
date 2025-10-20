// src/pages/HomePage.jsx

import HeroSection from '../components/home/HeroSection.jsx';
import CategorySection from '../components/home/CategorySection.jsx';
import ProductList from '../components/home/ProductList.jsx';
import SpecialOffer from '../components/home/SpecialOffer.jsx';
import Newsletter from '../components/home/Newsletter.jsx';
import sneakerImg from '../assets/image/giay-sneaker-trang.png';
import bootImg from '../assets/image/giay-boot-da.png';
import caoGotImg from '../assets/image/giay-caogot.png';
import luoiImg from '../assets/image/giay-luoi.png';

import chayBoImg from '../assets/image/giay-chay-bo.png';
import canvasImg from '../assets/image/giay-canvas.png';
import oxford from '../assets/image/giay-oxford.png';

const featuredProducts = [
    {
        id: 1,
        img: sneakerImg,
        name: 'Giày Sneaker Trắng',
        desc: 'Giày thể thao thời trang',
        price: '899,000đ',
    },
    {
        id: 2,
        img: bootImg,
        name: 'Giày Boot Da',
        desc: 'Giày boot da cao cấp',
        price: '1,299,000đ',
    },
    {
        id: 3,
        img: caoGotImg,
        name: 'Giày Cao Gót',
        desc: 'Giày cao gót thanh lịch',
        price: '799,000đ',
    },
    {
        id: 4,
        img: luoiImg,
        name: 'Giày Lười',
        desc: 'Giày lười thời trang',
        price: '699,000đ',
    },
];


const bestSellingProducts = [
    { id: 5, img: chayBoImg, name: 'Giày Chạy Bộ', desc: 'Giày thể thao chuyên nghiệp', price: '1,199,000đ', rating: 4.8, reviews: 128 },
    { id: 6, img: canvasImg, name: 'Giày Canvas', desc: 'Giày vải thời trang trẻ trung', price: '599,000đ', rating: 4.6, reviews: 89 },
    { id: 7, img: oxford, name: 'Giày Oxford', desc: 'Giày công sở lịch lãm', price: '1,499,000đ', rating: 4.9, reviews: 156 },
];
// --------------------

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <CategorySection />

            <ProductList
                title="Sản Phẩm Nổi Bật"
                products={featuredProducts}
                cardType="button"
            />

            <SpecialOffer />

            <ProductList
                title="Sản Phẩm Bán Chạy"
                products={bestSellingProducts}
                cardType="rating"
            />

            <Newsletter />
        </>
    );
};

export default HomePage;