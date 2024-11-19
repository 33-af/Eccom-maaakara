import { FC, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetOnePigJerkQuery, useRemovePigJerksMutation } from "../../services/products";
import { Path } from "../../Path";
import styles from './style.module.css';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import { selectIsAuthenticated } from "../../redux/slices/adminSlice";




const OneAdminPagePigJerks: FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const { data: Pigjerks, error, isLoading } = useGetOnePigJerkQuery(id!);
    const [removePigJerks] = useRemovePigJerksMutation();
    const [selectedSize, setSelectedSize] = useState<number | null>(null);

    const isAuthenticated = useSelector(selectIsAuthenticated);


    const handleSizeClick = (value: number) => {
        setSelectedSize(value);
    };

    const [value, setValue] = useState<string>('1');

    const handleFocus = () => {
        if (value === '1') {
            setValue('');
        }
    };

    const handleBlur = () => {
        if (value.trim() === '') {
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

    const sizes = [
        { label: '300г', value: 300 },
        { label: '500г', value: 500 },
        { label: '600г', value: 600 },
        { label: '1000г', value: 1000 },
    ];

    const handleRemove = async () => {
        try {
            await removePigJerks(id!).unwrap();
            alert("Packing successfully deleted.");
            navigate(Path.home);
        } catch (error) {
            console.error("Error removing Packing:", error);
            alert("Error removing Packing. Please try again.");
        }
    };

    const handleAddToCart = () => {
        const item = {
            id: 'unique-item-id',
            images: ['path/to/image.jpg'],
            title: 'М\'ясні джерки',
            sizes: [selectedSize || 300],
            price: 200,
            quantity: 1,
        }
        dispatch(addToCart(item))
    }

    return (
        <div className={styles.oneItem}>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error loading product details. Please try again later.</p>
            ) : Pigjerks ? (
                <>
                    <button className={styles.backBtn}>Назад</button>
                    <div className="container">
                        <h1>
                            {Pigjerks.title}
                        </h1>

                        <div className={styles.pageNavigation}>
                            <Link to={Path.home} className={styles.page}>Головна</Link>
                            <div className={styles.minus}>—</div>
                            <Link to="#" className={styles.page}>
                                {Pigjerks.title}
                            </Link>
                            <div className={styles.minus}>—</div>
                        </div>

                        <div className={styles.productInfo}>
                            <div className={styles.leftContent}>
                                <img
                                    src={`http://localhost:5001${Pigjerks.image}`}
                                    alt={Pigjerks.title}
                                    className={styles.productImg}
                                />
                            </div>

                            <div className={styles.rightContent}>
                                <b className={styles.price}>{Pigjerks.price}</b>

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

                                    <button onClick={handleAddToCart} className="btn">Додати до кошику</button>
                                    {isAuthenticated && (
                                        <button type="button" onClick={handleRemove} className={styles.removeButton}>
                                            Delete Product
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <p>{Pigjerks.description}</p>
                    <p>Price: {Pigjerks.price}₴</p>
                    <p>Category: {Pigjerks.category}</p>
                    <p>Stock Quantity: {Pigjerks.quantity}</p> */}

                </>
            ) : (
                <p>No product found</p>
            )}
        </div>
    );
};


export default OneAdminPagePigJerks
