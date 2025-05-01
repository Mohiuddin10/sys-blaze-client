
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className="h-16"><Navbar /></div>
            
            <div className="min-h-[calc(100vh-116px)]">
            <Outlet />
            </div>
            
            {/* Footer */}

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;