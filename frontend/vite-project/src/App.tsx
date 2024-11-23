
// import { Suspense } from 'react';
import router from './utils/routes';
import { RouterProvider } from 'react-router-dom';
// import { loader } from './utils/images';
import './App.css'


function App() {
    return (
        // <Suspense
        //     fallback={
        //         <div
        //             style={{
        //                 display: 'flex',
        //                 justifyContent: 'center',
        //                 alignItems: 'center',
        //                 height: '100vh',
        //                 color: 'rgba(216, 216, 216, 0.7)',
        //                 fontSize: '1.5rem',
        //                 fontFamily: 'Arial, sans-serif',
        //                 textAlign: 'center',
        //                 position: 'relative',
        //                 flexDirection: 'column', // Добавляем вертикальное расположение
        //             }}
        //         >
        //             <img
        //                 src={loader}
        //                 alt="Loading..."
        //                 style={{
        //                     width: '110px',
        //                     height: '100px',
        //                     animation: 'spin 1s linear infinite',
        //                     marginBottom: '44px', // Отступ от нижнего края изображения
        //                 }}
        //             />
        //             <div className="container-bottom">
        //                 <span className="border-left"></span>
        //                 <span className="border-right"></span>
        //             </div>
        //         </div>
        //     }
        // >
            <RouterProvider router={router} />
        // </Suspense>
    )
}

export default App;
