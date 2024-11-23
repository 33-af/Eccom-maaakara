
import styles from './style.module.css';
import { useGetOneBannerQuery, useRemoveBannerMutation } from '../../services/products';
import { useNavigate, useParams } from 'react-router-dom';
import { Path } from '../../Path';
import { FC } from 'react';



const OneAdminPage: FC = () => {
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>(); 

    const { data: banner, error } = useGetOneBannerQuery(id!);
    const [removeBanner] = useRemoveBannerMutation(); 

    const handleRemove = async () => {
        try {
            await removeBanner(id!).unwrap(); 
            alert("Баннер успешно удален");
            navigate(Path.home)
        } catch (error) {
            console.error("Ошибка при удалении баннера:", error);
            alert("Ошибка при удалении баннера");
        }
    };



    return (
        <div className={styles.oneItemSection}>
          { error ? (
                <p>Error loading banner</p>
            ) : banner ? (
                <>
                    <img 
                        src={banner?.imageUrl}
                        className={styles.bannerImage}
                    />
                    <button type='button' onClick={handleRemove}>
                        Удалить баннер
                    </button>
                </>
            ) : (
                <p>No banners available</p>
            )}
        </div>
    );
};

export default OneAdminPage;