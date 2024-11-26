
import Placing from "../../components/PlacingOrderComponents/Placing";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function PlacingOrder() {
    return (
        <div className="siteWrapper">
            <Header />
            <div className="contentWrapper">
                <div className="container">
                    <Placing />
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default PlacingOrder;
