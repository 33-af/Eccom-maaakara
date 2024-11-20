import React from 'react';
import styles from './style.module.css';
import Meat from "./Meat";
import Pork from "./Pork";
import Sausages from "./Sausages";
import Sets from "./Sets";



const ProductList: React.FC = () => {
    return (
        <div className='container'>
            <section className={styles.productList}>
                
                <Meat/>
                <Pork/>
                <Sausages/>
                <Sets/>
            </section>
        </div>
    );
};

export default ProductList;
