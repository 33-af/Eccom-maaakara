import React, { useState }  from 'react';
import styles from './style.module.css';
import { useGetBannersQuery } from '../../../services/products';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const { data: banners, error, isLoading } = useGetBannersQuery();
    console.log(banners)
    const [currentIndex, setCurrentIndex] = useState(0); 
    console.log(currentIndex)

    if (isLoading) return <p>Loading banners...</p>;
    if (error) return <p>Error loading banners</p>;


    const nextBanner = () => {
        if (banners && banners.length > 0) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length); 
        }
    };

    const prevBanner = () => {
        if (banners && banners.length > 1) {
            setCurrentIndex(
                (prevIndex) => (prevIndex - 1 + banners.length) % banners.length 
            );
        }
    };

    const currentBanner = banners?.[currentIndex];

    return (
        <div className='container'>
            <div className={styles.sidebar}>
                <aside className={styles.sidebar__categories}>
                    <button className={styles.sidebar__category}>Усі</button>
                    <button className={styles.sidebar__category}>М'ясні джерки</button>
                    <button className={styles.sidebar__category}>Свинячі джерки</button>
                    <button className={styles.sidebar__category}>Ковбаски</button>
                    <button className={styles.sidebar__category}>Набори</button>
                </aside>

                <main className={styles.images}>
                    <div className={styles.slider}>
                        <button onClick={prevBanner} className={styles.arrowButton}>
                            ←
                        </button>

                        {currentBanner ? (
                            <Link to={`/admin-panel-one-banner/${currentBanner?.id}`}>
                            <img
                                src={currentBanner.image}
                                alt="Banner"
                                className={styles.bannerImage}
                            />
                        </Link>
                        ) : (
                            <p>No banners available</p> 
                        )}
                        <button onClick={nextBanner} className={styles.arrowButton}>
                            →
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Sidebar;