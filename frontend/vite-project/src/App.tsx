
import { Suspense } from 'react';
import router from './utils/routes';
import { RouterProvider } from 'react-router-dom';
import { loader } from './utils/images';
import './App.css'


function App() {
    return (
        <Suspense
            fallback={
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'rgba(216, 216, 216, 0.7)',
                        fontSize: '1.5rem',
                        fontFamily: 'Arial, sans-serif',
                        textAlign: 'center',
                        flexDirection: 'column',
                        height: '100vh'
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
        >
            <RouterProvider router={router} />
        </Suspense>
    )
}

export default App;
