import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOneSausageQuery, useRemoveSausagesMutation } from "../../services/products";
import { Path } from "../../Path";
import styles from './style.module.css';
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../redux/slices/adminSlice";

const OneAdminSausage: FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { data: sausage, error, isLoading } = useGetOneSausageQuery(id!);
    const [removeSausages] = useRemoveSausagesMutation();

    const isAuthenticated = useSelector(selectIsAuthenticated);

    const handleRemove = async () => {
        try {
            await removeSausages(id!).unwrap();
            alert("MeatJerk successfully deleted.");
            navigate(Path.home);
        } catch (error) {
            console.error("Error removing MeatJerk:", error);
            alert("Error removing MeatJerk. Please try again.");
        }
    };

    return (
        <div className={styles.oneItemSection}>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error loading product details. Please try again later.</p>
            ) : sausage ? (
                <>
                    <img
                        src={`https://ecc-mak-backend.onrender.com/${sausage.image}`}
                        alt={sausage.title}
                        className={styles.productImage}
                    />
                    <h2>{sausage.title}</h2>
                    <p>{sausage.description}</p>
                    <p>Price: {sausage.price}₴</p>
                    <p>Category: {sausage.category}</p>
                    <p>Stock Quantity: {sausage.quantity}</p>
                    {isAuthenticated && (
                        <button type="button" onClick={handleRemove} className={styles.removeButton}>
                            Delete Product
                        </button>
                    )}
                </>
            ) : (
                <p>No product found</p>
            )}
        </div>
    );
};

export default OneAdminSausage
