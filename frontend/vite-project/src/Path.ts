export const Path = {
    home: '/',
    cart: '/cart',
    login: '/register',
    contact: '/contact',
    order: '/order',
    orderStatus: '/order-status',
    producOneBytId: '/product/:id', 
    adminPanel: '/admin-panel',
    adminPanelAddBanner: '/admin-panel-add-banner',
    adminPanelOneBanner: '/admin-panel-one-banner',
    adminPanelDelete: '/admin-panel-delete-banner',
    adminPanelAddMeatJerks: '/admin-panel-add-meatjerks',
    adminPanelOneMeatJerks: '/admin-panel-one-meatjerks',
    adminPanelAddPigJerks: '/admin-panel-add-pigjerks',
    adminPanelOnePigJerk: '/admin-panel-one-pigjerk',

    adminPanelOneChicken: '/admin-panel-one-chicken',
    adminPanelAddChicken: '/admin-panel-add-chicken',
    adminPanelAddSausage: '/admin-panel-add-sausage',
    adminPanelOneSausage: '/admin-panel-one-sausage',
    adminPanelPackage: '/admin-panel-add-package',
    adminPanelOnePacking: '/admin-panel-one-packing',
    adminAddProduct: '/admin-add-product',
    adminProductId: '/admin-panel/product/:id',
    adminEditProduct: '/admin-panel/edit/:id',
    adminDeleteProduct: '/admin-panel/delete/:id'
}as const;
