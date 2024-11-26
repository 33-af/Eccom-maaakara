import React, { useState } from 'react';
import styles from './style.module.css';
import { useGetBannersQuery } from '../../../services/products';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../../../redux/slices/adminSlice';

const Sidebar: React.FC = () => {
    const { data: banners, error } = useGetBannersQuery();
    const [currentIndex, setCurrentIndex] = useState(0);
    const isAuthenticated = useSelector(selectIsAuthenticated)


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
    console.log(currentBanner?.imageUrl);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div className='container'>
            <div className={styles.sidebar}>
                <aside className={styles.sidebar__categories}>
                    {/* <button onClick={() => scrollToSection('all')} className={styles.sidebar__category}>Усі</button> */}
                    <button onClick={() => scrollToSection('meat-jerky')} className={styles.sidebar__category}>М'ясні джерки</button>
                    <button onClick={() => scrollToSection('pork-jerky')} className={styles.sidebar__category}>Свинячі джерки</button>
                    <button onClick={() => scrollToSection('sausages')} className={styles.sidebar__category}>Ковбаски</button>
                    <button onClick={() => scrollToSection('sets')} className={styles.sidebar__category}>Набори</button>
                </aside>

                <main className={styles.images}>
                    <div className={styles.slider}>
                        <button onClick={prevBanner} className={styles.arrowButton}>
                            ←
                        </button>


                        {currentBanner && currentBanner.imageUrl && isAuthenticated ? (
                            <Link to={`/admin-panel-one-banner/${currentBanner.id}`}>
                                <img
                                    src={currentBanner.imageUrl}
                                    alt="Banner"
                                    className={styles.bannerImage}
                                />
                            </Link>
                        ) : (
                            <img
                                src={currentBanner?.imageUrl}
                                className={styles.bannerImage}
                            />
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