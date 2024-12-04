import React from 'react';
import styles from './style.module.css';
import Meat from "./Meat";
import Pork from "./Pork";
import Sausages from "./Sausages";
import Sets from "./Sets";
import { useGetAllMeatJerkQuery, useGetAllPackingQuery, useGetAllPigJerksQuery, useGetAllSausagesQuery } from '../../../services/products';
import { loader } from '../../../utils/images';
import Chicken from './Chicken';



const ProductList: React.FC = () => {
    const { isLoading: isLoadingMeat } = useGetAllMeatJerkQuery();
    const { isLoading: isLoadingPork } = useGetAllPigJerksQuery();
    const { isLoading: isLoadingSausages } = useGetAllSausagesQuery();
    const { isLoading: isLoadingPacking } = useGetAllPackingQuery();

    const isLoading = isLoadingMeat || isLoadingPork || isLoadingSausages || isLoadingPacking;

    if (isLoading) {
        return <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'rgba(216, 216, 216, 0.7)',
                fontSize: '1.5rem',
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                flexDirection: 'column',
                marginBottom: '100px'
            }}
        >
            <img
                src={loader}
                alt="Loading..."
                style={{
                    width: '75px',
                    height: '70px',
                    animation: 'spin 1s linear infinite',
                    marginBottom: 'px',
                }}
            />
        </div>
    }
    return (
        <div className='container'>
            <section className={styles.productList}>

                <Meat />
                <Pork />
                <Chicken />
                <Sausages />
                <Sets />
            </section>
        </div>
    );
};

export default ProductList;
