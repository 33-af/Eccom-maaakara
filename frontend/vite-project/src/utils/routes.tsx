import { createBrowserRouter } from "react-router-dom";
import { Path } from "../Path";
import Main from "../pages/Main/Main";
import Cart from "../pages/Cart/Cart";
import ContactsPage from "../pages/Contacts/ContactsPage";
import OrderStatus from "../pages/OrderStatus/OrderStatus";
import PlacingOrder from "../pages/PlacingOrder/PlacingOrder";
import Admin from "../pages/Admin/Admin";
import Login from "../pages/login/Login";
import AdminCreateBanner from "../pages/Admin/AdminCreateBanner";
import AdminCreateMeatJerks from "../pages/Admin/AdminCreateMeatJerks";
import AdminCreatePackage from "../pages/Admin/AdminCreatePackage";
import CreateAdminPigJerks from "../pages/Admin/CreateAdminPigJerks";
import AdminCreateSausage from "../pages/Admin/AdminCreateSausage";
import OneAdminPage from "../pages/OneAdminPage/OneAdminPage";
import OneAdminPageMeatjerks from "../pages/OneAdminPage/OneAdminPageMeatjerks";
import OneAdminPackage from "../pages/OneAdminPage/OneAdminPagePacking";
import OneAdminPagePigJerks from "../pages/OneAdminPage/OneAdminPagePigJerks";
import OneAdminSausage from "../pages/OneAdminPage/OneAdminSausage";





const router = createBrowserRouter([
    {
        path: Path.adminPanel,
        element: <Admin/>,
    },

    {
        path: Path.home,
        element: <Main/>,
    },
    {
        path: Path.login,
        element: <Login/>,
    },
    {
        path: Path.cart,
        element: <Cart/>,
    },
    {
        path: Path.contact,
        element: <ContactsPage/>,
    },
    {
        path: Path.order,
        element: <PlacingOrder/>,
    },
    {
        path: Path.orderStatus,
        element: <OrderStatus/>,
    },
    {
        path: Path.adminPanelAddBanner, 
        element: <AdminCreateBanner />,
    },
    {
        path: `${Path.adminPanelOneBanner}/:id`, // Добавляем параметр id
        element: <OneAdminPage />,
    },
    {
        path: `${Path.adminPanelOneMeatJerks}/:id`, // Добавляем параметр id
        element: <OneAdminPageMeatjerks />,
    },
    {
        path: `${Path.adminPanelOnePacking}/:id`, // Добавляем параметр id
        element: <OneAdminPackage />,
    },
    {
        path: `${Path.adminPanelOneSausage}/:id`, // Добавляем параметр id
        element: <OneAdminSausage />,
    },
    {
        path: `${Path.adminPanelOnePigJerk}/:id`, // Добавляем параметр id
        element: <OneAdminPagePigJerks />,
    },
    {
        path: Path.adminPanelAddMeatJerks, 
        element: <AdminCreateMeatJerks />,
    },
    {
        path: Path.adminPanelAddPigJerks, 
        element: <CreateAdminPigJerks />,
    },
    {
        path: Path.adminPanelAddSausage, 
        element: <AdminCreateSausage />,
    },
    {
        path: Path.adminPanelPackage, 
        element: <AdminCreatePackage />,
    }
  
])

export default router