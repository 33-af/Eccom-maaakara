import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import { Path } from '../../../Path';
import {  useGetChickensQuery } from '../../../services/products';


const Chicken: React.FC = () => {


    const { data: Chicken, error } = useGetChickensQuery();



    if (error) return <p>Error loading banners</p>;


    return (
        <div id='meat-jerky'>
            <h2 className={styles.productList__title}>
                Курячі Джерки
            </h2>

            <section className={styles.productList__cards}>
                {Chicken?.map((chicken) => (
                    <Link
                        to={`${Path.adminPanelOneChicken}/${chicken.id}`}
                        key={chicken.id}
                        className={styles.productList__card}
                    >
                        <img
                            src={`https://eccom-maaakara-backend.onrender.com/${chicken.image}`}
                            key={chicken.id}
                            alt={chicken.title}
                            className={styles.productImage}
                        />
                        <div className={styles.productName}>{chicken.title}</div>
                        <div className={styles.productPrice}>{chicken.price}₴</div>
                        <div className={styles.productDescription}>
                            {chicken.description}
                        </div>
                    </Link>
                ))}
            </section>
        </div>
    );
};

export default Chicken;
