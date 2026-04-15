import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import { ToastContainer} from 'react-toastify';


const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />

          {/* Toast Container */}
            <ToastContainer />
        </div>
    );
};

export default RootLayout;