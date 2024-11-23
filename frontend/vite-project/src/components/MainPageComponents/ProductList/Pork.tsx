import React from 'react';
import styles from './style.module.css';
import { useGetAllPigJerksQuery } from '../../../services/products';
import { Link } from 'react-router-dom';
import { Path } from '../../../Path';


const Pork: React.FC = () => {

    const { data: Pigjerks, error } = useGetAllPigJerksQuery();

    if (error) return <p>Error loading banners</p>;



    return (
        <div className={styles.productsWrapper}>
            <h2 className={styles.productList__title}>
                Свинячі джерки
            </h2>

            <section className={styles.productList__cards}>
            {Pigjerks?.map((pigjerk) => (
                    <Link
                    to={`${Path.adminPanelOnePigJerk}/${pigjerk.id}`} 
                    key={pigjerk.id}
                    className={styles.productList__card}
                >
                    <img
                        src={`https://eccom-maaakara-backend.onrender.com/${pigjerk.image}`}
                        alt={pigjerk.title}
                        className={styles.productImage}
                    />
                    <div className={styles.productName}>{pigjerk.title}</div>
                    <div className={styles.productPrice}>{pigjerk.price}₴</div>
                    <div className={styles.productDescription}>
                        {pigjerk.description}
                    </div>
                </Link>
                
                ))}
            </section>
        </div>
    );
};

export default Pork;
