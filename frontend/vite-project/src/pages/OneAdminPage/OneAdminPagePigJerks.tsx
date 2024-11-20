import { FC } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { useGetOnePigJerkQuery, useRemovePigJerksMutation } from "../../services/products";
import { Path } from "../../Path";
import styles from './style.module.css';
// import { useSelector } from "react-redux";
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/slices/cartSlice';
// import { selectIsAuthenticated } from "../../redux/slices/adminSlice";




const OneAdminPagePigJerks:FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { data: Pigjerks, error, isLoading } = useGetOnePigJerkQuery(id!);
    const [removePigJerks] = useRemovePigJerksMutation(); 

    const handleRemove = async () => {
        try {
            await removePigJerks(id!).unwrap(); 
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
            ) : Pigjerks ? (
                <>
                    <img 
                        src={`https://eccom-maaakara-backend.onrender.com/${Pigjerks.image}`}
                        alt={Pigjerks.title} 
                        className={styles.productImage} 
                    />
                    <h2>{Pigjerks.title}</h2>
                    <p>{Pigjerks.description}</p>
                    <p>Price: {Pigjerks.price}₴</p>
                    <p>Category: {Pigjerks.category}</p>
                    <p>Stock Quantity: {Pigjerks.quantity}</p>
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


export default OneAdminPagePigJerks
