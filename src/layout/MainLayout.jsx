
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div className="h-16"><Navbar /></div>
            
            <Outlet />
        </div>
    );
};

export default MainLayout;