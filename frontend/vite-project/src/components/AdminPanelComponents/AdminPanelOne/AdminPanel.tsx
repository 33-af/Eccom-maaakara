import  { useState } from 'react';
import { ChangeEvent } from 'react';
import dashboard from '../../../images/dashboaard.png';
import albums from '../../../images/albums.png';
import search from '../../../images/adminSearchIcon.svg';
import notifications from '../../../images/notifications.svg';
import { useDispatch } from 'react-redux';
import styles from './style.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { Path } from '../../../Path';
import { logout } from '../../../redux/slices/adminSlice';
import { useGetAllMeatJerkQuery, useGetAllPackingQuery, useGetAllPigJerksQuery, useGetAllSausagesQuery, useGetBannersQuery } from '../../../services/products';

type ButtonType = 'dashboard' | 'allProducts';

function AdminPanel() {
    const [activeButton, setActiveButton] = useState<ButtonType | null>(null);
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { data: banners, error, isLoading } = useGetBannersQuery();
    const { data: MeatJerks } = useGetAllMeatJerkQuery();
    const { data: Packing } = useGetAllPackingQuery();
    const { data: Pigjerks } = useGetAllPigJerksQuery();
    const { data: Sausages } = useGetAllSausagesQuery();

    if (isLoading) return <p>Loading banners...</p>;
    if (error) return <p>Error loading banners</p>;

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedPage = event?.target.value;
        if (selectedPage) {
            navigate(selectedPage)
        }
    }

    const handleButtonClick = (buttonName: ButtonType) => {
        setActiveButton(prev => prev === buttonName ? null : buttonName);
    };

    const toggleCategories = () => {
        setIsCategoriesOpen(prev => !prev);
    };

    const logoutAccount = () => {
        dispatch(logout());
        navigate(Path.home)
    };

    const toggleSearch = () => {
        setIsActive(!isActive); 
    };


 


    return (
        <section className={styles.sidebar}>
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
                        <span className={`${styles.arrow} ${isCategoriesOpen ? styles.up : ''}`} />
                    </div>

                    {isCategoriesOpen && (
                        <>
                            <div className={styles.meatCategory}>
                                Усі
                                <div className={styles.quantity}>0</div>
                            </div>

                            <div className={styles.meatCategory}>
                                М'ясні джерки
                                <div className={styles.quantity}>0</div>
                            </div>

                            <div className={styles.meatCategory}>
                                Свинячі джерки
                                <div className={styles.quantity}>0</div>
                            </div>

                            <div className={styles.meatCategory}>
                                Ковбаски
                                <div className={styles.quantity}>0</div>
                            </div>

                            <div className={styles.meatCategory}>
                                Набори
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
                    <div className={styles.topContent}>
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
                            </div>
                        </div>


                        <select onChange={handleSelectChange} defaultValue={''} className={`${styles.addNewBtn} btn`}>
                            <option value='' disabled id='newProduct'>Add new product</option>
                            <option value={Path.adminPanelAddBanner} className={`${styles.newProduct}`}>Banner</option>
                            <option value={Path.adminPanelAddMeatJerks} className={`${styles.newProduct}`}>MeaJerks</option>
                            <option value={Path.adminPanelAddPigJerks} className={`${styles.newProduct}`}>PigJerks</option>
                            <option value={Path.adminPanelAddSausage} className={`${styles.newProduct}`}>Sausage</option>
                            <option value={Path.adminPanelPackage} className={`${styles.newProduct}`}>Package</option>
                        </select>


                    </div>

                    <div className={styles.cards}>
                        {banners?.map((banner) => (
                            <div key={banner.id} className={styles.card}>
                                <div className={styles.flex}>
                                    <img src={banner.imageUrl} alt="Banner" className={styles.bannerImage} />
                                </div>
                            </div>
                        ))}

                        {MeatJerks?.map((meatJerk) => (
                            <div key={meatJerk.id} className={styles.card}>
                                <div className={styles.flex}>
                                    <img src={`https://eccom-maaakara-backend.onrender.com${meatJerk.image}`} alt={meatJerk.title} className={styles.bannerImage} />
                                    <div className={styles.cardInfo}>
                                        <div>{meatJerk.title}</div>
                                        <div className={styles.product}>Banner</div>
                                        <div className={styles.price}>₹{meatJerk.price}</div>
                                        <div className={styles.price}>{meatJerk.quantity}</div>
                                    </div>
                                </div>
                            </div>
                        ))}


                        {Packing?.map((Package) => (
                            <div key={Package.id} className={styles.card}>
                                <div className={styles.flex}>
                                    <img src={`https://eccom-maaakara-backend.onrender.com${Package.image}`} alt={Package.title} className={styles.bannerImage} />
                                    <div className={styles.cardInfo}>
                                        <div>{Package.title}</div>
                                        <div className={styles.product}>Banner</div>
                                        <div className={styles.price}>₹{Package.price}</div>
                                        <div className={styles.price}>{Package.quantity}</div>
                                    </div>
                                </div>
                            </div>
                        ))}


                        {Pigjerks?.map((pigjerk) => (
                            <div key={pigjerk.id} className={styles.card}>
                                <div className={styles.flex}>
                                    <img src={`https://eccom-maaakara-backend.onrender.com${pigjerk.image}`} alt={pigjerk.title} className={styles.bannerImage} />
                                    <div className={styles.cardInfo}>
                                        <div>{pigjerk.title}</div>
                                        <div className={styles.product}>Banner</div>
                                        <div className={styles.price}>₹{pigjerk.price}</div>
                                        <div className={styles.price}>{pigjerk.quantity}</div>
                                    </div>
                                </div>
                            </div>
                        ))}


                        {Sausages?.map((sausage) => (
                            <div key={sausage.id} className={styles.card}>
                                <div className={styles.flex}>
                                    <img src={`https://eccom-maaakara-backend.onrender.com${sausage.image}`} alt={sausage.title} className={styles.bannerImage} />
                                    <div className={styles.cardInfo}>
                                        <div>{sausage.title}</div>
                                        <div className={styles.product}>Banner</div>
                                        <div className={styles.price}>₹{sausage.price}</div>
                                        <div className={styles.price}>{sausage.quantity}</div>
                                    </div>
                                </div>
                            </div>
                        ))}




                    </div>
                    <button onClick={logoutAccount}>Logout</button>

                    <div className={styles.sliderButtons}>
                        <button className={styles.sliderButton}>Prev</button>
                        <button className={styles.sliderButton}>Next</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdminPanel;
