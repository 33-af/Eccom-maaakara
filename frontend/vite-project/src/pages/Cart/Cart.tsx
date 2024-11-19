
import CartContent from "../../components/CartPageComponents/CartContent";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Cart() {
    return (
        <>
            <Header />
            <div className="container">
                <CartContent />
            </div>
            <Footer />
        </>

    );
}

export default Cart;
