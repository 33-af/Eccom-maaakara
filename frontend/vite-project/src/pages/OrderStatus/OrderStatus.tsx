
import Status from "../../components/OrderStatusComponents/Status";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const OrderStatus = () => {
    return (
        <div className="siteWrapper">
            <Header />
            <div className="contentWrapper">
                <Status />
            </div>
            <Footer />
        </div>
    );
};

export default OrderStatus;