import React from 'react';
import styles from './style.module.css';

import { useGetAllPackingQuery } from '../../../services/products';
import { Link } from 'react-router-dom';
import { Path } from '../../../Path';


const Sets: React.FC = () => {
    const { data: Packing, error, isLoading } = useGetAllPackingQuery();

    if (isLoading) return <p>Loading banners...</p>;
    if (error) return <p>Error loading banners</p>;
    return (
        <div className={styles.productsWrapper}>
            <h2 className={styles.productList__title}>
                Набори
            </h2>

            <section className={styles.productList__cards}>
                {Packing?.map((box) => (
                    <Link
                        to={`${Path.adminPanelOnePacking}/${box.id}`}
                        key={box.id}
                        className={styles.productList__card}
                    >
                        <img
                            src={`https://eccom-maaakara-backend.onrender.com/${box.image}`}
                            alt={box.title}
                            className={styles.productImage}
                        />
                        <div className={styles.productName}>{box.title}</div>
                        <div className={styles.productPrice}>{box.price}₴</div>
                        <div className={styles.productDescription}>
                            {box.description}
                        </div>
                    </Link>
                ))}
            </section>
        </div>
    );
};

export default Sets;
