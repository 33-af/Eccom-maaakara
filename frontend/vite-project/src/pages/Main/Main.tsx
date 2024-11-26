import React from 'react';
import Sidebar from "../../components/MainPageComponents/Sidebar/Sidebar";
import ProductList from "../../components/MainPageComponents/ProductList/ProductList";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollToTopButton from '../../components/scrollTopButton/scrollTopButton';


const Main: React.FC = () => {
    return (
        <>
            <div className="siteWrapper">
                <Header />

                <div className="contentWrapper">
                    <Sidebar />
                    <ProductList />
                </div>

                <Footer />
            </div>
            <ScrollToTopButton />
        </>
    );
};

export default Main;