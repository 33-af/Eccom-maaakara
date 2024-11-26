import React from 'react';

import Contacts from "../../components/ContactsComponents/Contacts";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ContactsPage: React.FC = () => {
    return (
        <div className="siteWrapper">
            <Header />
            <div className="contentWrapper">
                <Contacts />
            </div>
            <Footer />
        </div>
    );
};

export default ContactsPage;
