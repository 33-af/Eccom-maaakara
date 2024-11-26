
import CartContent from "../../components/CartPageComponents/CartContent";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Cart() {
    return (
        <div className="siteWrapper">
            <Header />
            <div className="container contentWrapper">
                <CartContent />
            </div>
            <Footer />
        </div>

    );
}
export default Cart;
