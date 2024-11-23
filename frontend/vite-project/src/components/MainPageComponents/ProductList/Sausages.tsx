import React from 'react';
import styles from './style.module.css';
import { useGetAllSausagesQuery } from '../../../services/products';
import { Link } from 'react-router-dom';
import { Path } from '../../../Path';



const Sausages: React.FC = () => {
    const { data: Sausages , error } = useGetAllSausagesQuery();
    
    if (error) return <p>Error loading banners</p>;

    return (
        <div className={styles.productsWrapper}>
            <h2 className={styles.productList__title}>
                Ковбаски
            </h2>

            <section className={styles.productList__cards}>
            {Sausages?.map((sausage) => (
                    <Link
                    to={`${Path.adminPanelOneSausage}/${sausage.id}`} 
                    key={sausage.id}
                    className={styles.productList__card}
                >
                    <img
                        src={`https://eccom-maaakara-backend.onrender.com/${sausage.image}`}
                        alt={sausage.title}
                        className={styles.productImage}
                    />
                    <div className={styles.productName}>{sausage.title}</div>
                    <div className={styles.productPrice}>{sausage.price}₴</div>
                    <div className={styles.productDescription}>
                        {sausage.description}
                    </div>
                </Link>
                
                ))}
            </section>
        </div>
    );
};

export default Sausages;
