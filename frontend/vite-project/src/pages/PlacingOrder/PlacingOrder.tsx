import Placing from "../../components/PlacingOrderComponents/Placing";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function PlacingOrder() {
    return (
        <>
            <Header />
            <div className="container">
                <Placing />
            </div>
            <Footer/>
        </>

    );
}

export default PlacingOrder;
