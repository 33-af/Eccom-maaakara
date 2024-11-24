import React from 'react';
import styles from './style.module.css';
import logo from '../../images/logo.png'
import facebook from '../../images/facebook.svg'
import instagram from '../../images/instagram.svg'
import twitter from '../../images/twitter.svg'
import { Link, useNavigate } from 'react-router-dom';
import { Path } from '../../Path';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { selectIsAuthenticated } from '../../redux/slices/adminSlice';


const Footer: React.FC = () => {
    const navigate = useNavigate()
    const isAuthenticated = useSelector((state: RootState) => selectIsAuthenticated(state));

    const handleClick = () => {
        if (isAuthenticated) {
            navigate(Path.adminPanel);
        } else {
            alert('Please log in to access the admin panel.');
        }
    };

    return (
        <div>
            <footer className={styles.footer}>
                <div className="container flex">
                    <div className={styles.leftContent}>
                        <div className="flex">
                            <img src={logo} alt="" />
                            <ul className={styles.pageNavs}>
                                <li><Link to={Path.home} className={styles.nav}>Головна</Link></li>
                                <li><Link to={Path.login} className={styles.nav} onClick={handleClick}>Магазин</Link></li>
                            <li><Link to={Path.contact} className={styles.nav}>Контакти</Link></li>
                        </ul>
                        <div className={`${styles.ourSocials} ${styles.topSocials}`}>
                            <a href="#" className={styles.ourSocial}>
                                <img src={instagram} alt="" />
                            </a>
                            <a href="#" className={styles.ourSocial}>
                                <img src={facebook} alt="" />
                            </a>
                            <a href="#" className={styles.ourSocial}>
                                <img src={twitter} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className={`${styles.adaptiveFlex} flex`}>
                        <div className={`${styles.protectedWrapper} flex`}>
                            <a href='#' className={styles.protected}>
                                © Усі права захищені <br />
                                Політика конфіденційності <br />
                            </a>

                            <ul className={styles.foodNavs}>
                                <li><a href="#" className={`${styles.nav} ${styles.foodNav}`}>М'ясні джерки</a></li>
                                <li><a href="#" className={`${styles.nav} ${styles.foodNav}`}>Свинячі джерки</a>
                                </li>
                                <li><a href="#" className={`${styles.nav} ${styles.foodNav}`}>Ковбаски</a></li>
                                <li><a href="#" className={`${styles.nav} ${styles.foodNav}`}>Набори</a></li>
                            </ul>
                        </div>

                        <div className={styles.contactWithUs}>
                            <a href="#" className={styles.number}>+380636278899</a>
                            <a href="#" className={styles.gmail}>makajerky.com</a>
                            <div className={styles.ourSocials}>
                                <a href="#" className={styles.ourSocial}>
                                    <img src={facebook} alt="" />
                                </a>
                                <a href="#" className={styles.ourSocial}>
                                    <img src={instagram} alt="" />
                                </a>
                                <a href="#" className={styles.ourSocial}>
                                    <img src={twitter} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
            </footer >
        </div >
    );
};

export default Footer;
