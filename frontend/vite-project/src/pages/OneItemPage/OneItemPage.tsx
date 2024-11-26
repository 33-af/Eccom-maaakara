import React from 'react';
import OneItem from "../../components/OneItemComponents/OneItem";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './index.css'

const OneItemPage: React.FC = () => {
    return (
        <div className="siteWrapper">
            <Header />
            <div className="contentWrapper">
                <OneItem />
            </div>
            <Footer />
        </div>
    );
};

export default OneItemPage;
