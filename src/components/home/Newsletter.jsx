const Newsletter = () => {
    return (
        <section className="bg-[#1A1A1A] text-gray-300 py-16">
            <div className="container mx-auto px-4 text-center">
                {/* Tiêu đề */}
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Đăng Ký Nhận Tin
                </h2>

                {/* Mô tả */}
                <p className="text-sm sm:text-base mb-8 text-gray-400">
                    Nhận thông tin về sản phẩm mới và khuyến mãi đặc biệt
                </p>

                {/* Form */}
                <form className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Nhập email của bạn"
                        className="flex-grow bg-white w-full px-4 py-3 rounded-md sm:rounded-l-md sm:rounded-r-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-[#FF6B35] hover:bg-[#e85f2e] transition-colors text-white font-semibold px-6 py-3 rounded-md sm:rounded-r-md sm:rounded-l-none y-auto"
                    >
                        Đăng Ký
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
