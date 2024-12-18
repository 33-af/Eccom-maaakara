import React from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import { Path } from '../../../Path';
import { useGetAllMeatJerkQuery } from '../../../services/products';


const Meat: React.FC = () => {


    const { data: MeatJerks, error } = useGetAllMeatJerkQuery();



    if (error) return <p>Error loading banners</p>;


    return (
        <div id='meat-jerky'>
            <h2 className={styles.productList__title}>
                М'ясні джерки
            </h2>

            <section className={styles.productList__cards}>
                {MeatJerks?.map((meatJerk) => (
                    <Link
                        to={`${Path.adminPanelOneMeatJerks}/${meatJerk.id}`}
                        key={meatJerk.id}
                        className={styles.productList__card}
                    >
                        <img
                            src={`https://eccom-maaakara-backend.onrender.com/${meatJerk.image}`}
                            key={meatJerk.id}
                            alt={meatJerk.title}
                            className={styles.productImage}
                        />
                        <div className={styles.productName}>{meatJerk.title}</div>
                        <div className={styles.productPrice}>{meatJerk.price}₴</div>
                        <div className={styles.productDescription}>
                            {meatJerk.description}
                        </div>
                    </Link>
                ))}
            </section>
        </div>
    );
};

export default Meat;
