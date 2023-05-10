import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';

export default function Main() {
    const location = useLocation();
    const viewNav = location.pathname === '/' || location.pathname === '/author-form' || location.pathname === "/manga-form" || location.pathname === '/chapter-form' || location.pathname === '/LogIn' || location.pathname === '/mangas/:page';
    const viewFooter = location.pathname === '/manga-form' || location.pathname === '/chapter-form' || location.pathname === '/author-form'

    return (
        <div className="min-h-screen bg-black">
            {viewNav && <Nav />}
                <Outlet />
            {!viewFooter && <Footer />}
        </div>
    );
}

