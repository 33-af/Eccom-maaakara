import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetOnePackQuery, useRemovePackingMutation } from "../../services/products";
import { Path } from "../../Path";
import styles from './style.module.css';


const OneAdminPackage: FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { data: Packing, error, isLoading } = useGetOnePackQuery(id!);
    const [removePacking] = useRemovePackingMutation(); 

    const handleRemove = async () => {
        try {
            await removePacking(id!).unwrap(); 
            alert("Packing successfully deleted.");
            navigate(Path.home); 
        } catch (error) {
            console.error("Error removing Packing:", error);
            alert("Error removing Packing. Please try again.");
        }
    };

    return (
        <div className={styles.oneItemSection}>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error loading product details. Please try again later.</p>
            ) : Packing ? (
                <>
                    <img 
                        src={`http://localhost:5001${Packing.image}`}
                        alt={Packing.title} 
                        className={styles.productImage} 
                    />
                    <h2>{Packing.title}</h2>
                    <p>{Packing.description}</p>
                    <p>Price: {Packing.price}₴</p>
                    <p>Category: {Packing.category}</p>
                    <p>Stock Quantity: {Packing.quantity}</p>
                    <button type="button" onClick={handleRemove} className={styles.removeButton}>
                        Delete Product
                    </button>
                </>
            ) : (
                <p>No product found</p>
            )}
        </div>
    );
};

export default OneAdminPackage;