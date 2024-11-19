import React, { useState } from 'react';
import dashboard from '../../images/dashboaard.png';
import albums from '../../images/albums.png';
import styles from './style.module.css';
import search from "../../images/searchIcon.svg";
import notifications from "../../images/notifications.svg";
import useSearch from "../../../src/hooks/useSearch";
import { Link, useNavigate } from "react-router-dom";
import { Path } from '../../../src/Path';
import { useAddBannerMutation } from '../../../src/services/products';


type ButtonType = 'dashboard' | 'allProducts';


function AdminPanelProductDetails() {
    const navigate = useNavigate()
    const [addBanner] = useAddBannerMutation();
    const [activeButton, setActiveButton] = useState<ButtonType | null>(null);
    const [isActive, setIsActive] = useState(false);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);

    const handleButtonClick = (buttonName: ButtonType) => {
        setActiveButton(prev => prev === buttonName ? null : buttonName);
        navigate(Path.adminPanel)
    };



    const handleAddBannerClick = async () => {
        if (!selectedImage) {
            return alert('Please select an image');
        }
    
        const formData = new FormData();
        formData.append('image', selectedImage);
    
        try {
            const response = await addBanner(formData).unwrap();
            console.log('Banner added successfully:', response);
            navigate(Path.home);
        } catch (error) {
            console.error('Error adding banner:', error);
            alert('An error occurred while uploading the banner');
        }
    };
    
      
    

    const toggleCategories = () => {
        setIsCategoriesOpen(prev => !prev);
    };

    const toggleSearch = () => {
        setIsActive(!isActive); 
    };

    const { searchTerm, handleSearchChange, handleSearchSubmit } = useSearch((term) => {
        console.log('Searching for:', term);
    });

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedImage(file); 
        }
    };

    const handleClick = () => {
        document.getElementById("fileInput")?.click();
    };

    const handleRemoveImage = () => {
        setSelectedImage(null); 
    };

    return (
        <section className={styles.productDetails}>
            <aside className={styles.leftContent}>
                <div className={styles.logoText}>
                    MAKAJERKY
                </div>

                <div className={styles.globalCategories}>
                    <button
                        className={`${styles.globalCategory} ${activeButton === 'dashboard' ? styles.active : ''}`}
                        onClick={() => handleButtonClick('dashboard')}
                    >
                        <img src={dashboard} alt="Dashboard" />
                        Dashboard
                    </button>

                    <button
                        className={`${styles.globalCategory} ${activeButton === 'allProducts' ? styles.active : ''}`}
                        onClick={() => handleButtonClick('allProducts')}
                    >
                        <img src={albums} alt="All Products" />
                        All products
                    </button>
                </div>

                <div className={styles.meatCategories}>
                    <div className={styles.openCategories} onClick={toggleCategories}>
                        Categories
                        <span className={`${styles.arrow} ${isCategoriesOpen ? styles.up : ''}`}>
                        </span>
                    </div>

                    {isCategoriesOpen && (
                        <>
                            <div className={styles.meatCategory}>
                                Lorem Ipsum
                                <div className={styles.quantity}>0</div>
                            </div>

                            <div className={styles.meatCategory}>
                                Lorem Ipsum
                                <div className={styles.quantity}>0</div>
                            </div>

                            <div className={styles.meatCategory}>
                                Lorem Ipsum
                                <div className={styles.quantity}>0</div>
                            </div>

                            <div className={styles.meatCategory}>
                                Lorem Ipsum
                                <div className={styles.quantity}>0</div>
                            </div>

                            <div className={styles.meatCategory}>
                                Lorem Ipsum
                                <div className={styles.quantity}>0</div>
                            </div>

                            <div className={styles.meatCategory}>
                                Lorem Ipsum
                                <div className={styles.quantity}>0</div>
                            </div>
                        </>
                    )}
                </div>
            </aside>
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <img
                        src={search}
                        alt="search icon"
                        id="inputIcon"
                        onClick={toggleSearch}
                    />
                    <input
                        type="text"
                        placeholder="search"
                        className={`${styles.headerSearch} ${isActive ? styles.active : ''}`}
                        id="headerSearch"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onKeyDown={handleSearchSubmit}
                    />

                    <button className={styles.notificationsIcon}>
                        <img src={notifications} alt="" />
                    </button>

                    <div className={`${styles.adminBtn} btn`}>
                        Admin
                        <span className={`${styles.arrow} ${isCategoriesOpen ? styles.up : ''}`}>
                        </span>
                    </div>
                </header>
                <div className={styles.content}>
                    <div>
                        <div className={styles.title}>
                            All Products
                        </div>

                        <div className='flex'>
                            <Link to={Path.home} className={styles.page}>
                                Home
                            </Link>
                            <span className={styles.minus}>-</span>
                            <Link to={Path.adminPanel} className={styles.page}>
                                All Products
                            </Link>
                            <span className={styles.minus}>-</span>
                            <Link to={Path.adminAddProduct} className={styles.page}>
                                Product Details
                            </Link>
                        </div>
                        <div className={styles.addProduct}>
                            <div className={styles.addProduct__rightContent}>

                                <div className={styles.container}>
                                    <div onClick={handleClick} className={styles.uploadBox}>
                                        <input
                                            id="fileInput"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            style={{ display: "none" }}
                                        />
                                        <p>Нажмите, чтобы выбрать изображение</p>
                                    </div>

                                    {selectedImage && (
                                        <div className={styles.imageContainer}>
                                            <img
                                                src={URL.createObjectURL(selectedImage)} 
                                                alt="Загруженное изображение"
                                                className={styles.uploadedImage}
                                            />
                                            <button onClick={handleRemoveImage} className={styles.removeButton}>
                                                Удалить
                                            </button>
                                        </div>
                                    )}
                                </div>


                                <div className={`${styles.buttons} flex`}>
                                    <button className={`${styles.btn} btn`}>
                                        Update
                                    </button>
                                    <button className={`${styles.btn} btn`}>
                                        Delete
                                    </button>
                                    <button onClick={handleAddBannerClick} className={`${styles.btn} btn`}>
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdminPanelProductDetails;
