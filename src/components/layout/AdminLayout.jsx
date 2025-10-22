import { Outlet } from 'react-router-dom';
import Sidebar from '../admin/Sidebar';
import AdminHeader from '../admin/AdminHeader';
import AdminFooter from '../admin/AdminFooter';

const AdminLayout = () => {
    return (
        <div className="flex h-screen bg-[#F1F5F9]">
            <Sidebar />

            <div className="flex-1 flex flex-col h-screen">

                <header className="bg-white shadow-sm p-6">
                    <AdminHeader />
                </header>

                <main className="flex-1 overflow-y-auto p-8">
                    <Outlet />
                </main>

                <footer className="bg-white border-t p-4 text-center">
                    <AdminFooter />
                </footer>
            </div>
        </div>
    );
};

export default AdminLayout;