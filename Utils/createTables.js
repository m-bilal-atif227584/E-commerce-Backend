import { createUserTable } from '../Models/userTable.js'
import { createOrderItemTable } from '../Models/orderItemsTable.js'
import { createOrdersTable } from '../Models/ordersTable.js'
import { createProductReviewsTable } from '../Models/productReviewsTable.js'
import { createProductsTable } from '../Models/productTable.js'
import { createShippingInfoTable } from '../Models/shippinginfoTable.js'

export const createTables = async() => {
    try {
        await createUserTable();
        await createProductsTable();
        await createOrdersTable();
        await createOrderItemTable();
        await createProductReviewsTable();
        await createShippingInfoTable();
        console.log("ALL TABLES CREATED SUCCESSFULLY !");
    } catch (error) {
        console.error("ERROR CREATING TABLE:", error);
    }
}