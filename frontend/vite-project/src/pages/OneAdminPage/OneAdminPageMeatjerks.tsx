import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  useGetOneMeatJerkQuery, useRemoveMeatJerkMutation } from "../../services/products";
import { Path } from "../../Path";
import styles from './style.module.css';


const OneAdminPageMeatjerks: FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { data: meatJerk, error, isLoading } = useGetOneMeatJerkQuery(id!);
    const [removeMeatJerk] = useRemoveMeatJerkMutation(); 

    const handleRemove = async () => {
        try {
            await removeMeatJerk(id!).unwrap(); 
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
            ) : meatJerk ? (
                <>
                    <img 
                        src={`https://ecc-mak-backend.onrender.com/{meatJerk.image}`}
                        alt={meatJerk.title} 
                        className={styles.productImage} 
                    />
                    <h2>{meatJerk.title}</h2>
                    <p>{meatJerk.description}</p>
                    <p>Price: {meatJerk.price}₴</p>
                    <p>Category: {meatJerk.category}</p>
                    <p>Stock Quantity: {meatJerk.quantity}</p>
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

export default OneAdminPageMeatjerks;
