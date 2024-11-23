import { FC, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { useGetOneMeatJerkQuery, useRemoveMeatJerkMutation } from "../../services/products";
import styles from './style.module.css';
import Header from "../../components/Header/Header";
import { Path } from "../../Path";



const OneAdminPageMeatjerks: FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { data: meatJerk, error, isLoading } = useGetOneMeatJerkQuery(id!);
    const [value, setValue] = useState<string>('1');
    const [selectedSize, setSelectedSize] = useState<number | null>(null);
    const [removeMeatJerk] = useRemoveMeatJerkMutation();

    const handleRemove = async () => {
        try {
            await removeMeatJerk(id!).unwrap();
            alert("MeatJerk successfully deleted.");
            navigate('/home'); // Example path, adjust as needed
        } catch (error) {
            console.error("Error removing MeatJerk:", error);
            alert("Error removing MeatJerk. Please try again.");
        }
    };

    const sizes = [
        { label: '300г', value: 300 },
        { label: '500г', value: 500 },
        { label: '600г', value: 600 },
        { label: '1000г', value: 1000 },
    ];

    const handleSizeClick = (value: number) => {
        setSelectedSize(value);
    };

    const handleFocus = () => {
        if (value === '1') {
            setValue('');
        }
    };

    const handleBlur = () => {
        if (!value.trim()) {
            setValue('1');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.currentTarget.blur();
        }
    };

    return (
        <>
            <Header />
            <div className={styles.ProductOneItemSection}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>Error loading product details. Please try again later.</p>
                ) : meatJerk ? (
                    <>
                        <div className={styles.productOneItem}>
                            <div className={styles.containerProductItem}>
                                <div className={styles.productOneTop}>
                                    <button className={styles.backBtn} onClick={() => navigate(Path.home)}>Назад</button>
                                </div>
                                <h1 className={styles.oneItemLeft}>{meatJerk.title}</h1>
                                <div className={styles.productInfo}>
                                    <div className={styles.leftContent}>
                                        <img
                                            src={`https://eccom-maaakara-backend.onrender.com/${meatJerk.image}`}
                                            alt={meatJerk.title}
                                            className={styles.productImg}
                                        />
                                    </div>
                                    <div className={styles.rightContent}>
                                        <p className={styles.priceProduct}>Price: {meatJerk.price}₴</p>
                                        <div className={styles.sizeChoosing}>
                                            <div className={styles.chooseSize}>Виберіть розмір</div>
                                            <div className={styles.sizeOptions}>
                                                {sizes.map((size) => (
                                                    <button
                                                        key={size.value}
                                                        className={`${styles.sizeButton} ${selectedSize === size.value ? styles.selected : ''}`}
                                                        onClick={() => handleSizeClick(size.value)}
                                                        aria-pressed={selectedSize === size.value}
                                                    >
                                                        {size.label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className={styles.quantityWrapper}>
                                            <input
                                                type="text"
                                                value={value}
                                                onFocus={handleFocus}
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                onKeyPress={handleKeyPress}
                                                className={styles.quantityInput}
                                            />
                                            <button className="btn">Додати до кошику</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.description}>
                                        <p>{meatJerk.description}</p>
                                        <p>Category: {meatJerk.category}</p>
                                        <p>Stock Quantity: {meatJerk.quantity}</p>
                                        <button type="button" onClick={handleRemove} className={styles.removeButton}>
                                            Delete Product
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>No product found</p>
                )}
            </div>
        </>
    );
};


export default OneAdminPageMeatjerks;