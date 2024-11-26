export async function getAllOrderDetails(db) {
    return await db.collection('orders').find({}).toArray(); // Fetch all orders
}

export async function createOrder(db, orderData) {
    return await db.collection('orders').insertOne(orderData); // Insert a new order
}

export async function findOrderById(db, id) {
    return await db.collection('orders').findOne({ id }); // Find an order by ID
}

export async function getNextOrderID(db) {
    try {
        const lastOrder = await db.collection('orders').findOne({}, { sort: { _id: -1 } });
        console.log('Last Order:', lastOrder); // Log the last order for debugging

        // Check if lastOrder is null and return the default order ID
        if (!lastOrder) {
            console.log('No orders found, starting with order ID 100000'); // Log for clarity
            return 100000; // Default starting order ID
        }

        // Convert orderId to a number before adding 1
        return Number(lastOrder.orderID) + 1; // Increment the last order ID
    } catch (error) {
        console.error('Error fetching the last order:', error); // Log any errors
        throw new Error('Could not retrieve the next order ID'); // Throw an error for upstream handling
    }
}